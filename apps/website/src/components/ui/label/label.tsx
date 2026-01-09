import { cn } from "@/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

export const labelVariants = cva(
	"h-[1.5em] flex items-center gap-[0.5ch]",
	{
		variants: {
			intent: {
				neutral: "[&&]-selection:surface-foreground-solid",
				success: "text-success selection:surface-success-solid",
				error: "text-error [&&]-selection:surface-error-solid",
				warning: "text-warning selection:surface-warning-solid",
				primary: "text-primary selection:surface-primary-solid",
				secondary: "text-secondary selection:surface-secondary-solid",
			},
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
			required: {
				true: "before:content-['✺']",
				false: null,
			}
		},
		compoundVariants: [
			{
				intent: "error",
				required: true,
				className: "before:text-error-478d dark:before:text-error-740d",
			},
			{
				intent: "primary",
				required: true,
				className: "before:text-primary-488d dark:before:text-primary-722d",
			},
			{
				intent: "secondary",
				required: true,
				className: "before:text-secondary-450d dark:before:text-secondary-720d",
			},
			{
				intent: "success",
				required: true,
				className: "before:text-success-440d dark:before:text-success-700d",
			},
			{
				intent: "warning",
				required: true,
				className: "before:text-warning-455d dark:before:text-warning-760d",
			},
			{
				intent: "neutral",
				required: true,
				className: "before:text-error-478d dark:before:text-error-740d",
			},
			
		],
		defaultVariants: {
			size: "m",
			required: false,
			intent: "neutral",
		},
	},
);

export function Label({
	intent,
	size,
	className,
	children,
	htmlFor,
	required,
	...props
}: React.ComponentProps<"label"> &
	VariantProps<typeof labelVariants>) {
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
