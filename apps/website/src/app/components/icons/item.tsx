"use client";

import type { ReactNode } from "react";
import { CopyButton } from "@/components/ui/buttons/copy";
import { Popover } from "@/components/ui/popover/popover";

export const IconWrapper = ({
	children,
	code,
	title,
	description,
}: {
	children: ReactNode;
	code: string;
	title: string;
	description: string;
}) => (
	<Popover
		content={
			<div>
				<div className="flex items-center justify-between">
					<p>{description}</p>
					<CopyButton onClick={() => navigator.clipboard.writeText(code)} />
				</div>
				<code className="font-mono block bg-2 px-12d py-4d rounded-6d">
					{code}
				</code>
			</div>
		}
		title={title}
	>
		{children}
	</Popover>
);
