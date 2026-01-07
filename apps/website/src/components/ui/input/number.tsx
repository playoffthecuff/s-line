import { NumberField } from "@base-ui-components/react/number-field";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { SpinnerIcon } from "../icons/spinner";
import { TriangleDownRoundedIcon } from "../icons/triangle-down-rounded";
import { TriangleDownSharpIcon } from "../icons/triangle-down-sharp";
import { TriangleUpRoundedIcon } from "../icons/triangle-up-rounded";
import { TriangleUpSharpIcon } from "../icons/triangle-up-sharp";

type NUT<T> = T | null | undefined;

type NumberInputVariants = Partial<{
	size: NUT<"s" | "m" | "l">;
	color: NUT<"primary" | "secondary" | "neutral">;
	appearance: NUT<"solid" | "outline">;
	shape: NUT<"square" | "rounded" | "circular">;
	width: NUT<"narrow" | "normal" | "wide">;
	status: NUT<"valid" | "warning" | "invalid">;
	loading: NUT<boolean>;
}>;

const buttonVariants = cva(
	"size-[2em] flex items-center justify-center cursor-pointer",
	{
		variants: {
			size: {
				l: null,
				m: null,
				s: null,
			},
			type: {
				increment: null,
				decrement: null,
			},
			appearance: {
				solid: null,
				outline: null,
			},
			loading: {
				true: "pointer-events-none",
			},
			shape: {
				square: null,
				rounded: null,
				circular: null,
			},
			color: {
				primary: null,
				secondary: null,
				neutral: null,
			},
		},
		compoundVariants: [
			{
				appearance: "outline",
				color: "neutral",
				className: "surface-foreground-outline-ia border-1.6",
			},
			{
				appearance: "solid",
				color: "neutral",
				className: "surface-foreground-solid-ia",
			},
			{
				appearance: "outline",
				color: "primary",
				className: "surface-primary-outline-ia border-1.6",
			},
			{
				appearance: "solid",
				color: "primary",
				className: "surface-primary-solid-ia",
			},
			{
				appearance: "outline",
				color: "secondary",
				className: "surface-secondary-outline-ia border-1.6",
			},
			{
				appearance: "solid",
				color: "secondary",
				className: "surface-secondary-solid-ia",
			},
			{
				size: "s",
				type: "increment",
				className: "rounded-r-7d",
				shape: "rounded",
			},
			{
				size: "s",
				type: "decrement",
				className: "rounded-l-7d",
				shape: "rounded",
			},
			{
				size: "m",
				type: "increment",
				className: "rounded-r-8d",
				shape: "rounded",
			},
			{
				size: "m",
				type: "decrement",
				className: "rounded-l-8d",
				shape: "rounded",
			},
			{
				size: "l",
				type: "increment",
				className: "rounded-r-9d",
				shape: "rounded",
			},
			{
				size: "l",
				type: "decrement",
				className: "rounded-l-9d",
				shape: "rounded",
			},
			{
				type: "increment",
				shape: "circular",
				className: "rounded-r-full",
			},
			{
				type: "decrement",
				shape: "circular",
				className: "rounded-l-full",
			},
		],
		defaultVariants: {
			color: "neutral",
			size: "m",
			shape: "rounded",
			appearance: "solid",
		},
	},
);

const iconVariants = cva(null, {
	variants: {
		size: {
			s: "stroke-5d",
			m: "stroke-4d",
			l: "stroke-3d",
		},
		appearance: {
			outline: null,
			solid: "fill-current",
		},
	},
	defaultVariants: {
		size: "m",
		appearance: "solid",
	},
});

