"use client";

import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx/lite";
import { SpinnerIcon } from "@/components/ui/icons/spinner";
import { useWaveAnimate } from "@/components/ui/use-wave-animate";

const buttonVariants = cva(
	"inline-flex h-[2em] min-w-[2em] media-pointer_coarse:h-[2.25em] media-pointer_coarse:min-w-[2.25em] items-center justify-center whitespace-nowrap transition-all [&_svg]:pointer-events-none cursor-pointer relative select-none before:absolute before:inset-0 before:block before:outline-0 before:content-[''] outline-none",
	{
		variants: {
			intent: {
				primary: "focus-visible:shadow-focus-primary",
				destructive: "focus-visible:shadow-focus-error",
				visited: "focus-visible:shadow-focus-visited",
				secondary: "focus-visible:shadow-focus-neutral",
				success: "focus-visible:shadow-focus-success",
				warning: "focus-visible:shadow-focus-warning",
			},
			size: {
				s: "text-3d media-pointer_coarse:text-4d font-10d ",
				m: "text-4d media-pointer_coarse:text-5d font-9d",
				l: "text-5d media-pointer_coarse:text-6d font-8d",
			},
			lifted: {
				true: null,
				false: null,
			},
			aspect: {
				square: "px-[calc(0.375em-2px)] gap-x-[0.5em]",
				normal:
					"px-[0.75em] has-[>svg:last-child]:pe-[0.5625em] has-[>svg:first-child]:ps-[0.5625em] gap-x-[0.5em]",
				wide: "px-[1em] has-[>svg:last-child]:pe-[0.8125em] has-[>svg:first-child]:ps-[0.8125em] gap-x-[0.625em]",
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
				link: "underline",
			},
			disabled: {
				false: null,
				true: "saturate-50 opacity-50 pointer-events-none",
			},
			loading: {
				false: null,
				true: "saturate-50 opacity-50 pointer-events-none",
			},
		},
		compoundVariants: [
			{
				appearance: ["outline", "solid", "subtle", "ghost"],
				lifted: true,
				className:
					"shadow-lifted-neutral hover:shadow-lifted-neutral-hover active:shadow-lifted-neutral-active",
			},
			{
				appearance: "solid",
				intent: "primary",
				className:
					"text-neutral-light bg-primary-500 hover:bg-primary-500|10l focus-visible:bg-primary-500|10l active:bg-primary-500|-5l",
			},
			{
				appearance: "subtle",
				intent: "primary",
				className: [
					"text-primary surface-primary",
					"hover:bg-primary-500/17d focus-visible:bg-primary-500/17d active:bg-primary-500/11d",
					"dark:hover:bg-primary-500/8d dark:focus-visible:bg-primary-500/8d dark:active:bg-primary-500/5d",
				],
			},
			{
				appearance: "outline",
				intent: "primary",
				className: [
					"text-primary",
					"hover:bg-primary-500/25d active:bg-primary-500/17d focus-visible:bg-primary-500/25d",
					"border-primary-600",
					"dark:hover:bg-primary-500/14d dark:active:bg-primary-500/8d dark:focus-visible:bg-primary-500/14d",
					"dark:border-primary-250 dark:hover:border-primary-250/50 dark:active:border-primary-250/25",
				],
			},
			{
				appearance: "ghost",
				intent: "primary",
				className: [
					"text-primary",
					"hover:bg-primary-500/25d active:bg-primary-500/17d focus-visible:bg-primary-500/25d",
					"dark:hover:bg-primary-500/14d dark:active:bg-primary-500/8d dark:focus-visible:bg-primary-500/14d",
				],
			},
			{
				appearance: "link",
				intent: "primary",
				className: "text-primary text-primary-interactive",
			},

			{
				appearance: "solid",
				intent: "destructive",
				className:
					"text-neutral-light bg-error-500 hover:bg-error-500|10l focus-visible:bg-error-500|10l active:bg-error-500|-5l",
			},
			{
				appearance: "subtle",
				intent: "destructive",
				className: [
					"text-error surface-error",
					"hover:bg-error-500/17d focus-visible:bg-error-500/17d active:bg-error-500/11d",
					"dark:hover:bg-error-500/8d dark:focus-visible:bg-error-500/8d dark:active:bg-error-500/5d",
				],
			},
			{
				appearance: "outline",
				intent: "destructive",
				className: [
					"text-error",
					"hover:bg-error-500/25d active:bg-error-500/17d focus-visible:bg-error-500/25d",
					"border-error-600",
					"dark:hover:bg-error-500/14d dark:active:bg-error-500/8d dark:focus-visible:bg-error-500/14d",
					"dark:border-error-250 dark:hover:border-error-250/50 active:hover:border-error-250/25",
				],
			},
			{
				appearance: "ghost",
				intent: "destructive",
				className: [
					"text-error",
					"hover:bg-error-500/25d active:bg-error-500/17d focus-visible:bg-error-500/25d",
					"dark:hover:bg-error-500/14d dark:active:bg-error-500/8d dark:focus-visible:bg-error-500/14d",
				],
			},
			{
				appearance: "link",
				intent: "destructive",
				className: "text-error text-error-interactive",
			},

			{
				appearance: "solid",
				intent: "visited",
				className:
					"text-neutral-light bg-visited-500 hover:bg-visited-500|10l focus-visible:bg-visited-500|10l active:bg-visited-500|-5l",
			},
			{
				appearance: "subtle",
				intent: "visited",
				className: [
					[
						"text-visited surface-visited",
						"hover:bg-visited-500/17d focus-visible:bg-visited-500/17d active:bg-visited-500/11d",
						"dark:hover:bg-visited-500/8d dark:focus-visible:bg-visited-500/8d dark:active:bg-visited-500/5d",
					],
				],
			},
			{
				appearance: "outline",
				intent: "visited",
				className: [
					"text-visited",
					"hover:bg-visited-500/25d active:bg-visited-500/17d focus-visible:bg-visited-500/25d",
					"border-visited-600",
					"dark:hover:bg-visited-500/14d dark:active:bg-visited-500/8d dark:focus-visible:bg-visited-500/14d",
					"dark:border-visited-250 dark:hover:border-visited-250/50 active:hover:border-visited-250/25",
				],
			},
			{
				appearance: "ghost",
				intent: "visited",
				className: [
					"text-visited",
					"hover:bg-visited-500/25d active:bg-visited-500/17d focus-visible:bg-visited-500/25d",
					"dark:hover:bg-visited-500/14d dark:active:bg-visited-500/8d dark:focus-visible:bg-visited-500/14d",
				],
			},
			{
				appearance: "link",
				intent: "visited",
				className: "text-visited text-visited-interactive",
			},

			{
				appearance: "solid",
				intent: "warning",
				className:
					"text-neutral-dark bg-warning-300 hover:bg-warning-300|10l focus-visible:bg-warning-300|10l active:bg-warning-300|-5l",
			},
			{
				appearance: "subtle",
				intent: "warning",
				className: [
					"text-warning surface-warning",
					"hover:bg-warning-500/17d focus-visible:bg-warning-500/17d active:bg-warning-500/11d",
					"dark:hover:bg-warning-500/8d dark:focus-visible:bg-warning-500/8d dark:active:bg-warning-500/5d",
				],
			},
			{
				appearance: "outline",
				intent: "warning",
				className: [
					"text-warning",
					"hover:bg-warning-500/25d active:bg-warning-500/17d focus-visible:bg-warning-500/25d",
					"border-warning-600",
					"dark:hover:bg-warning-500/14d dark:active:bg-warning-500/8d dark:focus-visible:bg-warning-500/14d",
					"dark:border-warning-250 dark:hover:border-warning-250/50 dark:active:border-warning-250/25",
				],
			},
			{
				appearance: "ghost",
				intent: "warning",
				className: [
					"text-warning",
					"hover:bg-warning-500/25d active:bg-warning-500/17d focus-visible:bg-warning-500/25d",
					"dark:hover:bg-warning-500/14d dark:active:bg-warning-500/8d dark:focus-visible:bg-warning-500/14d",
				],
			},
			{
				appearance: "link",
				intent: "warning",
				className: "text-warning text-warning-interactive",
			},

			{
				appearance: "solid",
				intent: "success",
				className:
					"text-neutral-dark bg-success-350 hover:bg-success-350|10l focus-visible:bg-success-350|10l active:bg-success-350|-5l",
			},
			{
				appearance: "subtle",
				intent: "success",
				className: [
					"text-success surface-neutral",
					"hover:bg-success-500/17d focus-visible:bg-success-500/17d active:bg-success-500/11d",
					"dark:bg-success-500/14d dark:hover:bg-success-500/8d dark:focus-visible:bg-success-500/8d dark:active:bg-success-500/5d",
				],
			},
			{
				appearance: "outline",
				intent: "success",
				className: [
					"text-success",
					"hover:bg-success-500/25d active:bg-success-500/17d focus-visible:bg-success-500/17d",
					"border-success-600",
					"dark:hover:bg-success-500/14d dark:active:bg-success-500/8d dark:focus-visible:bg-success-500/8d",
					"dark:border-success-250 dark:hover:border-success-250/50 dark:active:border-success-250/25",
				],
			},
			{
				appearance: "ghost",
				intent: "success",
				className: [
					"text-success",
					"hover:bg-success-500/25d active:bg-success-500/25d focus-visible:bg-success-500/17d",
					"dark:hover:bg-success-500/14d dark:active:bg-success-500/8d dark:focus-visible:bg-success-500/14d",
				],
			},
			{
				appearance: "link",
				intent: "success",
				className: "text-success text-success-interactive",
			},

			{
				appearance: "solid",
				intent: "secondary",
				className:
					"text-neutral-light bg-neutral-500 hover:bg-neutral-500|10l focus-visible:bg-neutral-500|10l active:bg-neutral-500|-5l",
			},
			{
				appearance: "subtle",
				intent: "secondary",
				className: [
					"text-muted surface-neutral",
					"hover:bg-neutral-500/17d focus-visible:bg-neutral-500/17d active:bg-neutral-500/11d",
					"dark:hover:bg-neutral-500/8d dark:focus-visible:bg-neutral-500/8d dark:active:bg-neutral-500/5d",
				],
			},
			{
				appearance: "outline",
				intent: "secondary",
				className: [
					"text-muted",
					"hover:bg-neutral-500/25d active:bg-neutral-500/17d focus-visible:bg-neutral-500/17d",
					"border-neutral-600",
					"dark:hover:bg-neutral-500/14d dark:active:bg-neutral-500/8d dark:focus-visible:bg-neutral-500/5d",
					"dark:border-neutral-250 dark:hover:border-neutral-250/50 dark:active:border-neutral-250/25",
				],
			},
			{
				appearance: "ghost",
				intent: "secondary",
				className: [
					"text-muted",
					"hover:bg-neutral-500/25d active:bg-neutral-500/17d focus-visible:bg-neutral-500/25d",
					"dark:hover:bg-neutral-500/14d dark:active:bg-neutral-500/8d dark:focus-visible:bg-neutral-500/14d",
				],
			},
			{
				appearance: "link",
				intent: "secondary",
				className: "text-muted text-muted-interactive",
			},
		],
		defaultVariants: {
			intent: "primary",
			size: "m",
			shape: "rounded",
			appearance: "solid",
			aspect: "normal",
		},
	},
);

