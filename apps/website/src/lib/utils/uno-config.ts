import type { Palette } from "./colors";

const PX_IN_REM = 16;

const WAVE_ANIMATION_DURATION = 0.8;
const WAVE_ANIMATION_TIMING_FN = "cubic-bezier(0, 0.64, 0, 1)";

const side = JSON.stringify({
	x: "inline",
	y: "block",
	t: "top",
	b: "bottom",
	l: "left",
	r: "right",
	s: "inline-start",
	e: "inline-end",
});
const borderRadiusSize = JSON.stringify({
	bl: "border-bottom-left-radius",
	br: "border-bottom-right-radius",
	tl: "border-top-left-radius",
	tr: "border-top-right-radius",
	es: "border-end-start-radius",
	ee: "border-end-end-radius",
	se: "border-start-end-radius",
	ss: "border-start-start-radius",
});
const borderRadiusSideSize = JSON.stringify({
	s: ["border-start-start-radius", "border-end-start-radius"],
	e: ["border-start-end-radius", "border-end-end-radius"],
	t: ["border-top-left-radius", "border-top-right-radius"],
	r: ["border-top-right-radius", "border-bottom-right-radius"],
	b: ["border-bottom-right-radius", "border-bottom-left-radius"],
	l: ["border-top-left-radius", "border-bottom-left-radius"],
});
const gapSide = JSON.stringify({ x: "column-", y: "row-" });
``;

const colors = ["primary", "neutral", "visited", "success", "warning", "error"];

