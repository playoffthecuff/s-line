import { cva, type VariantProps } from "class-variance-authority";
import type { IconProps } from "../icons/types";
import { cn } from "@/lib/utils/cn";

export const intentMessageVariants = cva(
	"h-[1.5em] flex items-center gap-[0.5ch]",
	{
		variants: {
			intent: {
				success: "text-success [&&]-selection:surface-success-solid",
				error: "text-error [&&]-selection:surface-error-solid",
				warning: "text-warning [&&]-selection:surface-warning-solid",
				primary: "text-primary [&&]-selection:surface-primary-solid",
				secondary: "text-secondary [&&]-selection:surface-secondary-solid",
				visited: "text-visited [&&]-selection:surface-visited-solid",
			},
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
		},
		defaultVariants: {
			size: "m",
			intent: "secondary",
		},
	},
);

const intentToColors = {
	primary: "primary",
	secondary: "secondary",
	neutral: "foreground",
	error: "error",
	warning: "warning",
	success: "success",
	visited: "visited",
} as const;

export function IntentMessage({
	intent,
	size,
	className,
	children,
	iconStart: IconStart,
	iconEnd: IconEnd,
	...props
}: React.ComponentProps<"p"> &
	VariantProps<typeof intentMessageVariants> & {
		iconStart?: React.ComponentType<IconProps>;
		iconEnd?: React.ComponentType<IconProps>;
	}) {
	const intentColor =
		intentToColors[(intent ?? "secondary") as keyof typeof intentToColors];
	return (
		<p
			className={cn(intentMessageVariants({ intent, size }), className)}
			{...props}
		>
			{IconStart && (
				<IconStart
					size="1em"
					fill="currentColor"
					className={`fill-${intentColor}-d`}
				/>
			)}
			{children}
			{IconEnd && <IconEnd size="1em" fill="currentColor" className={`fill-${intentColor}-d`} />}
		</p>
	);
}
