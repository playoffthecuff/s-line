import type { IconProps } from "./types";

export function HashIcon({
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
			<path d="M4.33 9L20.33 9" />
			<path d="M3.67 15L19.67 15" />
			<path d="M9.98456 4.06006L8 19.9365" />
			<path d="M15.9846 4.06006L14 19.9365" />
		</svg>
	);
}
