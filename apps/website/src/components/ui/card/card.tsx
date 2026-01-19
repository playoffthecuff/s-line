import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Title, type TitleProps } from "../typography/title";

interface Props {
	children: ReactNode;
	className?: string;
}

//TODO Add variants
export function Card({ children, className }: Props) {
	return (
		<article
			data-slot="card"
			className={cn(
				"flex flex-col gap-12d bg-2 rounded-12d shadow-lifted-2 overflow-hidden",
				className,
			)}
		>
			{children}
		</article>
	);
}

Card.Header = ({ children, className }: Props) => (
	<header
		data-slot="card-header"
		className={cn("flex items-center gap-16d", className)}
	>
		{children}
	</header>
);

Card.Title = ({ children, className, ...props }: Props & TitleProps) => (
	<Title data-slot="card-title" className={cn("", className)} {...props}>
		{children}
	</Title>
);

Card.Description = ({ children, className }: Props) => (
	<p data-slot="card-description" className={cn("text-muted-1", className)}>
		{children}
	</p>
);

Card.Content = ({ children, className }: Props) => (
	<div data-slot="card-content" className={cn("px-16d", className)}>
		{children}
	</div>
);

Card.Footer = ({ children, className }: Props) => (
	<footer data-slot="card-footer" className={cn("px-16d", className)}>
		{children}
	</footer>
);
