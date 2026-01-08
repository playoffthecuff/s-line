import fs from "node:fs";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";

const pmLockFilenames = {
	bun: "bun.lock",
	pnpm: "pnpm-lock.yaml",
	yarn: "yarn.lock",
	npm: "package-lock.json",
} as const;

export const detectPackageManager = () =>
	Object.entries(pmLockFilenames).find(([_, lock]) => fs.existsSync(lock))?.[0] ?? "npm";

const run = promisify(exec);

export const isDependencyInstalled = (name: string) => {
	const cwd = process.cwd();
	const pkgPath = path.join(cwd, "package.json");

	if (!fs.existsSync(pkgPath)) return false;

	const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

	return Boolean(
		pkg.dependencies?.[name] ||
		pkg.devDependencies?.[name] ||
		pkg.peerDependencies?.[name]
	);
};

export const installDeps = async (deps: string[], dev?: boolean) => {
	const pm = detectPackageManager();
	const cmd = {
		bun: `bun add ${dev ? '-D ' : ''}${deps.join(" ")}`,
		pnpm: `pnpm add ${dev ? '-D ' : ''}${deps.join(" ")}`,
		yarn: `yarn add ${dev ? '-D ' : ''}${deps.join(" ")}`,
		npm: `npm install ${dev ? '-D ' : ''}${deps.join(" ")}`,
	}[pm];
	console.log(`📦 Installing ${deps.join(", ")} using ${pm}...`);
	if (cmd) await run(cmd);
};

export const installDepsIfMissing = async (deps: string[], dev?: boolean) => {
	const depsToInstall = deps.filter((d) => !isDependencyInstalled(d));
	if (depsToInstall.length === 0) {
		console.log(`✔ All ${dev ? 'dev ': ''}deps already installed: ${deps.join(", ")}`);
		return;
	}
	console.log(`📦 Installing ${depsToInstall.join(", ")}`);
	try {
		await installDeps(depsToInstall, dev);
	} catch (e) {
		console.error("❌ Install error:", e);
	}
};
