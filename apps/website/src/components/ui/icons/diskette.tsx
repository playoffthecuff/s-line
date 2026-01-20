import type { IconProps } from "./types";

export function DisketteIcon({
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
			<path d="M17 21V14C17 13.7348 16.8946 13.4804 16.7071 13.2929C16.5196 13.1054 16.2652 13 16 13H8C7.73478 13 7.48043 13.1054 7.29289 13.2929C7.10536 13.4804 7 13.7348 7 14V21" />
			<path d="M7 3V7C7 7.55228 7.44772 8 8 8H14C14.5523 8 15 7.55228 15 7V3" />
			<path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H17C17.6295 3 18.2223 3.29639 18.6 3.8L20.6 6.46667C20.8596 6.81286 21 7.23393 21 7.66667V19C21 20.1046 20.1046 21 19 21Z" />
		</svg>
	);
}
