"use client";

import { useRef, useState } from "react";
import { CopyIcon } from "@/components/ui/icons/copy";
import { Toggle } from "../toggle/toggle";

interface Props {
	className?: string;
	animationTimeout: number;
	onClick: () => void;
}

export function CopyButton({ className, animationTimeout, onClick }: Props) {
	const [copied, setCopied] = useState(false);
	const timerIdRef = useRef<NodeJS.Timeout>(null);
	return (
		<Toggle
			className={className}
			style={{ position: "absolute" }}
			intent={"secondary"}
			appearance={"text"}
			render={(p) => (
				<button
					type="button"
					{...p}
					onClick={() => {
						console.log("hue");
						setCopied(true);
						if (timerIdRef.current) clearTimeout(timerIdRef.current);
						timerIdRef.current = setTimeout(
							() => setCopied(false),
							animationTimeout,
						);
						onClick();
					}}
				>
					<CopyIcon copied={copied} />
				</button>
			)}
		/>
	);
}
