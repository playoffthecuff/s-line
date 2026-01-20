import type { IconProps } from "./types";

export function SuccessIcon({ size = "1.25em", fill, ...props }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
			strokeLinecap="round"
			{...props}
		>
			{fill ? (
				<path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM17.1357 8.61621C16.6477 8.12812 15.8554 8.12825 15.3672 8.61621L10.75 13.2324L8.13379 10.6162C7.64563 10.1281 6.85437 10.1281 6.36621 10.6162C5.87806 11.1044 5.87806 11.8956 6.36621 12.3838L9.85645 15.874C9.85982 15.8775 9.86279 15.8813 9.86621 15.8848C10.3544 16.3729 11.1456 16.3729 11.6338 15.8848L17.1357 10.3838C17.6235 9.89572 17.6235 9.10428 17.1357 8.61621Z" />
			) : (
				<g stroke="currentColor">
					<circle cx="12" cy="12" r="9" strokeWidth="2" fill="none" />
					<path d="M7.25 11.5L10.7502 15.0002" strokeWidth="2.5" />
					<path d="M10.75 15.0013L16.2513 9.49999" strokeWidth="2.5" />
				</g>
			)}
		</svg>
	);
}
