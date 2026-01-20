import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const headingVariants = cva("font-11d", {
	variants: {
		size: {
			1: "text-3d",
			2: "text-4d",
			3: "text-5d",
			4: "text-6d",
			5: "text-7d",
			6: "text-8d",
		},
	},
	defaultVariants: {
		size: 1,
	},
});

const sizeToHeading = {
	1: "h6",
	2: "h5",
	3: "h4",
	4: "h3",
	5: "h2",
	6: "h1",
} as const;

type Sizes = typeof sizeToHeading;

type Tag = Sizes[keyof Sizes];

export type TitleProps = React.ComponentProps<"h1"> &
	VariantProps<typeof headingVariants> & { as?: Tag };

export function Title({
	as,
	size = 6,
	children,
	className,
	...props
}: TitleProps) {
	const Heading = as ? as : sizeToHeading[size ?? 1];
	return (
		<Heading className={cn(headingVariants({ size }), className)} {...props}>
			{children}
		</Heading>
	);
}
