import type { IconProps } from "./types";

export function XIcon({
	size = "1.25em",
	strokeWidth = 2,
	...props
}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M6 6L18 18" />
			<path d="M6 18L18 6" />
		</svg>
	);
}
