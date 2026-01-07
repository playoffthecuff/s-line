import { ErrorIcon } from "../icons/error";
import { SuccessIcon } from "../icons/success";
import { WarningIcon } from "../icons/warning";
import { IntentMessage } from "../intent-message/intent-message";
import { Label } from "../label/label";
import { Slider, type SliderProps } from "../slider/slider";
import { HintButton } from "./hint-button";

type Props = SliderProps & { label: string; message?: string; hint?: string };

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

export function SliderField({
	hint,
	label,
	message,
	shape,
	size,
	id,
	...selectProps
}: Props) {
	const intent = selectProps.status
		? statusToIntent[selectProps.status]
		: undefined;
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between">
				<Label intent={intent} size={size} htmlFor={id}>
					{label}
				</Label>
				{hint && <HintButton description={hint} size={size} shape={shape} />}
			</div>
				<Slider {...selectProps} id={id} shape={shape} size={size} />
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