export const createUnoConfig = (
	palettes: Palette,
	spacingSize: number,
	radius: number,
	textSize: number,
	normalizedPalettes: Palette,
) =>
	`import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
	presets: [presetWind4({ dark: "class", preflights: { reset: true, theme: true } })],
	rules: [
		[/^bg-(.+)\\/(\\d+)d$/,	([_, color, alpha]) => ({"background-color": \` oklch(from var(--colors-\${color}) l c h / \${2 ** -(0.125 * +alpha)})\`,}),],
		[/^text-(.+)\\/(\\d+)d$/,	([_, color, alpha]) => ({"color": \` oklch(from var(--colors-\${color}) l c h / \${2 ** -(0.125 * +alpha)})\`,}),],
		[/^bg-(.+)\\|(?:(-))?(\\d+)l$/,	([_, color, minus, l]) => ({"background-color": \` oklch(from var(--colors-\${color}) calc(l \${minus ? '-' : '+'} \${+l / 100}) c h)\`,}),],
		[/^bg-(.+)\\|(?:(-))?(\\d+)c$/,	([_, color, minus, c]) => ({"background-color": \` oklch(from var(--colors-\${color}) l calc(c \${minus ? '-' : '+'} \${+c}) h)\`,}),],
		[/^shadow-(d|l)-(\\d+)d$/, ([_, theme, value]) => ({'box-shadow': \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * \${2 * 2 ** (0.25 * +value)}rem) calc(var(--spacing-size) * \${0.5 * 2 ** (0.25 * +value)}rem) oklch(from var(\${theme === "d" ? '--colors-neutral-1000' : '--colors-neutral-450'}) l c h / 0.5)\`})],
		[/^m(x|y|t|r|b|l|s|e)?-(\\d+)d$/, ([_, side, value]) => ({[\`margin\${side ? \`-\${${side}[side]}\` : ''}\`]: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^p(x|y|t|r|b|l|s|e)?-(\\d+)d$/, ([_, side, value]) => ({[\`padding\${side ? \`-\${${side}[side]}\` : ''}\`]: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^gap(?:-(x|y))?-(\\d+)d$/, ([_, side, value]) => ({[\`\${side ? \`\${${gapSide}[side]}\` : ''}gap\`]: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^rounded(?:-(bl|br|tl|tr|es|ee|se|ss))?-(\\d+)d$/, ([_, side, value]) => ({[\`\${side ? ${borderRadiusSize}[side] : 'border-radius'}\`]: \`calc(var(--spacing-size) * var(--radius) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^rounded-(s|e|t|r|b|l)-(\\d+)d$/, ([_, side, value]) => ({[\`\${${borderRadiusSideSize}[side]?.[0]}\`]: \`calc(var(--spacing-size) * var(--radius) * \${2 ** (0.25 * +value)}rem)\`,[\`\${${borderRadiusSideSize}[side]?.[1]}\`]: \`calc(var(--spacing-size) * var(--radius) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^top-(\\d+)d$/, ([_, value]) => ({top: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^bottom-(\\d+)d$/, ([_, value]) => ({bottom: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^left-(\\d+)d$/, ([_, value]) => ({left: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^right-(\\d+)d$/, ([_, value]) => ({right: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^w-(\\d+)d$/, ([_, value]) => ({width: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^h-(\\d+)d$/, ([_, value]) => ({height: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^min-w-(\\d+)d$/, ([_, value]) => ({'min-width': \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^min-h-(\\d+)d$/, ([_, value]) => ({'min-height': \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^max-w-(\\d+)d$/, ([_, value]) => ({'max-width': \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^max-h-(\\d+)d$/, ([_, value]) => ({'max-height': \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^size-(\\d+)d$/, ([_, value]) => ({width: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`, height: \`calc(var(--spacing-size) * \${2 ** (0.25 * +value)}rem)\`})],
		[/^text-(\\d+)d$/, ([_, value]) => ({'font-size': \`calc(var(--spacing-size) * var(--text-size) * 8 * \${2 ** (0.25 * +value)}rem)\`, 'line-height': \`\${+value < 6 ? 2 ** (0.0625 * (+value + 5)) : +value < 11 ? 2 ** 0.625 / 2 ** (0.125 * (+value - 5)) : 1}\`})],
		[/^font-(\\d+)d$/, ([_, value]) => ({'font-weight': \`\${Math.min(1000, 100 * 2 ** (0.25 * +value))}\`})],
	],
	shortcuts: [
		{
			"surface-primary": "bg-primary-500/25d dark:bg-primary-500/14d",
			"surface-error": "bg-error-500/25d dark:bg-error-500/14d",
			"surface-visited": "bg-visited-500/25d dark:bg-visited-500/14d",
			"surface-warning": "bg-warning-500/25d dark:bg-warning-500/14d",
			"surface-success": "bg-success-500/25d dark:bg-success-500/14d",
			"surface-neutral": "bg-neutral-500/25d dark:bg-neutral-500/14d",
			"bg-neutral": "bg-neutral-150 dark:bg-neutral-600",
			"bg-neutral-1": "bg-neutral-100 dark:bg-neutral-650",
			"bg-neutral-2": "bg-neutral-50 dark:bg-neutral-700",
			"bg-neutral-3": "bg-neutral-0 dark:bg-neutral-750",
			"bg-neutral-fg": "bg-neutral-750 dark:bg-neutral-300",
			"bg-neutral-1fg": "bg-neutral-800 dark:bg-neutral-250",
			"bg-neutral-2fg": "bg-neutral-850 dark:bg-neutral-200",
			"bg-neutral-3fg": "bg-neutral-900 dark:bg-neutral-150",
			"text-warning": "text-warning-600 dark:text-warning-250",
			"text-warning-interactive":	"hover:text-warning-600/7d dark:hover:text-warning-250/5d active:text-warning-600/11d dark:active:text-warning-250/9d",
			"text-visited": "text-visited-600 dark:text-visited-250",
			"text-visited-interactive":	"hover:text-visited-600/7d dark:hover:text-visited-250/5d active:text-visited-600/11d dark:active:text-visited-250/9d",
			"text-error": "text-error-600 dark:text-error-250",
			"text-error-interactive":	"hover:text-error-600/7d dark:hover:text-error-250/5d active:text-error-600/11d dark:active:text-error-250/9d",
			"text-success": "text-success-600 dark:text-success-250",
			"text-success-interactive":	"hover:text-success-600/7d dark:hover:text-success-250/5d active:text-success-600/11d dark:active:text-success-250/9d",
			"text-primary": "text-primary-600 dark:text-primary-250",
			"text-primary-interactive":	"hover:text-primary-600/7d dark:hover:text-primary-250/5d active:text-primary-600/11d dark:active:text-primary-250/9d",
			"text-neutral": "text-neutral-950 dark:text-neutral-150",
			"text-neutral-1": "text-neutral-900 dark:text-neutral-200",
			"text-neutral-2": "text-neutral-850 dark:text-neutral-250",
			"text-neutral-3": "text-neutral-800 dark:text-neutral-300",
			"text-neutral-light": "text-neutral-50 dark:text-neutral-50",
			"text-neutral-dark": "text-neutral-850 dark:text-neutral-950",
			"text-muted": "text-neutral-600 dark:text-neutral-250",
			"text-muted-interactive":	"hover:text-neutral-600/6d active:text-neutral-600/10d dark:hover:text-neutral-250/5d dark:active:text-neutral-250/9d",
			"outline-neutral": "outline-neutral-600  dark:outline-neutral-300",
			"outline-primary": "outline-primary-600  dark:outline-primary-300",
		},
		[/^shadow-(\\d+)d$/, ([_, value]) => \`shadow-l-\${value}d dark:shadow-d-\${value}d\`],
	],
	extendTheme: (theme) => ({
		...theme,
		colors: {
${palettes.map(([color, value]) => `			"${color}": "${value}"`).join(",\n")},
${normalizedPalettes.map(([color, value]) => `			"${color}n": "${value}"`).join(",\n")},
		},
		animation: {
			...theme.animation,
			keyframes: {
				...theme.animation?.keyframes,
${colors.map((color) => `				"wave-${color}": "{0% {outline-width: 0; outline-color: oklch(from var(--colors-${color}-500) l c h / 0.8)} 100% {outline-width: 6px; outline-color: oklch(from var(--colors-${color}-500) l c h / 0)} }"`).join(",\n")},
			},
			durations: {
				...theme.animation?.durations,
${colors.map((color) => `				"wave-${color}": "${WAVE_ANIMATION_DURATION}s"`).join(",\n")},
			},
			timingFns: {
				...theme.animation?.timingFns,
${colors.map((color) => `				"wave-${color}": "${WAVE_ANIMATION_TIMING_FN}"`).join(",\n")},
			},
			counts: {
				...theme.animation?.counts,
${colors.map((color) => `				"wave-${color}": "1"`).join(",\n")},
			},
			category: {
				...theme.animation?.category,
${colors.map((color) => `				"wave-${color}": "Attention Seekers"`).join(",\n")},
			},
		},
		shadow: {
			...theme.shadow,
${colors.map((color) => `			"focus-${color}": ["0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem) calc(var(--spacing-size) * 2rem) currentColor", "0 0 calc(var(--spacing-size) * pow(2, 0.75) * 1rem / 2) calc(var(--spacing-size) * 4rem) oklch(from var(--colors-${color}-500) l c h / 0.9)"]`).join(",\n")},
			"lifted-neutral": " calc(var(--spacing-size) * pow(2, 1.5) * 1rem) calc(var(--spacing-size) * pow(2, 1.5) * 1rem) calc(var(--spacing-size) * pow(2, 2) * 1rem) 0 oklch(from var(--colors-neutral-1000) l c h / 0.4)",
			"lifted-neutral-hover": " calc(var(--spacing-size) * pow(2, 2) * 1rem) calc(var(--spacing-size) * pow(2, 2) * 1rem) calc(var(--spacing-size) * pow(2, 2.25) * 1rem) 0 oklch(from var(--colors-neutral-1000) l c h / 0.4)",
			"lifted-neutral-active": " calc(var(--spacing-size) * pow(2, 1) * 1rem) calc(var(--spacing-size) * pow(2, 1) * 1rem) calc(var(--spacing-size) * pow(2, 1.5) * 1rem) 0 oklch(from var(--colors-neutral-1000) l c h / 0.4)",
		},
		media: {
			...theme.media,
			pointer_coarse: "(pointer: coarse)",
		},
}),
		preflights: [
			{
				getCSS: () => \`:root, :host {
					--spacing-size: ${spacingSize / PX_IN_REM};
					--radius: ${radius};
					--text-size: ${textSize};
				}\`
			}
		],
		safelist: [
${colors.map((color) => `			"before:animate-wave-${color}"`).join(",\n")}
		]
});`;
