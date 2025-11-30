import { NumberField as BaseNumberField } from "@base-ui-components/react/number-field";
import * as React from "react";

export function NumberField(props: BaseNumberField.Root.Props) {
	const id = React.useId();
	return (
		<BaseNumberField.Root
			id={id}
			className="flex flex-col items-start gap-4d"
			{...props}
		>
			<BaseNumberField.ScrubArea className="cursor-ew-resize">
				<BaseNumberField.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
					<CursorGrowIcon />
				</BaseNumberField.ScrubAreaCursor>
			</BaseNumberField.ScrubArea>

			<BaseNumberField.Group className="flex">
				<BaseNumberField.Decrement className="flex size-19d items-center justify-center rounded-l-8d bg-neutral-250 dark:bg-neutral-350 text-neutral-850 select-none cursor-pointer">
					<MinusIcon />
				</BaseNumberField.Decrement>
				<BaseNumberField.Input className="h-19d w-22d border-t border-b border-neutral-350 text-center tabular-nums focus:z-1 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary" />
				<BaseNumberField.Increment className="flex size-19d items-center justify-center rounded-r-8d bg-neutral-250 dark:bg-neutral-350 text-neutral-850 select-none cursor-pointer">
					<PlusIcon />
				</BaseNumberField.Increment>
			</BaseNumberField.Group>
		</BaseNumberField.Root>
	);
}

function CursorGrowIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			width="26"
			height="14"
			viewBox="0 0 24 14"
			fill="black"
			stroke="white"
			xmlns="http://www.w3.org/2000/svg"
			role="presentation"
			{...props}
		>
			<path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
		</svg>
	);
}

function PlusIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			stroke="currentcolor"
			strokeWidth="1.6"
			xmlns="http://www.w3.org/2000/svg"
			role="presentation"
			{...props}
		>
			<path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
		</svg>
	);
}

function MinusIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			stroke="currentcolor"
			strokeWidth="1.6"
			xmlns="http://www.w3.org/2000/svg"
			role="presentation"
			{...props}
		>
			<path d="M0 5H10" />
		</svg>
	);
}
