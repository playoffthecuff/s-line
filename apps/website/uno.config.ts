import { formatCSS, getOkLCHMaxChroma, parseCSS } from "colorizr";
import { defineConfig, presetWind4 } from "unocss";

const computeOklch = (l: number, h: number, c: number) =>
	formatCSS(
		{ l, c: getOkLCHMaxChroma({ c: 0, h, l }) * c, h },
		{ format: "oklch", precision: 4 },
	);

const BG_CONTRAST_LAYER_CONFIG = {
	LIGHT: [850, 900, 950, 1000],
	DARK: [350, 300, 250, 200],
	CONTRAST_DELTA: 408,
} as const;

const FG_LAYER_CONFIG = {
	LIGHT: [100, 150, 200, 250],
	DARK: [950, 900, 850, 800],
	LIGHT_MUTED: [400, 450, 500, 550],
	DARK_MUTED: [800, 750, 700, 650],
};

const SURFACE_CONFIG = {
	MAX_LIGHTNESS: 1000,
	MAX_RANGE_LIGHTNESS: 950,
	MIN_RANGE_LIGHTNESS: 50,
	THRESHOLD_BG_LIGHTNESS: 200,
	THRESHOLD_TEXT_LIGHTNESS: 600,
	LIGHT_BG_DELTA_LIGHTNESS: 20,
	DARK_BG_DELTA_LIGHTNESS: 32,
	LIGHT_TEXT_DELTA_LIGHTNESS: 20,
	DARK_TEXT_DELTA_LIGHTNESS: 16,
	MIN_LIGHT_TEXT_LIGHTNESS: 400,
	MAX_DARK_TEXT_LIGHTNESS: 750,
	MAX_LIGHT_TRANSPARENCY: 20,
	MIN_LIGHT_TRANSPARENCY: 10,
	MAX_DARK_TRANSPARENCY: 32,
	MIN_DARK_TRANSPARENCY: 20,
	MIN_SPECTRAL_CHROMA: 150,
	MUTED_BORDER_TRANSPARENCY: 50,
	INTERACTIVE_TRANSPARENCY_K: 1.8,
	BG_DELTA_LIGHTNESS_K: 0.868,
} as const;

