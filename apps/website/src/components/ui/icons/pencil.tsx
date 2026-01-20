import type { IconProps } from "./types";

export function PencilIcon({
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
			<path d="M2.32811 21.9823C4.06224 21.5015 5.27022 21.1188 6.98746 20.6412C7.32279 20.5479 7.6236 20.3764 7.86971 20.1303L21.1733 6.8267C22.2778 5.72213 22.2746 3.93453 21.17 2.82996C20.0654 1.72539 18.2746 1.72539 17.17 2.82996L3.86646 16.1336C3.62612 16.3739 3.451 16.6715 3.35763 16.9983L2.02189 21.6734C1.96838 21.8607 2.14041 22.0343 2.32811 21.9823Z" />
			<path d="M16 4L20 8" />
			<path d="M2.75 19.25L4.75 21.25" />
		</svg>
	);
}
