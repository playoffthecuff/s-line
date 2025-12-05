#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolveRegistryEntry } from "./registry/schema.js";
import { installDepsIfMissing } from "./utils/deps.js";

const cli = new Command();

const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);

cli.command("add [name]").description("Add component to your project").action(async (name: string) => {
	if (!name) {
		const { component } = await inquirer.prompt([{ type: "input", name: "component", message: "Component name:" }]);
		name = component;
	}
	const dir = path.join(process.cwd(), "src");
	const registrySrc = path.join(dirName, "../src", "registry", "schema");
	const templatesDir = path.join(dirName, "../src", "templates");
	const registryItems = await resolveRegistryEntry(registrySrc, name.toLowerCase() + '.json');
	for (const item of registryItems) {
		if (item.dependencies?.length) await installDepsIfMissing(item.dependencies);
		if (item.files.length) {
			for (const file of item.files) {
				const { type } = item;
				const src = path.join(templatesDir, type + 's', file.path);
				const dest = path.join(dir, type === 'component' ? 'components/ui' : type + 's', file.path);
				await fs.mkdir(path.dirname(dest), { recursive: true });
				await fs.copyFile(src, dest);
			}
		}
	}
});

// cli.command("add [name]")
// 	.description("Add a component to your project")
// 	.action(async (name) => {
// 		if (!name) {
// 			const { component } = await inquirer.prompt([
// 				{ type: "input", name: "component", message: "Component name:" }
// 			]);
// 			name = component;
// 		}
// 		const uiSrc = path.join(dirName, "../templates/ui");
// 		const compSrc = path.join(uiSrc, name);
// 		if (name === "button" || name === "toggle") {
// 			const dir = path.join(process.cwd(), "src", "components", "ui");
// 			const ops = [{ src: path.join(uiSrc, "use-wave-animate.tsx"), dest: path.join(dir, "use-wave-animate.tsx") }, { src: path.join(uiSrc, "icons", "spinner.tsx"), dest: path.join(dir, "icons", "spinner.tsx") }];
// 			try {
// 				await fs.mkdir(path.join(dir, "icons"), { recursive: true });
// 				await Promise.all(ops.map((op) => fs.copyFile(op.src, op.dest)));
// 				const dest = path.join(process.cwd(), "src", "components", "ui", name);
// 				await fs.cp(compSrc, dest, { recursive: true });
// 			} catch (e) {
// 				console.error(e);
// 			}
// 		};
// 	});

cli.parse();
