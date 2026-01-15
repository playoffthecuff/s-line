import type { IconProps } from "./types";

export function SunIcon({
	size = "1.25em",
	strokeWidth = 2,
	fill = "none",
	...props
}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={fill}
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="12" cy="12" r="3.5" />
			<path d="M12 2.5V4.5" />
			<path d="M12 19.5V21.5" />
			<path d="M17.27 17.27L18.68 18.68" />
			<path d="M2.5 12H4.5" />
			<path d="M19.5 12H21.5" />
			<path d="M6.74 17.27L5.33 18.68" />
			<path d="M5.33 5.33002L6.74 6.74002" />
			<path d="M18.68 5.33002L17.27 6.74002" />
		</svg>
	);
}
