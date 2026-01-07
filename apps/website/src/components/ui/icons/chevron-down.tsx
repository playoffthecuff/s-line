import type { IconProps } from "./types";

export function ChevronDownIcon({
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
			<path d="M12 15.5L19 8.5" />
			<path d="M5 8.5L12 15.5" />
		</svg>
	);
}
