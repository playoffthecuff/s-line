import type { IconProps } from "./types";

export function SunIcon({ size = "1.25em", strokeWidth = 2 }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" />
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