const intentColors = {
	primary: "primary",
	secondary: "neutral",
	destructive: "error",
	warning: "warning",
	success: "success",
	visited: "visited",
} as const;

export function Button({
	className,
	intent,
	size,
	aspect,
	shape,
	children,
	appearance,
	disabled,
	loading,
	lifted,
	onMouseDown,
	onMouseUp,
	onKeyDown,
	onKeyUp,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	const effects = useWaveAnimate({
		animateClassName: `before:animate-wave-${intentColors[intent ?? "primary"]}`,
		disabled: appearance === "link",
		onKeyDown,
		onKeyUp,
		onMouseDown,
		onMouseUp,
	});
	return (
		<button
			ref={effects.ref}
			data-slot="button"
			className={clsx(
				buttonVariants({
					intent,
					size,
					aspect: aspect,
					shape,
					appearance,
					disabled,
					loading,
					lifted: lifted,
				}),
				className,
			)}
			onKeyDown={effects.onKeyDown}
			onKeyUp={effects.onKeyUp}
			onMouseDown={effects.onMouseDown}
			onMouseUp={effects.onMouseUp}
			disabled={disabled || !!loading}
			{...props}
		>
			{loading && <SpinnerIcon className="animate-spin absolute" />}
			{loading ? (
				<span className="text-transparent">{children}</span>
			) : (
				children
			)}
		</button>
	);
}