const groupVariants = cva("flex transition-all has-[:invalid]:ring-error-4d", {
	variants: {
		size: {
			s: "text-3d font-10d",
			m: "text-4d font-9d",
			l: "text-5d font-8d",
		},
		disabled: {
			true: "saturate-50 opacity-50 contrast-60 pointer-events-none",
		},
		loading: {
			true: null,
		},
		color: {
			primary: null,
			secondary: null,
			neutral: null,
		},
		shape: {
			square: null,
			rounded: null,
			circular: "rounded-full",
		},
		status: {
			valid: "focus-within:ring-success-4d",
			warning: "focus-within:ring-warning-4d",
			invalid: "focus-within:ring-error-4d",
		},
	},
	compoundVariants: [
		{
			status: undefined,
			color: "neutral",
			className: "focus-within:ring-foreground-4d",
		},
		{
			status: undefined,
			color: "primary",
			className: "focus-within:ring-primary-4d",
		},
		{
			status: undefined,
			color: "secondary",
			className: "focus-within:ring-secondary-4d",
		},
		{
			size: "s",
			shape: "rounded",
			className: "rounded-7d",
		},
		{
			size: "m",
			shape: "rounded",
			className: "rounded-8d",
		},
		{
			size: "l",
			shape: "rounded",
			className: "rounded-9d",
		},
	],
	defaultVariants: {
		color: "neutral",
		size: "m",
		shape: "rounded",
	},
});

const inputVariants = cva(
	"text-center tabular-nums focus:z-1 outline-none bg-3 hover:not-focus:bg-2 border-y-1.6 leading-none invalid:text-error invalid:selection:surface-error-solid",
	{
		variants: {
			appearance: {
				solid: null,
				outline: null,
			},
			disabled: {
				true: "select-none",
			},
			loading: {
				true: "text-transparent pointer-events-none select-none",
			},
			status: {
				valid: "[&&]-selection:surface-success-solid text-success",
				warning: "[&&]-selection:surface-warning-solid text-warning",
				invalid: "[&&]-selection:surface-error-solid text-error",
			},
			color: {
				primary: null,
				secondary: null,
				neutral: null,
			},
			width: {
				narrow: "w-[6ch]",
				normal: "w-[8ch]",
				wide: "w-[11ch]",
			},
		},
		compoundVariants: [
			{
				appearance: "outline",
				color: "neutral",
				className: "surface-foreground-outline",
			},
			{
				appearance: "outline",
				color: "primary",
				className: "surface-primary-outline",
			},
			{
				appearance: "outline",
				color: "secondary",
				className: "surface-secondary-outline",
			},
			{ appearance: "solid", color: "neutral", className: "border-foreground" },
			{ appearance: "solid", color: "primary", className: "border-primary" },
			{
				appearance: "solid",
				color: "secondary",
				className: "border-secondary",
			},
		],
		defaultVariants: {
			width: "normal",
			color: "neutral",
			appearance: "solid",
		},
	},
);

export type NumberInputProps = NumberField.Root.Props & NumberInputVariants;

export function NumberInput({
	shape,
	size,
	color,
	width,
	status,
	disabled,
	loading,
	required,
	appearance,
	...props
}: NumberInputProps) {
	return (
		<NumberField.Root
			className={cn(
				"flex flex-col items-center justify-center gap-1 group",
				disabled && "cursor-not-allowed",
				loading && "cursor-wait",
			)}
			{...props}
		>
			<NumberField.Group
				className={groupVariants({
					color,
					disabled,
					loading,
					size,
					shape,
					status,
				})}
			>
				<NumberField.Decrement
					className={buttonVariants({
						appearance,
						size,
						color,
						loading,
						shape,
						type: "decrement",
					})}
				>
					{shape === "square" ? (
						<TriangleDownSharpIcon
							className={iconVariants({ size, appearance })}
						/>
					) : (
						<TriangleDownRoundedIcon
							className={iconVariants({ size, appearance })}
						/>
					)}
				</NumberField.Decrement>
				<NumberField.Input
					className={inputVariants({
						color,
						width,
						status,
						disabled,
						loading,
						appearance,
					})}
					required={required}
				/>
				<NumberField.Increment
					className={buttonVariants({
						appearance,
						size,
						color,
						loading,
						shape,
						type: "increment",
					})}
				>
					{shape === "square" ? (
						<TriangleUpSharpIcon
							className={iconVariants({ size, appearance })}
						/>
					) : (
						<TriangleUpRoundedIcon
							className={iconVariants({ size, appearance })}
						/>
					)}
				</NumberField.Increment>
			</NumberField.Group>
			{loading && <SpinnerIcon className="animate-spin absolute pointer-events-none" />}
		</NumberField.Root>
	);
}
