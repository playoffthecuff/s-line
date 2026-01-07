import type { IconProps } from "./types";

export function ChevronUpIcon({
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
			<path d="M5 15.5L12 8.5" />
			<path d="M12 8.5L19 15.5" />
		</svg>
	);
}
