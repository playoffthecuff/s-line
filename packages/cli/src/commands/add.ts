import inquirer from "inquirer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { registryFileFilesSchema, registryFileSchema, registryItemSchema, type RegistryFileFilesSchema, type RegistryFileSchema, type RegistryItemSchema } from "../schema/schema.js";
import { installDepsIfMissing } from "./registry/deps.js";
import { mkdirSync, copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { readFile } from "node:fs/promises";
import { jsonParse } from "../utils/strings/json-parse.js";
import z from "zod/v4";

const UI_REGISTRY_URL = "https://smoothed.vercel.app/registry";

const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);

const getLocalRegistryEntry = async (dirname: string, filename: string) => {
	const src = path.join(dirname, filename);
	const raw = await readFile(src, "utf-8");
	const obj = JSON.parse(raw);
	return registryItemSchema.parse(obj);
};

const getRemoteRegistryFile = async (url: string) => {
	const response = await fetch(url);
	const data = await response.json();
	const obj = JSON.parse(data);
	return registryFileSchema.parse(obj);
};

export const resolveLocalRegistryEntry =
	async (dirname: string, filename: string, handled = new Set<string>()): Promise<RegistryItemSchema[]> => {
		if (handled.has(filename)) return [];
		handled.add(filename);
		let deps: RegistryItemSchema[] = [];
		const entry = await getLocalRegistryEntry(dirname, filename);
		if (entry.regDeps?.length) {
			for (const dep of entry.regDeps) {
				const entry = await resolveLocalRegistryEntry(dirname, dep, handled);
				deps.push(...entry);
			}
		}
		return [...deps, entry];
	};

export const resolveRemoteRegistryEntry =
	async (url: string, handled = new Set<string>()): Promise<RegistryFileSchema[]> => {
		const baseUrl = url.split(/(.+\/)[a-z]+\.json$/)[1];
		if (!baseUrl) throw new Error(`Invalid URL ${url}`);
		if (handled.has(url)) return [];
		handled.add(url);
		let deps: RegistryFileSchema[] = [];
		const entry = await getRemoteRegistryFile(url);
		if (entry.regDeps?.length) {
			for (const dep of entry.regDeps) {
				const entry = await resolveRemoteRegistryEntry(`${baseUrl}${dep}`, handled);
				deps.push(...entry);
			}
		}
		return [...deps, entry];
	};

const installRegistryFileContents = (files: RegistryFileFilesSchema, basePath: string) => {
	const parsedFiles = registryFileFilesSchema.safeParse(files);
	if (!parsedFiles.success) throw new Error('Invalid object structure');
	for (const file of parsedFiles.data) {
		if (existsSync(file.path)) continue;
		const { left, right } = jsonParse(file.content);
		if (left) throw new Error('Invalid JSON content');
		writeFileSync(path.join(basePath, file.path), right);
	}
};

export const installRegistryFilesAndDeps = async (entries: Promise<RegistryFileSchema[]>, basePath: string) => {
	const files = await entries;
	const packagesToInstall = [...new Set(files.reduce((a: string[], v) => {
		if (v.pkgDeps?.length) a.push(...v.pkgDeps);
		return a;
	}, []))];
	installDepsIfMissing(packagesToInstall);
	const filesToInstall = [...new Set(files.reduce((a: RegistryFileFilesSchema, v) => (a.push(...v.files), a), []))];
	installRegistryFileContents(filesToInstall, basePath);
};

const urlSchema = z.url();

export const add = async (name: string) => {
	if (!name) {
		const { component } = await inquirer.prompt([{ type: "input", name: "component", message: "Component name:" }]);
		name = component;
	}
	const normalizedName = name.trim().toLowerCase();
	const parsedName = urlSchema.safeParse(normalizedName);
	const url = parsedName.success ? parsedName.data : `${UI_REGISTRY_URL}/${normalizedName}.json`
	const dir = path.join(process.cwd(), "src");
	const registrySrc = path.join(dirName, "../src", "registry", "schema");
	const templatesDir = path.join(dirName, "../src", "templates");
	const registryItems = parsedName.success ? await resolveRemoteRegistryEntry(url) : await resolveLocalRegistryEntry(registrySrc, name.toLowerCase() + '.json');
	for (const item of registryItems) {
		if (item.pkgDeps?.length) await installDepsIfMissing(item.pkgDeps);
		if (item.files.length) {
			for (const file of item.files) {
				const src = path.join(templatesDir, 'components', file.path);
				const dest = path.join(dir, 'components/ui', file.path);
				mkdirSync(path.dirname(dest), { recursive: true });
				copyFileSync(src, dest);
			}
		}
	}
};
