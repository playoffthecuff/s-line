import { cn } from "@/lib/utils/cn";
import type { CheckboxProps } from "../checkbox/checkbox";
import Checkbox from "../checkbox/checkbox";
import { ErrorIcon } from "../icons/error";
import { SuccessIcon } from "../icons/success";
import { WarningIcon } from "../icons/warning";
import { IntentMessage } from "../intent-message/intent-message";
import { Label } from "../label/label";
import { HintButton } from "./hint-button";

type Props = CheckboxProps & { label: string; message?: string; hint?: string };

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

export function CheckboxField({
	hint,
	label,
	message,
	size,
	required,
	shape,
	id,
	...checkboxProps
}: Props) {
	const intent = checkboxProps.status
		? statusToIntent[checkboxProps.status]
		: undefined;
	return (
			<div className="grid grid-cols-[repeat(2,max-content)] gap-x-8d">
				<Checkbox
					size={size}
					{...checkboxProps}
					required={required}
					shape={shape}
					id={id}
				/>
				<div className="flex items-center gap-x-8d">
					<Label intent={intent} size={size} required={required} htmlFor={id}>
						{label}
					</Label>
					{hint && <HintButton description={hint} size={size} shape={shape} />}
				</div>
			{message && (
				<IntentMessage
					intent={intent}
					size={size}
					iconStart={intent ? intentToIcon[intent] : undefined}
					className={cn("col-start-2", size === "m" ? "-translate-y-2" : size === "s" ? "-translate-y-[7px]" : "-translate-y-[10px]")}
				>
					{message}
				</IntentMessage>
			)}
		</div>
	);
}
