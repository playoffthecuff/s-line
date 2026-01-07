"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { EyeCloseIcon } from "../icons/eye-close";
import { EyeOpenIcon } from "../icons/eye-open";
import { SpinnerIcon } from "../icons/spinner";
import { cn } from "@/lib/utils/cn";

const textInputVariants = cva(
	[
		"text placeholder:text-muted selection:surface-primary-solid w-full h-[2em] border-1.6 transition-all outline-none outline-transparent bg-3 hover:not-focus:bg-2 leading-none file:leading-[1.75] ps-[1ch] pe-[2em]",
	],
	{
		variants: {
			size: {
				s: "text-3d font-10d",
				m: "text-4d font-9d",
				l: "text-5d font-8d",
			},
			disabled: {
				true: "pointer-events-none saturate-50 opacity-50 contrast-60 dark:contrast-90",
			},
			loading: {
				true: "text-transparent placeholder:text-transparent pointer-events-none"
			},
			lifted: {
				true: null,
				false: null,
			},
			shape: {
				rounded: "rounded-[calc(var(--radius)*0.25em)]",
				square: "rounded-none",
				circular: "rounded-full",
			},
			status: {
				valid:
					"border-success text-success [&&]-selection:surface-success-solid focus:ring-success-2d",
				warning:
					"border-warning text-warning [&&]-selection:surface-warning-solid focus:ring-warning-2d",
				invalid:
					"border-error text-error [&&]-selection:surface-error-solid focus:ring-error-2d",
			},
		},
		compoundVariants: [{
			status: undefined,
			className: "focus:ring-primary-2d focus:border-primary border-muted invalid:border-error invalid:focus:border-error invalid:text-error-3 invalid:selection:surface-error-solid invalid:focus:ring-error-2d", 
		}],
		defaultVariants: {
			size: "m",
			lifted: false,
			shape: "rounded",
		},
	},
);
const wrapperVariants = cva(null, {
	variants: {
		size: {
			s: "text-3d font-10d",
			m: "text-4d font-9d",
			l: "text-5d font-8d",
		},
		disabled: {
			true: "cursor-not-allowed",
		},
		loading: {
			true: "cursor-wait",
		},
		shape: {
			rounded: null,
			square: null,
			circular: "rounded-full",
		},
	},
	compoundVariants: [
		{
			shape: "rounded",
			size: "s",
			className: "rounded-7d",
		},
		{
			shape: "rounded",
			size: "s",
			className: "rounded-8d",
		},
		{
			shape: "rounded",
			size: "s",
			className: "rounded-9d",
		},
	],
	defaultVariants: {
		size: "m",
		shape: "rounded",
	},
});

type TextInputType = Exclude<
	React.ComponentProps<"input">["type"],
	| "button"
	| "number"
	| "checkbox"
	| "color"
	| "time"
	| "image"
	| "file"
	| "hidden"
	| "date"
	| "datetime-local"
	| "month"
	| "week"
	| "radio"
	| "range"
	| "reset"
	| "submit"
>;

export type TextInputProps = Omit<
	React.ComponentProps<"input">,
	"type" | "size"
> &
	VariantProps<typeof textInputVariants> & { type?: TextInputType };

// TODO Add x button to delete content
// TODO Move wrapper to separate component ???
export function TextInput({
	className,
	type,
	size,
	lifted,
	shape,
	disabled,
	loading,
	status,
	...props
}: TextInputProps) {
	const [visiblePassword, setVisiblePassword] = useState(false);
	const inputType = type === "password" && visiblePassword ? "text" : type;
	return (
		<div
			className={cn(
				"flex relative items-center justify-center",
				wrapperVariants({ shape, size, disabled, loading }),
			)}
		>
			<input
				type={inputType}
				className={cn(
					textInputVariants({
						lifted,
						shape,
						size,
						status,
						disabled,
						loading,
					}),
					className,
				)}
				disabled={disabled}
				{...props}
			/>
			{type === "password" && (
				<ToggleEyeButton
					disabled={disabled}
					onClick={() => setVisiblePassword((v) => !v)}
					visible={visiblePassword}
				/>
			)}
			{loading && <SpinnerIcon className="animate-spin absolute pointer-events-none" />}
		</div>
	);
}

interface ToggleEyeProps {
	disabled?: boolean;
	visible: boolean;
	onClick: () => void;
}

const ToggleEyeButton = ({ disabled, visible, onClick }: ToggleEyeProps) => (
	<button
		type="button"
		disabled={disabled}
		className="disabled:pointer-events-none disabled:opacity-50 absolute right-0 text-muted hover:text-primary active:text-primary-3 cursor-pointer h-full aspect-1 flex items-center justify-center outline-none focus-visible:text-primary"
		onClick={onClick}
	>
		{visible ? (
			<EyeCloseIcon strokeWidth={1.6} />
		) : (
			<EyeOpenIcon strokeWidth={1.6} />
		)}
	</button>
);
