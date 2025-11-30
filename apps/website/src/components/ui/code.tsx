"use client";

import { Toggle } from "@base-ui-components/react";
import { CopyIcon } from "./icons/copy";

type Props = {txt: string};

export function Code({txt}: Props) {
	return (
		<pre className="relative p-3 bg-neutral-7 rounded-md w-fit max-w-full min-w-40 overflow-x-auto">
			<Toggle
				aria-label="color scheme"
				className={"absolute top-4 right-4"}
				onPressedChange={() => navigator.clipboard.writeText(txt)}
				render={(p, s) => {
					return (
						<button type="button" {...p}>
							<CopyIcon copied={s.pressed} />
						</button>
					);
				}}
			/>
			<code>{txt}</code>
		</pre>
	);
}
