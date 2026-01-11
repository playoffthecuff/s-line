import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Card({ children }: Props) {
	return (
		<div className="px-16d py-14d bg-3 rounded-12d shadow-lifted-2">
			{children}
		</div>
	);
}
