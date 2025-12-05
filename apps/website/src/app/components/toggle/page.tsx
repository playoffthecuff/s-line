"use client";

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle/toggle";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { DislikeIcon } from "@/components/ui/icons/dislike";
import { HeartIcon } from "@/components/ui/icons/heart";
import { LikeIcon } from "@/components/ui/icons/like";

export default function TogglePage() {
	const [pressed, setPressed] = useState(true);
	const handlePress = () => setPressed(!pressed);
	return (
		<div className="max-w-200 mx-auto p-16d flex flex-col gap-16d">
			<div>
				<h1 className="text-8d font-11d">Toggle</h1>
				<p>A user-activated, toggleable interactive component.</p>
			</div>
			<div className="relative">
				<h2 className="text-6d font-11d">Installation</h2>
				<HighlightedCode
					code="bunx @playoffthecuff/s-line@latest add toggle"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<h2 className="text-7d font-11d -mb-2">Variants:</h2>
			<div>
				<h3 className="text-5d font-11d">Size</h3>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Toggle
							size={"s"}
							effect={"fill"}
							onPressedChange={(v) => console.log("toggled to", v)}
						>
							<HeartIcon />
						</Toggle>
						Small - S
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							size={"m"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Medium - M
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							size={"l"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Large - L
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Toggle Effect</h3>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Toggle size={"m"} onPressedChange={handlePress} effect={undefined}>
							{pressed ? <LikeIcon /> : <DislikeIcon />}
						</Toggle>
						None
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							size={"m"}
							onPressedChange={handlePress}
							pressed={pressed}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Fill
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Shape</h3>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Toggle
							shape={"circular"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Circular
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							shape={"rounded"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Rounded
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							shape={"square"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Square
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Intent</h3>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"primary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					Primary
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"destructive"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Destructive
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"secondary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Secondary
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"visited"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Visited
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"warning"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Warning
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"success"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Success
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Appearance</h3>
				<div className="grid grid-cols-[repeat(4,max-content)] w-fit gap-16d">
					<span className="-mb-4">Solid</span>
					<span className="-mb-4">Subtle</span>
					<span className="-mb-4">Outline</span>
					<span className="-mb-4">Ghost</span>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"primary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"subtle"}
							intent={"primary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"outline"}
							intent={"primary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"ghost"}
							intent={"primary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"destructive"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"subtle"}
							intent={"destructive"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"outline"}
							intent={"destructive"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"ghost"}
							intent={"destructive"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"secondary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"subtle"}
							intent={"secondary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"outline"}
							intent={"secondary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"ghost"}
							intent={"secondary"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"visited"}
							appearance={"solid"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"visited"}
							appearance={"subtle"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"visited"}
							appearance={"outline"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"visited"}
							appearance={"ghost"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"warning"}
							appearance={"solid"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"warning"}
							appearance={"subtle"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"warning"}
							appearance={"outline"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"warning"}
							appearance={"ghost"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"success"}
							appearance={"solid"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"success"}
							appearance={"subtle"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"success"}
							appearance={"outline"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"success"}
							appearance={"ghost"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">Lifted</h3>
				<div className="flex flex-wrap gap-16d items-start">
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"primary"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"subtle"}
							intent={"primary"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"outline"}
							intent={"primary"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"ghost"}
							intent={"primary"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-5d font-11d">State</h3>
				<div className="flex flex-wrap gap-16d items-start">
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"primary"}
							disabled
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Disabled
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"primary"}
							loading
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Loading
					</div>
				</div>
			</div>
			<div className="mb-20 flex gap-16d flex-wrap items-center"></div>
		</div>
	);
}
