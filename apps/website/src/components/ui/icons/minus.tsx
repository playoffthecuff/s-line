import type { IconProps } from "./types";

export function MinusIcon({
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
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			stroke="currentColor"
			{...props}
		>
			<path d="M19 12L5 12" />
		</svg>
	);
}
