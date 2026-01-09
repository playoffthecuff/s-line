import inquirer from "inquirer";
import path from "node:path";
import { registryFileFilesSchema, registryFileSchema, registryItemSchema, type RegistryFileFilesSchema, type RegistryFileSchema, type RegistryItemSchema } from "../schema/schema.js";
import { installDepsIfMissing } from "./registry/deps.js";
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { readFile } from "node:fs/promises";
import z from "zod/v4";

const UI_REGISTRY_URL = "https://smoothed.vercel.app/registry";

const getLocalRegistryEntry = async (dirname: string, filename: string) => {
	const src = path.join(dirname, filename);
	const raw = await readFile(src, "utf-8");
	const obj = JSON.parse(raw);
	return registryItemSchema.parse(obj);
};

const getRemoteRegistryFile = async (url: string) => {
	const response = await fetch(url);
	const data = await response.json();
	return registryFileSchema.parse(data);
};

const resolveLocalRegistryEntry =
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

const resolveRemoteRegistryEntry =
	async (url: string, handled = new Set<string>()): Promise<RegistryFileSchema[]> => {
		const baseUrl = url.split(/(.+\/).+.json$/)[1];
		if (!baseUrl) throw new Error(`Invalid URL ${url}`);
		if (handled.has(url)) return [];
		handled.add(url);
		let deps: RegistryFileSchema[] = [];
		const entry = await getRemoteRegistryFile(url);
		if (entry.regDeps?.length) {
			for (const dep of entry.regDeps) {
				const entry = await resolveRemoteRegistryEntry(`${baseUrl}${dep}.json`, handled);
				deps.push(...entry);
			}
		}
		return [...deps, entry];
	};

const installRegistryFileContents = (files: RegistryFileFilesSchema, cwd: string) => {
	const parsedFiles = registryFileFilesSchema.safeParse(files);
	if (!parsedFiles.success) throw new Error('Invalid object structure');
	for (const file of parsedFiles.data) {
		if (existsSync(file.path)) continue;
		const dir = file.path.split(/^(.+)\/.+$/)[1];
		if (dir) {
			mkdirSync(path.join(cwd, dir), {recursive: true});
			writeFileSync(path.join(cwd, file.path), file.content);
		}
	}
};

export const installRegistryFilesAndDeps = async (entries: RegistryFileSchema[], cwd: string) => {
	const packagesToInstall = [...new Set(entries.reduce((a: string[], v) => {
		if (v.pkgDeps?.length) a.push(...v.pkgDeps);
		return a;
	}, []))];
	installDepsIfMissing(packagesToInstall);
	const filesToInstall = [...new Set(entries.reduce((a: RegistryFileFilesSchema, v) => (a.push(...v.files), a), []))];
	installRegistryFileContents(filesToInstall, cwd);
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
	const registryItems = await resolveRemoteRegistryEntry(url);
	await installRegistryFilesAndDeps(registryItems, process.cwd());
};
