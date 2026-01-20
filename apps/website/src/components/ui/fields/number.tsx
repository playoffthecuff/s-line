import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { ErrorIcon } from "../icons/error";
import { SuccessIcon } from "../icons/success";
import { WarningIcon } from "../icons/warning";
import { NumberInput, type NumberInputProps } from "../input/number";
import { IntentMessage } from "../intent-message/intent-message";
import { Label } from "../label/label";
import { Popover, PopoverPortal, PopoverTrigger } from "../popover/popover";
import { HintButton } from "./hint-button";

export type NumberFieldProps = NumberInputProps & {
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
			xs: "mt-6d",
			s: "mt-7d",
			m: "mt-8d",
			l: "mt-9d",
			xl: "mt-10d",
		},
	},
	defaultVariants: {
		size: "m",
	},
});

export function NumberField({
	hint,
	label,
	message,
	popoverMessage,
	size,
	required,
	shape,
	id,
	...inputProps
}: NumberFieldProps) {
	const intent = inputProps.status
		? statusToIntent[inputProps.status]
		: undefined;
	const intentMessage = (
		<IntentMessage
			intent={intent}
			size={size}
			iconStart={intent ? intentToIcon[intent] : undefined}
		>
			{popoverMessage ? popoverMessage : message}
		</IntentMessage>
	);
	const input = (
		<NumberInput
			size={size}
			{...inputProps}
			required={required}
			shape={shape}
			id={id}
		/>
	);
	return (
		<div
			className={cn("flex flex-col", inputProps.width !== "fill" && "w-min")}
		>
			<div className="flex items-center justify-between me-2d">
				<Label intent={intent} size={size} required={required} htmlFor={id}>
					{label}
				</Label>
				{hint && (
					<HintButton size={size} shape={shape}>
						{hint}
					</HintButton>
				)}
			</div>
			{popoverMessage ? (
				<Popover open>
					<PopoverTrigger>{input}</PopoverTrigger>
					<PopoverPortal>{intentMessage}</PopoverPortal>
				</Popover>
			) : (
				input
			)}
			{message && (
				<span className={intentMessageWrapperVariants({ size })}>
					{intentMessage}
				</span>
			)}
		</div>
	);
}
