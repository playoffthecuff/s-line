"use client";

import { Toggle } from "@base-ui-components/react";
import clsx from "clsx/lite";

export function ToggleButton({ className, ...rest }: Toggle.Props) {
	return (
		<Toggle
			className={clsx("text-neutral p-1.5 cursor-pointer", className)}
			{...rest}
		/>
	);
}
