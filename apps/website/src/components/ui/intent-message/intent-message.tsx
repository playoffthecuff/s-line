import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import type { IconProps } from "../icons/types";

export const intentMessageVariants = cva(
	"flex items-center gap-[0.5ch] leading-none",
	{
		variants: {
			intent: {
				success: "text-success [&&]-selection:surface-success-solid",
				error: "text-error [&&]-selection:surface-error-solid",
				warning: "text-warning [&&]-selection:surface-warning-solid",
				primary: "text-primary [&&]-selection:surface-primary-solid",
				secondary: "text-secondary",
				visited: "text-visited [&&]-selection:surface-visited-solid",
			},
			size: {
				xs: "fs-2d font-9d",
				s: "fs-3d font-9d",
				m: "fs-4d font-8d",
				l: "fs-5d font-7d",
				xl: "fs-6d font-7d",
			},
		},
		defaultVariants: {
			size: "m",
			intent: "secondary",
		},
	},
);

const iconVariants = cva(null, {
	variants: {
		intent: {
			success: "fill-success-d",
			error: "fill-error-d",
			warning: "fill-warning-d",
			primary: "fill-primary-d",
			secondary: "fill-secondary-d",
			visited: "fill-visited-d",
		},
	},
});

export type IntentMessageProps = React.ComponentProps<"p"> &
	VariantProps<typeof intentMessageVariants> & {
		iconStart?: React.ComponentType<IconProps>;
		iconEnd?: React.ComponentType<IconProps>;
	};

export function IntentMessage({
	intent,
	size,
	className,
	children,
	iconStart: IconStart,
	iconEnd: IconEnd,
	...props
}: IntentMessageProps) {
	return (
		<p
			className={cn(intentMessageVariants({ intent, size }), className)}
			{...props}
		>
			{IconStart && (
				<IconStart
					size="1em"
					fill="currentColor"
					className={iconVariants({ intent })}
				/>
			)}
			{children}
			{IconEnd && (
				<IconEnd
					size="1em"
					fill="currentColor"
					className={iconVariants({ intent })}
				/>
			)}
		</p>
	);
}
