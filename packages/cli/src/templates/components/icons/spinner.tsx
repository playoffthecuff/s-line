export function SpinnerIcon({ size = "1.25em", className = "" }) {
	return (
		<div
			className={className}
			style={{
				width: size,
				height: size,
				background: "conic-gradient(from 0deg, transparent, currentColor)",
				borderRadius: "50%",
				mask: `radial-gradient(farthest-side, transparent calc(100% - ${size} / 5), black calc(100% - ${size} / 5 + 1px))`,
			}}
		/>
	);
}