export default defineConfig({
	presets: [
		presetWind4({ dark: "class", preflights: { reset: true, theme: true } }),
	],
	variants: [
		(matcher) => {
			const re = /^.+-\d{1,3}d\/(\d{1,2})$/;
			if (!re.test(matcher)) return matcher;
			const v = matcher.match(re)?.[1];
			return {
				body: ([entry]) => [
					[entry[0], `color-mix(in lab, ${entry[1]} ${v}%, transparent)`],
				],
			};
		},
		(matcher) => {
			const re = /^.+-\d{1,3}d\|l(-|\+)(\d{1,2})(?:\/(\d{1,2}))?$/;
			if (!re.test(matcher)) return matcher;
			const [, sign, value, alpha] = matcher.match(re) ?? [];
			return {
				body: ([entry]) => {
					const lch = parseCSS(`${entry[1]}`, "oklch");
					const k = (lch.l - 0.5) * 2;
					const direction = sign === "+" ? 1 : -1;
					const color = formatCSS(
						{ l: lch.l, h: lch.h, c: lch.c },
						{ format: "oklch", alpha: alpha ? +alpha / 100 : 1 },
					);
					const signMultiplier = 2 ** (k * direction);
					const lightnessMultiplier = (2 - lch.l) ** 1.5;
					const normalizedValue = +value * signMultiplier * lightnessMultiplier;
					return [
						[
							entry[0],
							`color-mix(in oklch, ${color}, ${sign === "-" ? "#000" : "#fff"} ${normalizedValue}%)`,
						],
					];
				},
			};
		},
		(matcher) => {
			const re = /^.+-\d{1,3}d\|h(-|\+)(\d{1,3})$/;
			if (!re.test(matcher)) return matcher;
			const [, sign, value] = matcher.match(re) ?? [];
			return {
				body: ([entry]) => [
					[entry[0], `oklch(from ${entry[1]} l c calc(h ${sign} ${value}))`],
				],
			};
		},
		(matcher) => {
			const re = /^.+-\d{1,3}d\|c=(\d{1,3})(?:\/(\d{1,2}))?$/;
			if (!re.test(matcher)) return matcher;
			const [, value, alpha] = matcher.match(re) ?? [];
			return {
				body: ([entry]) => [
					[
						entry[0],
						`oklch(from ${entry[1]} l ${+value / 1000} h / ${alpha ?? 100}%)`,
					],
				],
			};
		},
	],
	rules: [
		[
			/^(bg|text|border|outline|fill)(?:-(x|y|t|r|b|l|s|e)?)?-([a-z]+)-(\d{1,4})?d.*$/,
			([_, prop, side, color, lightness], { theme }) => {
				if (prop !== "border" && side) return;
				const hue = `${color}-hue`;
				if (!theme.colors?.[hue] && color !== "transparent") return;
				const propToCss = {
					bg: "background-color",
					text: "color",
					border: `border${side ? `-${{ x: "inline", y: "block", t: "top", b: "bottom", l: "left", r: "right", s: "inline-start", e: "inline-end" }[side]}` : ""}-color`,
					outline: "outline-color",
					fill: "fill",
				} as const;
				const cssProp = propToCss[prop as keyof typeof propToCss];
				const cssValue =
					color === "transparent"
						? "transparent"
						: computeOklch(
								+(
									lightness ?? +`${theme.colors?.[`${color}-lightness`]}` * 1000
								) / 1000,
								+(theme.colors?.[`${color}-hue`] ?? 0),
								+(theme.colors?.[`${color}-chroma`] ?? 0),
							);
				return {
					[cssProp]: cssValue,
				};
			},
		],
		[
			/^shadow-(d|l|md|ml|ad|al)(?:-([a-z]+))?-(\d+)d$/,
			([_, mode, color, value], { theme }) => {
				const hue = `${color ? color : "background"}-hue`;
				if (!theme.colors?.[hue]) return;
				const chroma =
					+theme.colors[`${color ? color : "background"}-chroma`] * 0.25;
				const isDark = mode === "d" || mode === "sd";
				const isMirrored = mode === "md" || mode === "ml";
				const isAround = mode === "ad" || mode === "al";
				const displacement = isMirrored ? -1 : isAround ? 0 : 1;
				return {
					"box-shadow": ` calc(var(--spacing-size) * ${displacement * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${displacement * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${2 * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${0.5 * 2 ** (0.25 * +value)}rem) oklch(${isDark ? 0 : 0.5} ${chroma} var(--colors-${hue}) / 0.5)${isAround ? `, calc(var(--spacing-size) * ${displacement * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${displacement * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${2 * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${0.5 * 2 ** (0.25 * +value)}rem) oklch(${isDark ? 0 : 0.5} ${chroma} var(--colors-${hue}) / 0.5)` : ""}`,
				};
			},
		],
		[
			/^ring-(d|l)(?:-([a-z]+))?-(\d+)d$/,
			([_, mode, color, value], { theme }) => {
				const hue = `${color ? color : "background"}-hue`;
				if (!theme.colors?.[hue]) return;
				const chroma =
					+theme.colors[`${color ? color : "background"}-chroma`] * 0.25;
				const isDark = mode === "d";
				return {
					"box-shadow": ` 0 0 0 calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem) oklch(${isDark ? 0 : 0.5} ${chroma} var(--colors-${hue}) / 0.25)`,
				};
			},
		],
		[
			/^outline-offset-(\d+)d$/,
			([_, value]) => ({
				"outline-offset": `calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^border(?:-(x|y|t|r|b|l|s|e)?)?-(\d+)d$/,
			([_, side, value]) => ({
				[`border${side ? `-${{ x: "inline", y: "block", t: "top", b: "bottom", l: "left", r: "right", s: "inline-start", e: "inline-end" }[side]}` : ""}-width`]: `calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^drop-shadow-(d|l)(?:-([a-z]+))?-(\d+)d$/,
			([_, mode, color, value], { theme }) => {
				const hue = `${color ? color : "background"}-hue`;
				if (!theme.colors?.[hue]) return;
				return {
					filter: ` drop-shadow(calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * ${2 ** (0.25 * +value) / 2}rem) oklch(${mode === "d" ? 0 : 0.25} 0.08 var(--colors-${hue}) / 0.5))`,
				};
			},
		],
		[
			/^m(x|y|t|r|b|l|s|e)?-(\d+)d$/,
			([_, side, value]) => ({
				[`margin${side ? `-${{ x: "inline", y: "block", t: "top", b: "bottom", l: "left", r: "right", s: "inline-start", e: "inline-end" }[side]}` : ""}`]: `calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^p(x|y|t|r|b|l|s|e)?-(\d+)d$/,
			([_, side, value]) => ({
				[`padding${side ? `-${{ x: "inline", y: "block", t: "top", b: "bottom", l: "left", r: "right", s: "inline-start", e: "inline-end" }[side]}` : ""}`]: `calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^gap(?:-(x|y))?-(\d+)d$/,
			([_, side, value]) => ({
				[`${side ? `${{ x: "column-", y: "row-" }[side]}` : ""}gap`]: `calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^rounded(?:-(bl|br|tl|tr|es|ee|se|ss))?-(\d+)d$/,
			([_, side, value]) => ({
				[`${side ? { bl: "border-bottom-left-radius", br: "border-bottom-right-radius", tl: "border-top-left-radius", tr: "border-top-right-radius", es: "border-end-start-radius", ee: "border-end-end-radius", se: "border-start-end-radius", ss: "border-start-start-radius" }[side] : "border-radius"}`]: `calc(var(--spacing-size) * var(--radius) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^rounded-(s|e|t|r|b|l)-(\d+)d$/,
			([_, side, value]) => ({
				[`${{ s: ["border-start-start-radius", "border-end-start-radius"], e: ["border-start-end-radius", "border-end-end-radius"], t: ["border-top-left-radius", "border-top-right-radius"], r: ["border-top-right-radius", "border-bottom-right-radius"], b: ["border-bottom-right-radius", "border-bottom-left-radius"], l: ["border-top-left-radius", "border-bottom-left-radius"] }[side]?.[0]}`]: `calc(var(--spacing-size) * var(--radius) * ${2 ** (0.25 * +value)}rem)`,
				[`${{ s: ["border-start-start-radius", "border-end-start-radius"], e: ["border-start-end-radius", "border-end-end-radius"], t: ["border-top-left-radius", "border-top-right-radius"], r: ["border-top-right-radius", "border-bottom-right-radius"], b: ["border-bottom-right-radius", "border-bottom-left-radius"], l: ["border-top-left-radius", "border-bottom-left-radius"] }[side]?.[1]}`]: `calc(var(--spacing-size) * var(--radius) * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^(-)?(top|bottom|left|right)-(\d+)d$/,
			([_, minus, side, value]) => ({
				[side]: `calc(var(--spacing-size) * ${(minus ? -1 : 1) * 2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^(w|h|min-w|min-h|max-w|max-h)-(\d+)d$/,
			([_, param, value]) => {
				const params = {
					w: "width",
					h: "height",
					"min-w": "min-width",
					"max-w": "max-width",
					"min-h": "min-height",
					"max-h": "max-height",
				};
				return {
					[params[param as keyof typeof params]]:
						`calc(var(--spacing-size) * ${2 ** (0.25 * +value)}rem)`,
				};
			},
		],
		[
			/^leading-(\d+)d$/,
			([_, value]) => ({ "line-height": `${2 ** (0.25 * +value)})` }),
		],
		[
			/^leading-(\d+)ld$/,
			([_, value]) => ({
				"line-height": `${+value < 6 ? (2 ** (+value / 16)) / (0.75 ** 0.75) : +value < 11 ? 2 ** ((5 - +value) * 0.125) * 1.6 : 1}`,
			}),
		],
		[
			/^fs-(\d+)d$/,
			([_, value]) => ({
				"font-size": `calc(var(--spacing-size) * var(--text-size) * 8 * ${2 ** (0.25 * +value)}rem)`,
			}),
		],
		[
			/^font-(\d+)d$/,
			([_, value]) => ({
				"font-weight": `${Math.min(1000, 100 * 2 ** (0.25 * +value))}`,
			}),
		],
		[
			/^stroke-(\d+)d$/,
			([_, value]) => ({
				"stroke-width": `${2 ** (0.25 * +value)}`,
			}),
		],
		[/^sbw-none$/, () => ({ "scrollbar-width": "none" })],
	],
	shortcuts: [
		{
			"border-muted": "border-foreground-700d dark:border-foreground-450d",
			"outline-muted": "outline-foreground-700d dark:outline-foreground-450d",
			"shadow-lifted-ia":
				"shadow-l-4d hover:shadow-l-6d active:shadow-l-2d dark:shadow-d-4d dark:hover:shadow-d-6d dark:active:shadow-d-2d",
		},
		[
			/^(border|outline)(?:-(x|y|t|r|b|l|s|e)?)?-([a-z]+)$/,
			([_, prop, side, color], { theme }) => {
				if (prop === "outline" && side) return;
				const lightness = theme.colors?.[`${color}-lightness`];
				if (!lightness) return;
				const {
					THRESHOLD_BG_LIGHTNESS,
					MAX_LIGHTNESS,
					DARK_BG_DELTA_LIGHTNESS,
				} = SURFACE_CONFIG;
				const l = +lightness * 1000;
				const isSwapped = l <= THRESHOLD_BG_LIGHTNESS;
				const swappedLightness =
					(MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS / 2)) / 100;
				const borderSide = side ? `-${side}` : "";
				return `	${prop}${borderSide}-${color}-d${isSwapped ? ` dark:${prop}${borderSide}-${color}-${swappedLightness}d` : ""}`;
			},
		],
		[/^size-(\d+)d$/, ([_, value]) => `w-${value}d h-${value}d`],
		[/^text-(\d+)d$/, ([_, value]) => `fs-${value}d leading-${value}ld`],
		[
			/^shadow-lifted(?:-([a-z]+))?-(\d+)$/,
			([_, color, value], { theme }) => {
				color = color ? color : "background";
				if (!theme.colors?.[`${color}-hue`]) return;
				return `shadow-l-${color}-${+value * 2}d dark:shadow-d-${color}-${+value * 2}d`;
			},
		],
		[
			/^ring(?:-([a-z]+))?-(\d+)d$/,
			([_, color, value], { theme }) => {
				color = color ? color : "background";
				if (!theme.colors?.[`${color}-hue`]) return;
				return `ring-l-${color}-${value}d dark:ring-d-${color}-${value}d`;
			},
		],
		[
			/^drop-shadow(?:-([a-z]+))?-(\d+)d$/,
			([_, color, value], { theme }) => {
				color = color ? color : "background";
				if (!theme.colors?.[`${color}-hue`]) return;
				return `drop-shadow-l-${color}-${value}d dark:drop-shadow-d-${value}d`;
			},
		],
		[
			/^bg(?:-([1-4]))?$/,
			([_, l]) => {
				const { LIGHT: light } = BG_CONTRAST_LAYER_CONFIG;
				const { DARK: dark } = BG_CONTRAST_LAYER_CONFIG;
				return `bg-background-${light[+(l ?? 0)]}d dark:bg-background-${dark[+(l ?? 0)]}d|h+180`;
			},
		],
		[
			/^text(?:-(muted))?(?:-([1-4]))?$/,
			([_, muted, value]) => {
				const { DARK, DARK_MUTED, LIGHT, LIGHT_MUTED } = FG_LAYER_CONFIG;
				const lp = muted ? LIGHT_MUTED[+(value ?? 0)] : LIGHT[+(value ?? 0)];
				const dp = muted ? DARK_MUTED[+(value ?? 0)] : DARK[+(value ?? 0)];
				return `text-foreground-${lp}d dark:text-foreground-${dp}d|h+180`;
			},
		],
		[
			/^text-([a-z]+)(?:-(\d{1}))?(?:-(ia))?$/,
			([_, color, variant, ia], { theme }) => {
				if (!theme.colors?.[`${color}-hue`]) return;
				const themeLightness =
					+(theme.colors?.[`${color}-lightness`] ?? 1) * 1000;
				const {
					DARK_TEXT_DELTA_LIGHTNESS,
					LIGHT_TEXT_DELTA_LIGHTNESS,
					THRESHOLD_BG_LIGHTNESS,
					THRESHOLD_TEXT_LIGHTNESS,
				} = SURFACE_CONFIG;
				const { LIGHT: FG_LIGHT, DARK: FG_DARK } = FG_LAYER_CONFIG;
				const {
					DARK: BG_DARK,
					LIGHT: BG_LIGHT,
					CONTRAST_DELTA,
				} = BG_CONTRAST_LAYER_CONFIG;

				const nVariant = ~~variant;

				const textColor = color;
				const interactiveTextColor = ia && color;

				const lightLightness = Math.min(
					BG_LIGHT[nVariant] - CONTRAST_DELTA,
					Math.max(themeLightness, FG_LIGHT[nVariant] + THRESHOLD_BG_LIGHTNESS),
				);
				const lightHoverSignDeltaLightness =
					lightLightness > THRESHOLD_TEXT_LIGHTNESS ? "-" : "+";
				const lightActiveSignDeltaLightness = "-";
				const lightInteractiveDeltaLightness = LIGHT_TEXT_DELTA_LIGHTNESS;

				const darkLightness = Math.max(
					BG_DARK[nVariant] + CONTRAST_DELTA,
					Math.min(
						1000 - themeLightness,
						FG_DARK[nVariant] - THRESHOLD_BG_LIGHTNESS,
					),
				);
				const darkHoverSignDeltaLightness = "+";
				const darkActiveSignDeltaLightness = "-";
				const darkInteractiveDeltaLightness = DARK_TEXT_DELTA_LIGHTNESS;

				const rules = {
					text: [textColor, `-${lightLightness}d`],
					"hover:text": [
						interactiveTextColor,
						`-${lightLightness}d`,
						`|l${lightHoverSignDeltaLightness}${lightInteractiveDeltaLightness}`,
					],
					"active:hover:text": [
						interactiveTextColor,
						`-${lightLightness}d`,
						`|l${lightActiveSignDeltaLightness}${lightInteractiveDeltaLightness * 3}`,
					],
					"active:text": [
						interactiveTextColor,
						`-${lightLightness}d`,
						`|l${lightActiveSignDeltaLightness}${lightInteractiveDeltaLightness}`,
					],
					"dark:text": [textColor, `-${darkLightness}d`],
					"dark:hover:text": [
						interactiveTextColor,
						`-${darkLightness}d`,
						`|l${darkHoverSignDeltaLightness}${darkInteractiveDeltaLightness}`,
					],
					"dark:active:text": [
						interactiveTextColor,
						`-${darkLightness}d`,
						`|l${darkActiveSignDeltaLightness}${darkInteractiveDeltaLightness}`,
					],
					"dark:active:hover:text": [
						interactiveTextColor,
						`-${darkLightness}d`,
						`|l${darkActiveSignDeltaLightness}${darkInteractiveDeltaLightness}`,
					],
				};

				return Object.entries(rules)
					.filter(([_, v]) => !!v[0])
					.map(([k, v]) => `${k}-${v.filter(Boolean).join("")}`)
					.join(" ");
			},
		],
		[
			/^surface-([a-z]+)-solid(?:-(ia))?$/,
			([_, color, ia], { theme }) => {
				if (!theme.colors?.[`${color}-hue`]) return;
				const {
					DARK_BG_DELTA_LIGHTNESS,
					LIGHT_BG_DELTA_LIGHTNESS,
					MAX_LIGHTNESS,
					MAX_RANGE_LIGHTNESS,
					MIN_RANGE_LIGHTNESS,
					THRESHOLD_BG_LIGHTNESS,
					THRESHOLD_TEXT_LIGHTNESS,
				} = SURFACE_CONFIG;

				const lightBgLightness = Math.max(
					+theme.colors?.[`${color}-lightness`] * MAX_LIGHTNESS,
					(MAX_LIGHTNESS * LIGHT_BG_DELTA_LIGHTNESS) / 100,
				);
				const isTextLightnessSwapped =
					lightBgLightness < THRESHOLD_TEXT_LIGHTNESS;
				const lightTextLightness = isTextLightnessSwapped
					? MAX_RANGE_LIGHTNESS
					: MIN_RANGE_LIGHTNESS;
				const lightBgColor = color;
				const lightInteractiveBgColor = ia && lightBgColor;
				const lightTextColor = "foreground";
				const lightBgDeltaLightness = Math.round(
					LIGHT_BG_DELTA_LIGHTNESS / 1.5,
				);

				const darkBgLightness =
					lightBgLightness <= THRESHOLD_BG_LIGHTNESS
						? (MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS / 2)) / 100
						: lightBgLightness;
				const darkTextLightness = isTextLightnessSwapped && MIN_RANGE_LIGHTNESS;
				const darkBgColor = color === "foreground" && color;
				const darkInteractiveBgColor = ia && darkBgColor;
				const darkTextColor = color === "foreground" && "foreground";
				const darkBgDeltaLightness = lightBgDeltaLightness;

				const rules = {
					bg: [lightBgColor, `-${lightBgLightness}d`],
					"hover:bg": [
						lightInteractiveBgColor,
						`-${lightBgLightness}d`,
						`|l+${lightBgDeltaLightness}`,
					],
					"active:bg": [
						lightInteractiveBgColor,
						`-${lightBgLightness}d`,
						`|l-${lightBgDeltaLightness}`,
					],
					text: [lightTextColor, `-${lightTextLightness}d`],
					"dark:bg": [darkBgColor, `-${darkBgLightness}d`],
					"dark:hover:bg": [
						darkInteractiveBgColor,
						`-${darkBgLightness}d`,
						`|l+${darkBgDeltaLightness}`,
					],
					"dark:active:bg": [
						darkInteractiveBgColor,
						`-${darkBgLightness}d`,
						`|l-${darkBgDeltaLightness}`,
					],
					"dark:text": [darkTextColor, `-${darkTextLightness}d`],
				};

				return Object.entries(rules)
					.filter(([_, v]) => !!v[0])
					.map(([k, v]) => `${k}-${v.filter(Boolean).join("")}`)
					.join(" ");
			},
		],
		[
			/^surface-([a-z]+)-subtle(?:-(ia))?$/,
			([_, color, ia], { theme }) => {
				if (!theme.colors?.[`${color}-hue`]) return;
				const {
					DARK_BG_DELTA_LIGHTNESS,
					INTERACTIVE_TRANSPARENCY_K: HOVER_TRANSPARENCY_K,
					LIGHT_BG_DELTA_LIGHTNESS,
					MAX_DARK_TEXT_LIGHTNESS,
					MAX_DARK_TRANSPARENCY,
					MAX_LIGHTNESS,
					MAX_LIGHT_TRANSPARENCY,
					MIN_DARK_TRANSPARENCY,
					MIN_LIGHT_TEXT_LIGHTNESS,
					MIN_LIGHT_TRANSPARENCY,
					THRESHOLD_BG_LIGHTNESS,
					MIN_SPECTRAL_CHROMA,
				} = SURFACE_CONFIG;
				const chroma = Math.round(
					+theme.colors?.[`${color}-chroma`] * MIN_SPECTRAL_CHROMA,
				);

				const interactiveBgColor = ia && color;

				const lightBgLightness = Math.max(
					+theme.colors?.[`${color}-lightness`] * MAX_LIGHTNESS,
					(MAX_LIGHTNESS * LIGHT_BG_DELTA_LIGHTNESS) / 100,
				);
				const lightBgTransparency = Math.round(
					MIN_LIGHT_TRANSPARENCY +
						(lightBgLightness * MAX_LIGHT_TRANSPARENCY) / MAX_LIGHTNESS,
				);
				const lightTextLightness = Math.min(
					MIN_LIGHT_TEXT_LIGHTNESS,
					lightBgLightness,
				);
				const lightHoverBgTransparency = Math.round(
					lightBgTransparency / HOVER_TRANSPARENCY_K,
				);
				const lightActiveBgTransparency = Math.round(
					lightBgTransparency * HOVER_TRANSPARENCY_K,
				);

				const darkBgLightness =
					lightBgLightness <= THRESHOLD_BG_LIGHTNESS
						? (MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS / 2)) / 100
						: lightBgLightness;
				const darkBgTransparency = Math.round(
					MAX_DARK_TRANSPARENCY -
						(darkBgLightness * MIN_DARK_TRANSPARENCY) / MAX_LIGHTNESS,
				);
				const darkTextLightness = Math.max(
					MAX_DARK_TEXT_LIGHTNESS,
					darkBgLightness || 0,
				);
				const darkHoverBgTransparency = Math.round(
					darkBgTransparency * HOVER_TRANSPARENCY_K,
				);
				const darkActiveBgTransparency = Math.round(darkBgTransparency * 0.5);

				const rules = {
					bg: [
						color,
						`-${lightBgLightness}d`,
						`|c=${chroma}`,
						`/${lightBgTransparency}`,
					],
					"hover:bg": [
						interactiveBgColor,
						`-${lightBgLightness}d`,
						`|c=${chroma}`,
						`/${lightHoverBgTransparency}`,
					],
					"active:bg": [
						interactiveBgColor,
						`-${lightBgLightness}d`,
						`|c=${chroma}`,
						`/${lightActiveBgTransparency}`,
					],
					text: [color, `-${lightTextLightness}d`],
					"dark:bg": [
						color,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
						`/${darkBgTransparency}`,
					],
					"dark:hover:bg": [
						interactiveBgColor,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
						`/${darkHoverBgTransparency}`,
					],
					"dark:active:bg": [
						interactiveBgColor,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
						`/${darkActiveBgTransparency}`,
					],
					"dark:text": [color, `-${darkTextLightness}d`],
				};

				return Object.entries(rules)
					.filter(([_, v]) => !!v[0])
					.map(([k, v]) => `${k}-${v.filter(Boolean).join("")}`)
					.join(" ");
			},
		],
		[
			/^surface-([a-z]+)-outline(?:-(ia))?$/,
			([_, color, ia], { theme }) => {
				if (!theme.colors?.[`${color}-hue`]) return;
				const {
					BG_DELTA_LIGHTNESS_K,
					DARK_BG_DELTA_LIGHTNESS,
					INTERACTIVE_TRANSPARENCY_K: HOVER_TRANSPARENCY_K,
					LIGHT_BG_DELTA_LIGHTNESS,
					MAX_DARK_TEXT_LIGHTNESS,
					MAX_DARK_TRANSPARENCY,
					MAX_LIGHTNESS,
					MAX_LIGHT_TRANSPARENCY,
					MIN_RANGE_LIGHTNESS,
					MIN_DARK_TRANSPARENCY,
					MIN_LIGHT_TEXT_LIGHTNESS,
					MIN_LIGHT_TRANSPARENCY,
					MUTED_BORDER_TRANSPARENCY,
					THRESHOLD_BG_LIGHTNESS,
					MAX_RANGE_LIGHTNESS,
					MIN_SPECTRAL_CHROMA,
				} = SURFACE_CONFIG;
				const chroma = Math.round(
					(+theme.colors?.[`${color}-chroma`] * MIN_SPECTRAL_CHROMA) / 3,
				);
				const interactiveBgColor = ia && color;
				const borderTransparency = MUTED_BORDER_TRANSPARENCY;

				const lightBorderLightness = Math.max(
					+theme.colors?.[`${color}-lightness`] * MAX_LIGHTNESS,
					(MAX_LIGHTNESS * LIGHT_BG_DELTA_LIGHTNESS) / 100,
				);
				const lightInteractiveBgLightness = MAX_RANGE_LIGHTNESS;
				const lightActiveBgLightness = Math.round(
					lightInteractiveBgLightness * BG_DELTA_LIGHTNESS_K,
				);
				const lightTextLightness = Math.min(
					MIN_LIGHT_TEXT_LIGHTNESS,
					lightBorderLightness,
				);
				const lightBaseBgTransparency = Math.round(
					(MIN_LIGHT_TRANSPARENCY +
						(lightInteractiveBgLightness * MAX_LIGHT_TRANSPARENCY) /
							MAX_LIGHTNESS) *
						2,
				);
				const lightHoverBgTransparency = lightBaseBgTransparency;

				const darkBorderLightness =
					lightBorderLightness <= THRESHOLD_BG_LIGHTNESS
						? (MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS / 2)) / 100
						: lightBorderLightness;
				const darkInteractiveBgLightness = darkBorderLightness;
				const darkHoverBgLightness = MAX_RANGE_LIGHTNESS;
				const darkActiveBgLightness = MIN_RANGE_LIGHTNESS;
				const darkBgLightness =
					darkInteractiveBgLightness <= THRESHOLD_BG_LIGHTNESS
						? (MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS)) / 100
						: darkInteractiveBgLightness;
				const darkTextLightness = Math.max(
					MAX_DARK_TEXT_LIGHTNESS,
					darkBgLightness || 0,
				);
				const darkBaseBgTransparency = Math.round(
					MAX_DARK_TRANSPARENCY -
						(darkHoverBgLightness * MIN_DARK_TRANSPARENCY) / MAX_LIGHTNESS,
				);
				const darkHoverBgTransparency = darkBaseBgTransparency;
				const darkActiveBgTransparency = Math.round(
					darkBaseBgTransparency * HOVER_TRANSPARENCY_K,
				);

				const rules = {
					"hover:bg": [
						interactiveBgColor,
						`-${lightInteractiveBgLightness}d`,
						`|c=${chroma}`,
						`/${lightHoverBgTransparency}`,
					],
					"active:bg": [
						interactiveBgColor,
						`-${lightActiveBgLightness}d`,
						`|c=${chroma}`,
					],
					text: [color, `-${lightTextLightness}d`],
					border: [
						color,
						`-${lightBorderLightness}d`,
						`/${borderTransparency}`,
					],
					"dark:hover:bg": [
						interactiveBgColor,
						`-${darkHoverBgLightness}d`,
						`|c=${chroma}`,
						`/${darkHoverBgTransparency}`,
					],
					"dark:active:bg": [
						interactiveBgColor,
						`-${darkActiveBgLightness}d`,
						`|c=${chroma}`,
						`/${darkActiveBgTransparency}`,
					],
					"dark:text": [color, `-${darkTextLightness}d`],
					"dark:border": [
						color,
						`-${darkBgLightness}d`,
						`/${borderTransparency}`,
					],
				};

				return Object.entries(rules)
					.filter(([_, v]) => !!v[0])
					.map(([k, v]) => `${k}-${v.filter(Boolean).join("")}`)
					.join(" ");
			},
		],
		[
			/^surface-([a-z]+)-ghost(?:-(ia))?$/,
			([_, color, ia], { theme }) => {
				if (!theme.colors?.[`${color}-hue`]) return;
				const {
					BG_DELTA_LIGHTNESS_K,
					DARK_BG_DELTA_LIGHTNESS,
					INTERACTIVE_TRANSPARENCY_K: HOVER_TRANSPARENCY_K,
					LIGHT_BG_DELTA_LIGHTNESS,
					MAX_DARK_TEXT_LIGHTNESS,
					MAX_DARK_TRANSPARENCY,
					MAX_LIGHTNESS,
					MAX_LIGHT_TRANSPARENCY,
					MIN_RANGE_LIGHTNESS,
					MIN_DARK_TRANSPARENCY,
					MIN_LIGHT_TEXT_LIGHTNESS,
					MIN_LIGHT_TRANSPARENCY,
					THRESHOLD_BG_LIGHTNESS,
					MAX_RANGE_LIGHTNESS,
					MIN_SPECTRAL_CHROMA,
				} = SURFACE_CONFIG;
				const chroma = Math.round(
					(+theme.colors?.[`${color}-chroma`] * MIN_SPECTRAL_CHROMA) / 3,
				);
				const interactiveBgColor = ia && color;

				const lightBorderLightness = Math.max(
					+theme.colors?.[`${color}-lightness`] * MAX_LIGHTNESS,
					(MAX_LIGHTNESS * LIGHT_BG_DELTA_LIGHTNESS) / 100,
				);
				const lightInteractiveBgLightness = MAX_RANGE_LIGHTNESS;
				const lightActiveBgLightness = Math.round(
					lightInteractiveBgLightness * BG_DELTA_LIGHTNESS_K,
				);
				const lightTextLightness = Math.min(
					MIN_LIGHT_TEXT_LIGHTNESS,
					lightBorderLightness,
				);
				const lightBaseBgTransparency = Math.round(
					(MIN_LIGHT_TRANSPARENCY +
						(lightInteractiveBgLightness * MAX_LIGHT_TRANSPARENCY) /
							MAX_LIGHTNESS) *
						2,
				);
				const lightHoverBgTransparency = lightBaseBgTransparency;

				const darkBorderLightness =
					lightBorderLightness <= THRESHOLD_BG_LIGHTNESS
						? (MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS / 2)) / 100
						: lightBorderLightness;
				const darkInteractiveBgLightness = darkBorderLightness;
				const darkHoverBgLightness = MAX_RANGE_LIGHTNESS;
				const darkActiveBgLightness = MIN_RANGE_LIGHTNESS;
				const darkBgLightness =
					darkInteractiveBgLightness <= THRESHOLD_BG_LIGHTNESS
						? (MAX_LIGHTNESS * (100 - DARK_BG_DELTA_LIGHTNESS)) / 100
						: darkInteractiveBgLightness;
				const darkTextLightness = Math.max(
					MAX_DARK_TEXT_LIGHTNESS,
					darkBgLightness || 0,
				);
				const darkBaseBgTransparency = Math.round(
					MAX_DARK_TRANSPARENCY -
						(darkHoverBgLightness * MIN_DARK_TRANSPARENCY) / MAX_LIGHTNESS,
				);
				const darkHoverBgTransparency = darkBaseBgTransparency;
				const darkActiveBgTransparency = Math.round(
					darkBaseBgTransparency * HOVER_TRANSPARENCY_K,
				);

				const rules = {
					"hover:bg": [
						interactiveBgColor,
						`-${lightInteractiveBgLightness}d`,
						`|c=${chroma}`,
						`/${lightHoverBgTransparency}`,
					],
					"active:bg": [
						interactiveBgColor,
						`-${lightActiveBgLightness}d`,
						`|c=${chroma}`,
					],
					text: [color, `-${lightTextLightness}d`],
					"dark:hover:bg": [
						interactiveBgColor,
						`-${darkHoverBgLightness}d`,
						`|c=${chroma}`,
						`/${darkHoverBgTransparency}`,
					],
					"dark:active:bg": [
						interactiveBgColor,
						`-${darkActiveBgLightness}d`,
						`|c=${chroma}`,
						`/${darkActiveBgTransparency}`,
					],
					"dark:text": [color, `-${darkTextLightness}d`],
				};
				return Object.entries(rules)
					.filter(([_, v]) => !!v[0])
					.map(([k, v]) => `${k}-${v.filter(Boolean).join("")}`)
					.join(" ");
			},
		],
		[
			/^surface-([a-z]+)-toggleable$/,
			([_, color], { theme }) => {
				if (!theme.colors?.[`${color}-hue`]) return;
				const {
					MIN_RANGE_LIGHTNESS,
					MAX_RANGE_LIGHTNESS,
					MIN_SPECTRAL_CHROMA,
					BG_DELTA_LIGHTNESS_K,
				} = SURFACE_CONFIG;
				const chroma = Math.round(
					(+theme.colors?.[`${color}-chroma`] * MIN_SPECTRAL_CHROMA) / 3,
				);
				const k = BG_DELTA_LIGHTNESS_K ** 2;
				const lightBgLightness = Math.round(MAX_RANGE_LIGHTNESS * k);
				const activeTransparency = 50;

				const darkBgLightness = Math.round(MIN_RANGE_LIGHTNESS / k);

				const rules = {
					"hover:data-[pressed]:bg": [
						color,
						`-${lightBgLightness}d`,
						`|c=${chroma}`,
					],
					"hover:not-[data-pressed]:bg": ["transparent"],
					"[&&]-active:bg": [
						color,
						`-${lightBgLightness}d`,
						`|c=${chroma}`,
						`/${activeTransparency}`,
					],
					"hover:active:data-[pressed]:bg": [
						color,
						`-${lightBgLightness}d`,
						`|c=${chroma}`,
						`/${activeTransparency}`,
					],
					"data-[pressed]:bg": [color, `-${lightBgLightness}d`, `|c=${chroma}`],
					"dark:hover:data-[pressed]:bg": [
						color,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
					],
					"dark:hover:not-[data-pressed]:bg": ["transparent"],
					"[&&]-dark:active:bg": [
						color,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
						`/${activeTransparency}`,
					],
					"dark:hover:active:data-[pressed]:bg": [
						color,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
						`/${activeTransparency}`,
					],
					"dark:data-[pressed]:bg": [
						color,
						`-${darkBgLightness}d`,
						`|c=${chroma}`,
					],
				};
				return Object.entries(rules)
					.filter(([_, v]) => !!v[0])
					.map(([k, v]) => `${k}-${v.filter(Boolean).join("")}`)
					.join(" ");
			},
		],
	],
	extendTheme: (theme) => ({
		...theme,
		colors: {
			"primary-hue": "264",
			"primary-chroma": "1",
			"primary-lightness": "0.5",
			"secondary-hue": "264",
			"secondary-chroma": "0.05",
			"secondary-lightness": "0.5",
			"success-hue": "142",
			"success-chroma": "1",
			"success-lightness": "0.7",
			"error-hue": "29",
			"error-chroma": "1",
			"error-lightness": "0.55",
			"warning-hue": "110",
			"warning-chroma": "1",
			"warning-lightness": "0.8",
			"visited-hue": "328",
			"visited-chroma": "1",
			"visited-lightness": "0.525",
			"background-hue": "90",
			"background-chroma": "0.05",
			"background-lightness": "1",
			"foreground-hue": "270",
			"foreground-chroma": "0.05",
			"foreground-lightness": "0",
		},
		animation: {
			...theme.animation,
			keyframes: {
				...theme.animation?.keyframes,
				"wave-primary":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.2999 264 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.2999 264 / 0%)} }",
				"wave-secondary":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.015 264 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.015 264 / 0%)} }",
				"wave-success":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.1981 142 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.1981 142 / 0%)} }",
				"wave-error":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.2306 29 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.2306 29 / 0%)} }",
				"wave-warning":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.1268 110 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.1268 110 / 0%)} }",
				"wave-visited":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.2514 328 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.2514 328 / 0%)} }",
				"wave-background":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.0059 90 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.0059 90 / 0%)} }",
				"wave-foreground":
					"{0% {outline-width: 0; outline-color: oklch(50% 0.015 270 / 80%)} 100% {outline-width: 6px; outline-color: oklch(50% 0.015 270 / 0%)} }",
			},
			durations: {
				...theme.animation?.durations,
				"wave-primary": "0.8s",
				"wave-secondary": "0.8s",
				"wave-success": "0.8s",
				"wave-error": "0.8s",
				"wave-warning": "0.8s",
				"wave-visited": "0.8s",
				"wave-background": "0.8s",
				"wave-foreground": "0.8s",
			},
			timingFns: {
				...theme.animation?.timingFns,
				"wave-primary": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-secondary": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-success": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-error": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-warning": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-visited": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-background": "cubic-bezier(0, 0.64, 0, 1)",
				"wave-foreground": "cubic-bezier(0, 0.64, 0, 1)",
			},
			counts: {
				...theme.animation?.counts,
				"wave-primary": "1",
				"wave-secondary": "1",
				"wave-success": "1",
				"wave-error": "1",
				"wave-warning": "1",
				"wave-visited": "1",
				"wave-background": "1",
				"wave-foreground": "1",
			},
			category: {
				...theme.animation?.category,
				"wave-primary": "Attention Seekers",
				"wave-secondary": "Attention Seekers",
				"wave-success": "Attention Seekers",
				"wave-error": "Attention Seekers",
				"wave-warning": "Attention Seekers",
				"wave-visited": "Attention Seekers",
				"wave-background": "Attention Seekers",
				"wave-foreground": "Attention Seekers",
			},
		},
		shadow: {
			...theme.shadow,
			"focus-primary": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.2999 264 / 90%)",
			],
			"focus-secondary": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.015 264 / 90%)",
			],
			"focus-success": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.1981 142 / 90%)",
			],
			"focus-error": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.2306 29 / 90%)",
			],
			"focus-warning": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.1268 110 / 90%)",
			],
			"focus-visited": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.2514 328 / 90%)",
			],
			"focus-background": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.0059 90 / 90%)",
			],
			"focus-foreground": [
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor",
				"0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(50% 0.015 270 / 90%)",
			],
		},
		media: {
			...theme.media,
			pointer_coarse: "(pointer: coarse)",
		},
	}),
	preflights: [
		{
			getCSS: () => `:root, :host {
					--spacing-size: 0.0625;
					--radius: 1.25;
					--text-size: 1;
				}`,
		},
	],
	safelist: [
		"before:animate-wave-primary",
		"before:animate-wave-secondary",
		"before:animate-wave-success",
		"before:animate-wave-error",
		"before:animate-wave-warning",
		"before:animate-wave-visited",
		"before:animate-wave-background",
		"before:animate-wave-foreground",
	],
});
