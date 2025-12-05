import { z } from "zod/v4";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";

const registryItemFileSchema = z.object({
	path: z.string(),
});

export const registryItemSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	type: z.enum(["component", "hook", "util"]),
	files: z.array(registryItemFileSchema).min(1),
	dependencies: z.array(z.string()).optional(),
	registryDependencies: z.array(z.string()).optional(),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;

const loadRegistryEntry = async (dirname: string, filename: string) => {
	const src = path.join(dirname, filename);
	const raw = await readFile(src, "utf-8");
	const obj = JSON.parse(raw);
	return registryItemSchema.parse(obj);
};

export const resolveRegistryEntry =
	async (dirname: string, filename: string, handled = new Set<string>()): Promise<RegistryItem[]> => {
		if (handled.has(filename)) return [];
		handled.add(filename);
		let deps: RegistryItem[] = [];
		const entry = await loadRegistryEntry(dirname, filename);
		if (entry.registryDependencies?.length) {
			for (const dep of entry.registryDependencies) {
				const entry = await resolveRegistryEntry(dirname, dep, handled);
				deps.push(...entry);
			}
		}
		return [...deps, entry];
	};

