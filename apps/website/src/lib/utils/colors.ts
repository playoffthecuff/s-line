import Color from "colorjs.io";

export const createLightness = (
	min = 0,
	max = 1,
	steps = 21,
	k = Math.log10(25),
) =>
	[...Array(steps)].map((_, i) =>
		i > steps / 2
			? Math.round(
					(max * 100 - (max - min) * (10 ** k * 2 - (steps - i - 1) ** k) * 2) *
						10,
				) / 1000
			: Math.round((max * 100 - i ** k * (max - min) * 2) * 10) / 1000,
	);

export type ColorSpace = "srgb" | "p3";

export const findMaxChroma = (
	L = 0,
	H = 0,
	space: ColorSpace = "srgb",
	step = 0.01,
	endStep = 0.00001,
	C = 0,
) => {
	let f = false;
	while (step > endStep) {
		if (
			new Color("oklch", [L, C, H]).to(space).coords.some((v) => v < 0 || v > 1)
		) {
			if (f) {
				C -= step;
				f = false;
			}
			step /= 10;
		} else {
			f = true;
			C += step;
		}
	}
	return C;
};

export function findMaxChromaForHue(
	hue: number,
	space: ColorSpace = "srgb",
	steps = 100,
) {
	let best = { L: 0, C: 0 };
	for (let i = 0; i <= steps; i++) {
		const L = i / steps;
		const C = findMaxChroma(L, hue, space);
		if (C > best.C) best = { L, C };
	}
	return best;
}

const rotationCompensation = (H = 0) => ((H % 360) + 360) % 360;

const calcAsymmetricalHue = (H: number, L: number, k: number) =>
	Math.round(
		rotationCompensation(
			H +
				k *
					(1 - L) *
					(-51 * Math.exp(-((H - 98) ** 2 / 4000)) +
						23 * Math.exp(-((H + 7) ** 2 / 2000)) +
						31.4 * Math.exp(-((H - 201) ** 2 / 1000)) -
						8 * Math.exp(-((H - 308) ** 2 / 1000)) +
						20 * Math.exp(-((H - 353) ** 2 / 500)) -
						10 * Math.exp(-((H - 372) ** 2 / 1000))),
		) * 100,
	) / 100;

function adjustHueTowardsAnchor(h: number, L: number, k = 1, mode = "cool") {
	const hue = rotationCompensation(h);
	const Ln = Math.max(0, Math.min(1, L));
	const KK = Math.max(0, Math.min(2, k));

	const WARM_ANCHOR = 90;
	const COLD_ANCHOR = 270;

	const target = mode === "warm" ? WARM_ANCHOR : COLD_ANCHOR;

	const signedDelta = ((target - hue + 540) % 360) - 180;

	const effect = KK * (1 - Ln);
	const MAX_SHIFT_DEG = 5;

	const maxShiftThis = MAX_SHIFT_DEG * effect;
	const appliedShift =
		Math.sign(signedDelta) * Math.min(Math.abs(signedDelta), maxShiftThis);

	return Math.round(rotationCompensation(hue + appliedShift) * 100) / 100;
}

export type Palette = string[][];

export type CreatePaletteFn = (
	prefix: string,
	H: number,
	chromaK: number,
	L: number[],
	turningK?: number,
	space?: ColorSpace,
) => Palette;

export const createAchromaticPalette: CreatePaletteFn = (
	prefix,
	H,
	chromaK,
	L,
	turningK = 0,
	space = "srgb",
) =>
	L.map((lightness, index) => {
		const C =
			~~(findMaxChroma(lightness, H, space) ** 0.25 * chromaK * 20) / 1000;
		return [
			`${prefix}-${index * 50}`,
			`oklch(${lightness} ${C} ${adjustHueTowardsAnchor(H, lightness, Math.abs(turningK))})`,
		];
	});

export const createChromaticPalette: CreatePaletteFn = (
	prefix,
	H,
	chromaK,
	L,
	turningK = 0,
	space = "srgb",
) =>
	L.slice(1, -1).map((lightness, index) => [
		`${prefix}-${50 * (index + 1)}`,
		`oklch(${lightness} ${~~(findMaxChroma(lightness, H, space) * chromaK * 1000) / 1000} ${calcAsymmetricalHue(H, lightness, turningK)})`,
	]);

export const createNormalizeChromaticPalettes = (
	colors: {
		prefix: string;
		hue: number;
		chromaK: number;
	}[],
	L: number[],
	turningK = 0,
	space: ColorSpace = "srgb",
) =>
	colors.map(({ hue, prefix }) =>
		L.slice(1, -1).map((lightness, index) => [
			`${prefix}-${50 * (index + 1)}`,
			`oklch(${lightness} ${Math.min(...colors.map(({ hue, chromaK }) => ~~(findMaxChroma(lightness, hue, space) * chromaK * 1000) / 1000))} ${calcAsymmetricalHue(hue, lightness, turningK)})`,
		]),
	);

const oklchStrRegexp = /(oklch\(\s*[0-9.]+\s+)([0-9.]+)(\s*,?\s*[0-9.]+\s*\))/i;

export const replaceChromaInOklchString = (oklch: string, newChroma: string) =>
	oklch.replace(
		oklchStrRegexp,
		(_, start, _old, end) => `${start}${newChroma}${end}`,
	);
