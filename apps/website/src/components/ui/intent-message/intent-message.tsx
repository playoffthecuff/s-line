import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import type { IconProps } from "../icons/types";

export const intentMessageVariants = cva("flex items-center gap-[0.5ch]", {
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
			xs: "text-2d font-9d",
			s: "text-3d font-9d",
			m: "text-4d font-8d",
			l: "text-5d font-7d",
			xl: "text-6d font-7d",
		},
	},
	compoundVariants: [
		{
			size: ["l", "m", "s", "xl"],
			className: "h-[0.84em]", //TODO migrate from text-#d to fs-#d with leading-none instead arbitrary height
		},
	],
	defaultVariants: {
		size: "m",
		intent: "secondary",
	},
});

const intentToColors = {
	primary: "primary",
	secondary: "secondary",
	neutral: "foreground",
	error: "error",
	warning: "warning",
	success: "success",
	visited: "visited",
} as const;

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
			{IconEnd && (
				<IconEnd
					size="1em"
					fill="currentColor"
					className={`fill-${intentColor}-d`}
				/>
			)}
		</p>
	);
}
