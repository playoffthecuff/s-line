import type { IconProps } from "./types";

export function MoonIcon({
	size="1.25em",
	strokeWidth = 2,
}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9.35034 3.3766C9.85074 3.22214 10.1422 3.91918 9.79289 4.30938C8.68263 5.54967 8.0074 7.18761 8.00733 8.98305C8.00748 12.8543 11.1461 15.9928 15.0176 15.9929C16.8134 15.9929 18.451 15.3172 19.6911 14.2065C20.0812 13.8571 20.7781 14.1484 20.6237 14.6488C19.489 18.3271 16.0645 21 12.0132 21C7.03535 21 3 16.9649 3 11.9873C3 7.93667 5.67242 4.51185 9.35034 3.3766Z" />
		</svg>
	);
}
