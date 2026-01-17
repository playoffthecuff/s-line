import type { IconProps } from "./types";

export function ChevronRightIcon({
	size = "1.25em",
	strokeWidth = 2,
	className,
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
			className={className}
		>
			<path d="M15.5 12L8.5 5" />
			<path d="M15.5 12L8.5 19" />
		</svg>
	);
}
