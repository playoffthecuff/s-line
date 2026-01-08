import { installDepsIfMissing } from "./registry/deps.js";

const DEV_DEPS = ['unocss', '@unocss/postcss', '@unocss/preset-wind4'];
const DEPS = ['@base-ui/react', 'class-variance-authority', 'clsx'];

export const init = async () => {
	await installDepsIfMissing(DEPS);
	await installDepsIfMissing(DEV_DEPS, true);
}