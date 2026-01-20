import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import type { CheckboxProps } from "../checkbox/checkbox";
import Checkbox from "../checkbox/checkbox";
import { ErrorIcon } from "../icons/error";
import { SuccessIcon } from "../icons/success";
import { WarningIcon } from "../icons/warning";
import { IntentMessage } from "../intent-message/intent-message";
import { Label } from "../label/label";
import { Popover, PopoverPortal, PopoverTrigger } from "../popover/popover";
import { HintButton } from "./hint-button";

export type CheckboxFieldProps = CheckboxProps & {
	label: string;
	message?: string;
	popoverMessage?: string;
	hint?: string;
};

const statusToIntent = {
	valid: "success",
	warning: "warning",
	invalid: "error",
} as const;

const intentToIcon = {
	success: SuccessIcon,
	warning: WarningIcon,
	error: ErrorIcon,
};

const intentMessageWrapperVariants = cva(null, {
	variants: {
		size: {
			xs: "-translate-y-[4.25px]",
			s: "-translate-y-[4px]",
			m: "-translate-y-[5.25px]",
			l: "-translate-y-[5.5px]",
			xl: "-translate-y-[7px]",
		},
	},
	defaultVariants: {
		size: "m",
	},
});

export function CheckboxField({
	hint,
	label,
	message,
	popoverMessage,
	intent,
	size,
	required,
	children,
	shape,
	id,
	...checkboxProps
}: CheckboxFieldProps) {
	const iconIntent = checkboxProps.status
		? statusToIntent[checkboxProps.status]
		: undefined;
	const intentMessage = (
		<IntentMessage
			intent={iconIntent}
			size={size}
			iconStart={iconIntent ? intentToIcon[iconIntent] : undefined}
		>
			{popoverMessage ? popoverMessage : message}
		</IntentMessage>
	);
	const checkbox = (
		<Checkbox
			size={size}
			{...checkboxProps}
			required={required}
			intent={intent}
			shape={shape}
			id={id}
		/>
	);
	return (
		<div className="grid grid-cols-[repeat(2,max-content)] gap-x-8d">
			{popoverMessage ? (
				<Popover open>
					<PopoverTrigger>{checkbox}</PopoverTrigger>
					<PopoverPortal>{intentMessage}</PopoverPortal>
				</Popover>
			) : (
				checkbox
			)}
			<div className="flex items-center gap-x-[1ch]">
				<Label
					intent={iconIntent ?? intent}
					size={size}
					required={required}
					htmlFor={id}
				>
					{label}
				</Label>
				{hint && (
					<HintButton size={size} shape={shape}>
						{hint}
					</HintButton>
				)}
				{children}
			</div>
			{message && (
				<span
					className={cn("col-start-2", intentMessageWrapperVariants({ size }))}
				>
					{intentMessage}
				</span>
			)}
		</div>
	);
}
