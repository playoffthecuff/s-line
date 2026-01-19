import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

export const labelVariants = cva("h-[1.5em] flex items-center gap-[0.5ch]", {
	variants: {
		intent: {
			neutral: null,
			success: "text-success [&&]-selection:surface-success-solid",
			error: "text-error [&&]-selection:surface-error-solid",
			warning: "text-warning [&&]-selection:surface-warning-solid",
			primary: "text-primary [&&]-selection:surface-primary-solid",
			secondary: "text-secondary [&&]-selection:surface-secondary-solid",
		},
		size: {
			xs: "text-2d font-10d",
			s: "text-3d font-9d",
			m: "text-4d font-8d",
			l: "text-5d font-8d",
			xl: "text-6d font-8d",
		},
		required: {
			true: "before:content-['✺']",
			false: null,
		},
	},
	compoundVariants: [
		{
			intent: ["error", "neutral"],
			required: true,
			className: "before:text-error",
		},
		{
			intent: "primary",
			required: true,
			className: "before:text-primary",
		},
		{
			intent: "secondary",
			required: true,
			className: "before:text-secondary",
		},
		{
			intent: "success",
			required: true,
			className: "before:text-success",
		},
		{
			intent: "warning",
			required: true,
			className: "before:text-warning",
		},
	],
	defaultVariants: {
		size: "m",
		required: false,
		intent: "neutral",
	},
});

export type LabelProps = React.ComponentProps<"label"> &
	VariantProps<typeof labelVariants>;

export function Label({
	intent,
	size,
	className,
	children,
	htmlFor,
	required,
	...props
}: LabelProps) {
	return (
		<label
			className={cn(labelVariants({ intent, size, required }), className)}
			htmlFor={htmlFor}
			{...props}
		>
			{children}
		</label>
	);
}
