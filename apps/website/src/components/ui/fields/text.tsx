import { ErrorIcon } from "../icons/error";
import { SuccessIcon } from "../icons/success";
import { WarningIcon } from "../icons/warning";
import { TextInput, type TextInputProps } from "../input/text";
import { IntentMessage } from "../intent-message/intent-message";
import { Label } from "../label/label";
import { HintButton } from "./hint-button";

type Props = TextInputProps & {
	label: string;
	message?: string;
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

export function TextField({
	hint,
	label,
	message,
	size,
	required,
	shape,
	id,
	...inputProps
}: Props) {
	const intent = inputProps.status
		? statusToIntent[inputProps.status]
		: undefined;
	return (
		<div className="flex flex-col w-max">
			<div className="flex justify-between items-center">
				<Label intent={intent} size={size} required={required} htmlFor={id}>
					{label}
				</Label>
				{hint && <HintButton description={hint} size={size} shape={shape} />}
			</div>
			<TextInput
				size={size}
				{...inputProps}
				required={required}
				shape={shape}
				id={id}
			/>
			{message && (
				<IntentMessage
					intent={intent}
					size={size}
					iconStart={intent ? intentToIcon[intent] : undefined}
				>
					{message}
				</IntentMessage>
			)}
		</div>
	);
}
