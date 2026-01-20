import type { IconProps } from "./types";

export function PencilOffIcon({
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
			<path d="M11.5 16.5L7.87557 20.1244C7.62946 20.3706 7.32279 20.5479 6.98746 20.6412C5.27022 21.1188 4.06224 21.5015 2.32811 21.9823C2.14041 22.0343 1.96838 21.8607 2.02189 21.6734L3.35763 16.9983C3.451 16.6715 3.62612 16.3739 3.86646 16.1336L7.5 12.5M12.5 7.50001L17.17 2.82998C18.2746 1.7254 20.0654 1.72539 21.17 2.82997C22.2746 3.93453 22.2746 5.72538 21.17 6.82996L16.5 11.5" />
			<path d="M16 4L20 8" />
			<path d="M2.75 19.25L4.75 21.25" />
			<path d="M2 2L22 22" />
		</svg>
	);
}
