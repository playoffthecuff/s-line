import path from "path";
import { findFilePath } from "../utils/fs/find-file-path.js";
import { readFileSync, writeFileSync } from "fs";
import {readFile} from "fs/promises";
import { jsonParse } from "../utils/strings/json-parse.js";
import { registryFileSchema, registrySchema, type RegistryFileFilesSchema, type RegistryFileSchema } from "../schema/schema.js";
import { normalizeFileContentStr } from "../utils/strings/format.js";

const DESTINATION_DIR = "public";

const cwd = process.cwd();
const destinationDir = path.join(cwd, DESTINATION_DIR);

export const build = async () => {
	const registryPath = findFilePath(destinationDir, "registry.json");
	if (!registryPath) throw new Error("'registry.json' was not found in '/public' of your work directory");
	const registryDir = path.dirname(registryPath);
	const registryFileContent = readFileSync(registryPath, 'utf-8');
	const parsedJson = jsonParse(registryFileContent);
	if (parsedJson.left) throw parsedJson.left;
	const rawRegistry = parsedJson.right;
	const parsedRegistry = registrySchema.safeParse(rawRegistry);
	if (!parsedRegistry.success) throw parsedRegistry.error;
	const registry = parsedRegistry.data;
	for (const item of registry.items) {
		const files: RegistryFileFilesSchema = [];
		for (const file of item.files) {
			const itemFilePath = path.join(cwd, file.path);
			try {
				const fileContent = await readFile(itemFilePath, {encoding: "utf-8"});
				files.push({
					content: normalizeFileContentStr(fileContent),
					path: file.target ?? file.path,
				})
			} catch {
				throw new Error(`Failed to read source file ${file.path}`);
			}
		}
		const candidateRegistryFile: RegistryFileSchema = {
			files,
			name: item.name,
		};
		if (item.regDeps) candidateRegistryFile.regDeps = item.regDeps;
		if (item.pkgDeps) candidateRegistryFile.pkgDeps = item.pkgDeps;
		const parsedRegistryFile = registryFileSchema.safeParse(candidateRegistryFile);
		if (!parsedRegistryFile.success) throw parsedRegistryFile.error;
		const registryFile = parsedRegistryFile.data;
		const dest = path.join(registryDir, `${item.name}.json`);
		writeFileSync(dest, JSON.stringify(registryFile, null, 2), 'utf-8');
	}
};