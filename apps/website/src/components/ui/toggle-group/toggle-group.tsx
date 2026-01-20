import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const toggleGroupVariants = cva("flex leading-none", {
	variants: {
		size: {
			s: null,
			m: null,
			l: null,
		},
		shape: {
			square: "",
			rounded: "",
			circular: "rounded-full",
		},
		appearance: {
			outline: null,
			ghost: null,
		},
	},
	compoundVariants: [
		{ size: "s", shape: "rounded", className: "rounded-9d" },
		{ size: "m", shape: "rounded", className: "rounded-10d" },
		{ size: "l", shape: "rounded", className: "rounded-11d" },
		{
			size: "s",
			appearance: "outline",
			className: "p-3d gap-3d",
		},
		{
			size: "m",
			appearance: "outline",
			className: "p-4d gap-4d",
		},
		{
			size: "l",
			appearance: "outline",
			className: "p-5d gap-5d",
		},
	],
	defaultVariants: {
		size: "m",
	},
});

export type ToggleGroupProps = VariantProps<typeof toggleGroupVariants> &
	BaseToggleGroup.Props;

export function ToggleGroup({
	children,
	size,
	className,
	appearance,
	...props
}: ToggleGroupProps) {
	return (
		<BaseToggleGroup
			className={cn(toggleGroupVariants({ size, appearance }), className)}
			{...props}
		>
			{children}
		</BaseToggleGroup>
	);
}
