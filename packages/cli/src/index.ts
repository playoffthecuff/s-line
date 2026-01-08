#!/usr/bin/env node

import { Command } from "commander";
import { add } from "./commands/add.js";
import { build } from "./commands/build.js";
import { init } from "./commands/init.js";

const cli = new Command();

cli.command("init")
.description("Add dependencies to project")
.action(init);

cli.command("add [name]")
.description("Add component to your project")
.action(add);

cli.command("build")
.description("Build registry")
.action(build);

try {
	cli.parse();
} catch (e) {
	console.error(e);
	process.exit(1);
}
