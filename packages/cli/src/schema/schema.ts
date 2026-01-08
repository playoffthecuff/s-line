import { readFile } from "node:fs/promises";
import path from "node:path";
import z from "zod/v4";
import { jsonParse } from "../utils/strings/json-parse.js";
import { existsSync, writeFileSync } from "node:fs";
import { installDepsIfMissing } from "../commands/registry/deps.js";

export const registryItemFilesSchema = z.array(z.object({
	path: z.string(),
	target: z.string().optional(),
})).min(1).refine(v => new Set(v.map(v => v.path)).size === v.length, { error: "duplicate file" });

export type RegistryItemFilesSchema = z.infer<typeof registryFileSchema>;

export const registryItemSchema = z.object({
	name: z.string(),
	regDeps: z.array(z.string()).optional(),
	pkgDeps: z.array(z.string()).optional(),
	files: registryItemFilesSchema,
});

export type RegistryItemSchema = z.infer<typeof registryItemSchema>;

export const registrySchema = z.object({
	name: z.string(),
	url: z.url(),
	items: z.array(registryItemSchema).refine(v => new Set(v.map(v => v.name)).size === v.length, { error: "duplicate name" }),
});

export type RegistrySchema = z.infer<typeof registrySchema>;

export const registryFileFilesSchema = z.array(z.object({
	path: z.string(),
	content: z.string(),
}));

export type RegistryFileFilesSchema = z.infer<typeof registryFileFilesSchema>;

export const registryFileSchema = z.object({
	name: z.string(),
	regDeps: z.array(z.string()).optional(),
	pkgDeps: z.array(z.string()).optional(),
	files: registryFileFilesSchema
});

export type RegistryFileSchema = z.infer<typeof registryFileSchema>;