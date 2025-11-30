#!/usr/bin/env node

import {Command} from "commander";
import inquirer from "inquirer";
import path from "node:path";
import fs from "node:fs/promises";
import {fileURLToPath} from "node:url";
import { promisify } from "node:util";
import { existsSync, readFileSync } from "node:fs";
import { exec } from "node:child_process";

const managerLocks = {
	bun: "bun.lock",
	pnpm: "pnpm-lock.yaml",
	yarn: "yarn.lock",
	npm: "package-lock.json",
} as const;

export const detectPackageManager = () =>
	Object.entries(managerLocks).find(([_, lock]) => existsSync(lock))?.[0] ?? "npm";

const run = promisify(exec);

export function isDependencyInstalled(name: string) {
	const cwd = process.cwd();
	const pkgPath = path.join(cwd, "package.json");

	if (!existsSync(pkgPath)) return false;

	const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

	return !!(
		pkg.dependencies?.[name] ||
		pkg.devDependencies?.[name] ||
		pkg.peerDependencies?.[name]
	);
}

export const installDeps = async(deps: string[]) =>{
	const pm = detectPackageManager();
	const cmd = {
		bun: `bun add ${deps.join(" ")}`,
		pnpm: `pnpm add ${deps.join(" ")}`,
		yarn: `yarn add ${deps.join(" ")}`,
		npm: `npm install ${deps.join(" ")}`,
	}[pm];
	console.log(`📦 Installing ${deps.join(", ")} using ${pm}...`)
	if (cmd) await run(cmd);
}

export const installDepsIfMissing = async (deps: string[]) =>{
	 const depsToInstall = deps.filter((d) => !isDependencyInstalled(d));
 if (depsToInstall.length === 0) {
		console.log(`✔ All deps already installed: ${deps.join(", ")}`);
		return;
	}

		console.log(`📦 Installing ${depsToInstall.join(", ")}`);
		try {
			await installDeps(depsToInstall);
		} catch (e) {
		console.error("❌ Install error:", e);
	}

	}

const cli = new Command();

const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);

cli.command("add [name]")
	.description("Add a component to your project")
	.action(async (name) => {
		if (!name) {
			const { component } = await inquirer.prompt([
				{ type: "input", name: "component", message: "Component name:" }
			]);
			name = component;
		}
		const src = path.join(dirName, "../templates", name);
		const dest = path.join(process.cwd(), "src", "components", name);
		await fs.cp(src, dest, {recursive: true});
		await installDepsIfMissing(["class-variance-authority"]);
		console.log(`✅ Added ${name}`);
	});

cli.parse();
