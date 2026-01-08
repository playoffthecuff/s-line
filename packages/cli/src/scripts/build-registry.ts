import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { findFilePath } from "../utils/fs/find-file-path.js";
import { registryFileSchema, registrySchema, type RegistryFileSchema } from "../schema/schema.js";
import { normalizeFileContentStr } from "../utils/strings/format.js";


const REGISTRY_SRC_DIR = "registry";
const DESTINATION_DIR = "public";

const registryDir = path.join(process.cwd(), REGISTRY_SRC_DIR);

const destinationDir = path.join(process.cwd(), DESTINATION_DIR);

export const buildRegistry = () => {
	const registryPath = findFilePath(destinationDir, "registry.json");
	if (!registryPath) throw new Error("'registry.json' was not found in '/public' of your work directory");
	const registryDir = path.dirname(registryPath);
	const registryFileContent = readFileSync(registryPath, 'utf-8');
	try {
		const rawRegistry = JSON.parse(registryFileContent);
		try {
			const registry = registrySchema.parse(rawRegistry);
			for (const item of registry.items) {
				const files: RegistryFileSchema['files'] = [];
				for (const file of item.files) {
					const p = path.join(process.cwd(), file.path);
					const c = readFileSync(p, { encoding: 'utf-8' });
					files.push({
						path: file.target ?? file.path,
						content: normalizeFileContentStr(c),
					});
				}
				const raw: RegistryFileSchema = {
					files,
					name: item.name,
				};
				if (item.regDeps) raw.regDeps = item.regDeps;
				if (item.pkgDeps) raw.pkgDeps = item.pkgDeps;
				try {
					const vr = registryFileSchema.parse(raw);
					const dest = path.join(registryDir, `${item.name}.json`);
					writeFileSync(dest, JSON.stringify(vr, null, 2), 'utf-8');
				} catch {
					console.error("invalid registry item", item.name);
					return;
				}
			}
		} catch (e) {
			console.error('registry is not valid', e);
			return;
		}
	} catch {
		console.error('registry file is corrupted');
		return;
	}
};

buildRegistry();