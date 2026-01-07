"use client";

import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx/lite";
import { SpinnerIcon } from "@/components/ui/icons/spinner";
import { useWaveAnimate } from "@/components/ui/use-wave-animate";

const toggleVariants = cva(
	"inline-flex h-[2em] min-w-[2em] px-[calc(0.375em-2px)] items-center justify-center whitespace-nowrap transition-all [&_svg]:pointer-events-none cursor-pointer relative select-none before:absolute before:inset-0 before:block before:outline-0 before:content-[''] outline-none",
	{
		variants: {
			intent: {
				neutral: "focus-visible:shadow-focus-foreground",
				primary: "focus-visible:shadow-focus-primary",
				destructive: "focus-visible:shadow-focus-error",
				visited: "focus-visible:shadow-focus-visited",
				secondary: "focus-visible:shadow-focus-secondary",
				success: "focus-visible:shadow-focus-success",
				warning: "focus-visible:shadow-focus-warning",
			},
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
			lifted: {
				true: null,
				false: null,
			},
			shape: {
				rounded:
					"rounded-[calc(var(--radius)*0.25em)] before:rounded-[calc(var(--radius)*0.25em)]",
				square: "rounded-none before:rounded-none",
				circular: "rounded-full before:rounded-full",
			},
			appearance: {
				solid: null,
				subtle: null,
				outline:
					"before:outline-offset-1.6 border-1.6 focus-visible:border-none",
				ghost: null,
				text: null,
			},
			disabled: {
				true: "saturate-75 opacity-50 contrast-60 pointer-events-none",
			},
			loading: {
				true: "pointer-events-none",
			},
			effect: {
				fill: "[&[data-pressed]>svg]:fill-current",
				bgColor: null,
				none: null,
			},
		},
		compoundVariants: [
			{
				appearance: ["outline", "solid", "subtle", "ghost"],
				lifted: true,
				className: "shadow-lifted-ia",
			},

			{
				intent: "primary",
				appearance: "solid",
				className: "surface-primary-solid-ia",
			},
			{
				intent: "primary",
				appearance: "subtle",
				className: "surface-primary-subtle-ia",
			},
			{
				intent: "primary",
				appearance: ["outline", "ghost"],
				className: "surface-primary-outline-ia",
			},
			{
				intent: "primary",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-primary-toggleable",
			},
			{
				intent: "primary",
				appearance: "text",
				lifted: false,
				className: "text-primary-ia",
			},
			{
				intent: "primary",
				appearance: "text",
				lifted: true,
				className:
					"text-primary-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},

			{
				intent: "destructive",
				appearance: "solid",
				className: "surface-error-solid-ia",
			},
			{
				intent: "destructive",
				appearance: "subtle",
				className: "surface-error-subtle-ia",
			},
			{
				intent: "destructive",
				appearance: ["outline", "ghost"],
				className: "surface-error-outline-ia",
			},
			{
				intent: "destructive",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-error-toggleable",
			},
			{
				intent: "destructive",
				appearance: "text",
				lifted: false,
				className: "text-error-ia",
			},
			{
				intent: "destructive",
				appearance: "text",
				lifted: true,
				className:
					"text-error-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},

			{
				intent: "visited",
				appearance: "solid",
				className: "surface-visited-solid-ia",
			},
			{
				intent: "visited",
				appearance: "subtle",
				className: "surface-visited-subtle-ia",
			},
			{
				intent: "visited",
				appearance: ["outline", "ghost"],
				className: "surface-visited-outline-ia",
			},
			{
				intent: "visited",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-visited-toggleable",
			},
			{
				intent: "visited",
				appearance: "text",
				lifted: false,
				className: "text-visited-ia",
			},
			{
				intent: "visited",
				appearance: "text",
				lifted: true,
				className:
					"text-visited-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},

			{
				intent: "warning",
				appearance: "solid",
				className: "surface-warning-solid-ia",
			},
			{
				intent: "warning",
				appearance: "subtle",
				className: "surface-warning-subtle-ia",
			},
			{
				intent: "warning",
				appearance: ["outline", "ghost"],
				className: "surface-warning-outline-ia",
			},
			{
				intent: "warning",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-warning-toggleable",
			},
			{
				intent: "warning",
				appearance: "text",
				lifted: false,
				className: "text-warning-ia",
			},
			{
				intent: "warning",
				appearance: "text",
				lifted: true,
				className:
					"text-warning-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},

			{
				intent: "success",
				appearance: "solid",
				className: "surface-success-solid-ia",
			},
			{
				intent: "success",
				appearance: "subtle",
				className: "surface-success-subtle-ia",
			},
			{
				intent: "success",
				appearance: ["outline", "ghost"],
				className: "surface-success-outline-ia",
			},
			{
				intent: "success",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-success-toggleable"
			},
			{
				intent: "success",
				appearance: "text",
				lifted: false,
				className: "text-success-ia",
			},
			{
				intent: "success",
				appearance: "text",
				lifted: true,
				className:
					"text-success-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},

			{
				intent: "secondary",
				appearance: "solid",
				className: "surface-secondary-solid-ia",
			},
			{
				intent: "secondary",
				appearance: "subtle",
				className: "surface-secondary-subtle-ia",
			},
			{
				intent: "secondary",
				appearance: ["outline", "ghost"],
				className: "surface-secondary-outline-ia",
			},
			{
				intent: "secondary",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-secondary-toggleable"
			},
			{
				intent: "secondary",
				appearance: "text",
				lifted: false,
				className: "text-secondary-ia",
			},
			{
				intent: "secondary",
				appearance: "text",
				lifted: true,
				className:
					"text-secondary-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},

			{
				intent: "neutral",
				appearance: "solid",
				className: "surface-foreground-solid-ia",
			},
			{
				intent: "neutral",
				appearance: "subtle",
				className: "surface-foreground-subtle-ia",
			},
			{
				intent: "neutral",
				appearance: "outline",
				className: "surface-foreground-outline-ia",
			},
			{
				intent: "neutral",
				appearance: "ghost",
				className: "surface-foreground-ghost-ia",
			},
			{
				intent: "neutral",
				appearance: ["ghost", "outline"],
				effect: "bgColor",
				className: "surface-foreground-toggleable",
			},
			{
				intent: "neutral",
				appearance: "text",
				lifted: false,
				className: "text-foreground-ia",
			},
			{
				intent: "neutral",
				appearance: "text",
				lifted: true,
				className:
					"text-foreground-1-ia drop-shadow-4d hover:drop-shadow-6d active:drop-shadow-2d",
			},
		],
		defaultVariants: {
			intent: "neutral",
			size: "m",
			shape: "rounded",
			appearance: "solid",
			lifted: false,
			disabled: false,
			loading: false,
			effect: "none",
		},
	},
);

const wrapperVariants = cva(null, {
	variants: {
		loading: {
			true: "cursor-wait",
		},
		disabled: {
			true: "cursor-not-allowed",
		},
	},
});

const intentToColors = {
	primary: "primary",
	neutral: "foreground",
	secondary: "secondary",
	destructive: "error",
	warning: "warning",
	success: "success",
	visited: "visited",
} as const;

export function Toggle({
	className,
	intent,
	size,
	shape,
	children,
	appearance,
	disabled,
	loading,
	lifted,
	effect,
	onMouseDown,
	onMouseUp,
	onKeyDown,
	onKeyUp,
	...props
}: BaseToggle.Props & VariantProps<typeof toggleVariants>) {
	const effects = useWaveAnimate({
		animateClassName: `before:animate-wave-${intentToColors[intent ?? "neutral"]}`,
		onKeyDown,
		onKeyUp,
		onMouseDown,
		onMouseUp,
		disabled: appearance === "text",
	});
	return (
		<span className={wrapperVariants({loading, disabled})}>
			<BaseToggle
				ref={effects.ref}
				data-slot="button"
				className={clsx(
					toggleVariants({
						intent,
						size,
						shape,
						appearance,
						disabled,
						loading,
						lifted,
						effect,
					}),
					className,
				)}
				onKeyDown={effects.onKeyDown}
				onKeyUp={effects.onKeyUp}
				onMouseDown={effects.onMouseDown}
				onMouseUp={effects.onMouseUp}
				disabled={disabled}
				{...props}
			>
				{loading && <SpinnerIcon className="animate-spin absolute pointer-events-none" />}
				{loading ? (
					<span className="text-transparent">{children}</span>
				) : (
					children
				)}
			</BaseToggle>
		</span>
	);
}
