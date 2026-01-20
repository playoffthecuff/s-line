import { NumberField } from "@base-ui/react/number-field";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { SpinnerIcon } from "../icons/spinner";
import type { IconProps } from "../icons/types";

const buttonVariants = cva(
	"flex items-center justify-center cursor-pointer aspect-square",
	{
		variants: {
			size: {
				xl: null,
				l: null,
				m: null,
				s: null,
				xs: null,
			},
			controlsPosition: {
				start: null,
				between: null,
				end: null,
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
			intent: {
				secondary: null,
				neutral: null,
			},
			status: {
				valid: null,
				warning: null,
				invalid: null,
			},
		},
		compoundVariants: [
			{
				appearance: "outline",
				className: "border-y-3d",
			},
			{
				appearance: "outline",
				controlsPosition: ["start", "between"],
				className: "border-s-3d",
			},
			{
				appearance: "outline",
				controlsPosition: ["end", "between"],
				className: "border-e-3d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "xs",
				controlsPosition: ["end", "between"],
				type: "increment",
				className: "rounded-e-6d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "s",
				controlsPosition: ["end", "between"],
				type: "increment",
				className: "rounded-e-7d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "m",
				controlsPosition: ["end", "between"],
				type: "increment",
				className: "rounded-e-8d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "l",
				controlsPosition: ["end", "between"],
				type: "increment",
				className: "rounded-e-9d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "xl",
				controlsPosition: ["end", "between"],
				type: "increment",
				className: "rounded-e-10d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "xs",
				controlsPosition: ["start", "between"],
				type: "decrement",
				className: "rounded-s-6d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "s",
				controlsPosition: ["start", "between"],
				type: "decrement",
				className: "rounded-s-7d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "m",
				controlsPosition: ["start", "between"],
				type: "decrement",
				className: "rounded-s-8d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "l",
				controlsPosition: ["start", "between"],
				type: "decrement",
				className: "rounded-s-9d",
			},
			{
				appearance: "outline",
				shape: "rounded",
				size: "xl",
				controlsPosition: ["start", "between"],
				type: "decrement",
				className: "rounded-s-10d",
			},
			{
				appearance: "outline",
				shape: "circular",
				controlsPosition: ["between", "start"],
				type: "decrement",
				className: "rounded-s-full",
			},
			{
				appearance: "outline",
				shape: "circular",
				controlsPosition: ["between", "end"],
				type: "increment",
				className: "rounded-e-full",
			},
			{
				appearance: "outline",
				intent: "neutral",
				className: "border-foreground hover:bg-2",
			},
			{
				appearance: "outline",
				intent: "secondary",
				className: "border-secondary hover:bg-1",
			},
			{
				appearance: "solid",
				intent: "neutral",
				className: "surface-foreground-solid-ia",
			},
			{
				appearance: "solid",
				intent: "secondary",
				className: "surface-secondary-solid-ia",
			},
		],
		defaultVariants: {
			intent: "neutral",
			size: "m",
			shape: "rounded",
			appearance: "solid",
			controlsPosition: "between",
		},
	},
);

const iconVariants = cva(null, {
	variants: {
		size: {
			xs: "stroke-4d",
			s: "stroke-4d",
			m: "stroke-3d",
			l: "stroke-3d",
			xl: "stroke-3d",
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

const groupVariants = cva(
	"flex overflow-hidden transition-all has-invalid:ring-error-6d text-2 font-mono",
	{
		variants: {
			appearance: {
				solid: null,
				outline: null,
			},
			size: {
				xs: "text-3d font-9d h-[1.8em]",
				s: "text-3d font-9d h-[2em]",
				m: "text-4d font-8d h-[2em]",
				l: "text-5d font-7d h-[2em]",
				xl: "text-6d font-7d h-[2em]",
			},
			width: {
				narrow: null,
				normal: null,
				wide: null,
				fill: "grow",
			},
			disabled: {
				true: "saturate-50 opacity-50 contrast-60 pointer-events-none",
			},
			loading: {
				true: null,
			},
			intent: {
				secondary: "bg-2",
				neutral: "bg-3",
			},
			shape: {
				square: null,
				rounded: null,
				circular: "rounded-full",
			},
			status: {
				valid:
					"focus-within:ring-success-6d [&>button]:border-success [&>button]:dark:border-success",
				warning:
					"focus-within:ring-warning-6d [&>button]:border-warning [&>button]:dark:border-warning",
				invalid:
					"focus-within:ring-error-6d [&>button]:border-error [&>button]:dark:border-error",
			},
		},
		compoundVariants: [
			{
				status: undefined,
				className:
					"focus-within:ring-primary-6d [&>button]:focus-within:border-primary",
			},
			{
				size: "xs",
				shape: "rounded",
				className: "rounded-6d",
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
			{
				size: "xl",
				shape: "rounded",
				className: "rounded-10d",
			},
			{
				appearance: "solid",
				intent: "neutral",
				className: "border-foreground",
			},
			{
				appearance: "solid",
				intent: "secondary",
				className: "border-secondary",
			},
		],
		defaultVariants: {
			intent: "neutral",
			size: "m",
			shape: "rounded",
			appearance: "solid",
			width: "normal",
		},
	},
);

const inputVariants = cva(
	"text-center tabular-nums outline-none focus:z-1 leading-none invalid:text-error invalid:selection:surface-error-solid border-y-3d",
	{
		variants: {
			size: {
				xs: null,
				s: null,
				m: null,
				l: null,
				xl: null,
			},
			shape: {
				square: null,
				rounded: null,
				circular: null,
			},
			appearance: {
				solid: null,
				outline: null,
			},
			controlsPosition: {
				start: "border-x-3d",
				between: null,
				end: "border-x-3d",
			},
			width: {
				narrow: "w-[7ch]",
				normal: "w-[10ch]",
				wide: "w-[14ch]",
				fill: "w-[calc(100%-4em)]",
			},
			disabled: {
				true: "select-none",
			},
			loading: {
				true: "text-transparent pointer-events-none select-none",
			},
			status: {
				valid:
					"[&&]-selection:surface-success-solid border-success dark:border-success text-success",
				warning:
					"[&&]-selection:surface-warning-solid border-warning dark:border-warning text-warning",
				invalid:
					"[&&]-selection:surface-error-solid border-error dark:border-error text-error",
			},
			intent: {
				neutral: "hover:not-focus:bg-2",
				secondary: "hover:not-focus:bg-1",
			},
		},
		compoundVariants: [
			{
				status: undefined,
				className: "focus:border-primary",
			},
			{
				status: ["invalid", "valid", "warning"],
				controlsPosition: "between",
				appearance: "solid",
				className: "border-x-3d",
			},
			{ status: undefined, intent: "neutral", className: "border-foreground" },
			{ status: undefined, intent: "secondary", className: "border-secondary" },
			{
				size: "xs",
				shape: "rounded",
				controlsPosition: "start",
				className: "rounded-e-6d",
			},
			{
				size: "xs",
				shape: "rounded",
				controlsPosition: "end",
				className: "rounded-s-6d",
			},
			{
				size: "s",
				shape: "rounded",
				controlsPosition: "start",
				className: "rounded-e-7d",
			},
			{
				size: "s",
				shape: "rounded",
				controlsPosition: "end",
				className: "rounded-s-7d",
			},
			{
				size: "m",
				shape: "rounded",
				controlsPosition: "start",
				className: "rounded-e-8d",
			},
			{
				size: "m",
				shape: "rounded",
				controlsPosition: "end",
				className: "rounded-s-8d",
			},
			{
				size: "l",
				shape: "rounded",
				controlsPosition: "start",
				className: "rounded-e-9d",
			},
			{
				size: "l",
				shape: "rounded",
				controlsPosition: "end",
				className: "rounded-s-9d",
			},
			{
				size: "xl",
				shape: "rounded",
				controlsPosition: "start",
				className: "rounded-e-10d",
			},
			{
				size: "xl",
				shape: "rounded",
				controlsPosition: "end",
				className: "rounded-s-10d",
			},
			{
				controlsPosition: "start",
				shape: "circular",
				className: "rounded-e-full",
			},
			{
				controlsPosition: "end",
				shape: "circular",
				className: "rounded-s-full",
			},
		],
		defaultVariants: {
			width: "normal",
			intent: "neutral",
			shape: "rounded",
			size: "m",
			controlsPosition: "between",
			appearance: "solid",
		},
	},
);

type ButtonContent = React.ComponentType<IconProps> | string | number;
type ButtonProps = VariantProps<typeof buttonVariants> & {
	content: ButtonContent;
};
type IconVariantsProps = VariantProps<typeof iconVariants>;
type GroupProps = VariantProps<typeof groupVariants>;
type InputProps = VariantProps<typeof inputVariants>;

export type NumberInputProps = NumberField.Root.Props &
	Omit<NumberField.Input.Props, "size"> &
	InputProps &
	GroupProps &
	IconVariantsProps & {
		decrementContent?: ButtonContent;
		incrementContent?: ButtonContent;
	};

const FieldDecrement = ({
	appearance,
	intent,
	loading,
	status,
	content: Content,
	controlsPosition,
	shape,
	size,
}: ButtonProps) => (
	<NumberField.Decrement
		className={buttonVariants({
			appearance,
			size,
			intent,
			controlsPosition,
			loading,
			status,
			shape,
			type: "decrement",
		})}
	>
		{Content &&
			(typeof Content === "string" || typeof Content === "number" ? (
				Content
			) : (
				<Content className={cn(iconVariants({ size, appearance }))} />
			))}
	</NumberField.Decrement>
);

const FieldIncrement = ({
	appearance,
	intent,
	loading,
	status,
	content: Content,
	controlsPosition,
	shape,
	size,
}: ButtonProps) => (
	<NumberField.Increment
		className={buttonVariants({
			appearance,
			size,
			intent,
			loading,
			status,
			controlsPosition,
			shape,
			type: "increment",
		})}
	>
		{Content &&
			(typeof Content === "string" || typeof Content === "number" ? (
				Content
			) : (
				<Content className={cn(iconVariants({ size, appearance }))} />
			))}
	</NumberField.Increment>
);

export function NumberInput({
	shape,
	size,
	intent,
	width,
	status,
	disabled,
	incrementContent = "+",
	decrementContent = "-",
	controlsPosition = "between",
	placeholder,
	loading,
	required,
	appearance,
	...props
}: NumberInputProps) {
	const controlProps = {
		intent,
		appearance,
		loading,
		shape,
		size,
		controlsPosition,
		status,
	};
	const decrement = (
		<FieldDecrement {...controlProps} content={decrementContent} />
	);
	const increment = (
		<FieldIncrement {...controlProps} content={incrementContent} />
	);
	return (
		<NumberField.Root
			className={cn(
				"group flex items-center justify-center",
				disabled && "cursor-not-allowed",
				loading && "cursor-wait",
				width !== "fill" && "w-fit",
			)}
			{...props}
		>
			<NumberField.Group
				className={groupVariants({
					intent,
					disabled,
					loading,
					size,
					shape,
					status,
					appearance,
					width,
				})}
			>
				{controlsPosition !== "end" && decrement}
				{controlsPosition === "start" && increment}
				<NumberField.Input
					className={inputVariants({
						intent,
						appearance,
						status,
						disabled,
						shape,
						size,
						loading,
						width,
						controlsPosition,
					})}
					required={required}
					placeholder={placeholder}
				/>
				{controlsPosition === "end" && decrement}
				{controlsPosition !== "start" && increment}
			</NumberField.Group>
			{loading && (
				<SpinnerIcon className="animate-spin absolute pointer-events-none" />
			)}
		</NumberField.Root>
	);
}
