import type { IconProps } from "./types";
export function CopyIcon({
	width = 24,
	height = 24,
	strokeWidth = 2,
	copied = false,
}: IconProps & {copied: boolean}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 18H5C3.34315 18 2 16.6569 2 15V5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V6" />
			<path d="M19 6H9C7.34315 6 6 7.34315 6 9V19C6 20.6569 7.34315 22 9 22H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6Z" />
			<g className={copied ? "" : "hidden"}>
				<path d="M10 13.5L13 16.5" strokeLinecap="round" />
				<path d="M13 16.5L18 11.5" strokeLinecap="round" />
			</g>
		</svg>
	);
}
