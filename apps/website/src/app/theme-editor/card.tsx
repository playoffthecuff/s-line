import type { ReactNode } from "react";
import type { Palette } from "@/lib/utils/colors";

interface Props {
	palette: Palette;
	children: ReactNode;
	borderRadius: number;
}

export function Card({ palette, children,borderRadius }: Props) {
	const slice = palette.length > 20 ? [1, -1] : [0, palette.length];
	return (
		<div
			className="flex flex-col border border-neutral-500 overflow-hidden shadow-5d"
			style={{
				borderRadius
			}}
		>
			<div className="flex flex-col overflow-hidden">
				{[...Array(5)].map((_, i) => (
					<div className="flex" key={i}>
						{palette.slice(...slice)
							.map(([, oklch], i) =>
								i & 1 ? (
									<div
										className="w-18d h-18d"
										style={{ backgroundColor: oklch }}
										key={i}
									/>
								) : null,
							)}
					</div>
				))}
			</div>
			{children}
		</div>
	);
}
