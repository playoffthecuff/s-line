"use client";

import { useState } from "react";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { DislikeIcon } from "@/components/ui/icons/dislike";
import { HeartIcon } from "@/components/ui/icons/heart";
import { LikeIcon } from "@/components/ui/icons/like";
import { SmartphoneIcon } from "@/components/ui/icons/smartphone";
import { Toggle } from "@/components/ui/toggle/toggle";
import { Title } from "@/components/ui/typography/title";

export default function TogglePage() {
	const [pressed, setPressed] = useState(true);
	const handlePress = () => setPressed(!pressed);
	return (
		<div className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d [&&]-pb-20">
			<div>
				<Title>Toggle</Title>
				<p>A user-activated, toggleable interactive component.</p>
			</div>
			<div>
				<Title size={2}>Installation</Title>
				<HighlightedCode
					code="bunx @playoffthecuff/s3-line@latest add toggle"
					language="yaml"
					lineNumbers={false}
				/>
			</div>
			<hr className="mt-16d mb-12d" />
			<Title size={2}>Variants:</Title>
			<div>
				<Title size={3}>Size</Title>
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
				<Title size={3}>Toggle Effect</Title>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Toggle
							size={"m"}
							onPressedChange={handlePress}
							effect={"none"}
							pressed={pressed}
						>
							{pressed ? <LikeIcon /> : <DislikeIcon />}
						</Toggle>
						None
					</div>
					<div className="flex gap-10d items-center">
						<div className="flex">
							<Toggle
								size={"m"}
								onPressedChange={handlePress}
								effect={"bgColor"}
								appearance={"outline"}
								pressed={pressed}
							>
								<SmartphoneIcon />
							</Toggle>
						</div>
						BgColor
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
				<Title size={3}>Shape</Title>
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
				<Title size={3}>Intent</Title>
				<div className="flex flex-wrap gap-16d items-center">
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"neutral"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Neutral
					</div>
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
				<Title size={3}>Appearance</Title>
				<div className="grid grid-cols-[repeat(5,max-content)] w-fit gap-16d">
					<span className="-mb-4">Solid</span>
					<span className="-mb-4">Subtle</span>
					<span className="-mb-4">Outline</span>
					<span className="-mb-4">Ghost</span>
					<span className="-mb-4">Text</span>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"neutral"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"subtle"}
							intent={"neutral"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"outline"}
							intent={"neutral"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"ghost"}
							intent={"neutral"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"neutral"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
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
							appearance={"text"}
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
							appearance={"text"}
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
							appearance={"text"}
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
							intent={"visited"}
							appearance={"text"}
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
							intent={"warning"}
							appearance={"text"}
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
					<div className="flex gap-10d items-center">
						<Toggle
							intent={"success"}
							appearance={"text"}
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<Title size={3} className="col-span-5 -mb-4">Lifted</Title>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"neutral"}
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
							intent={"neutral"}
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
							intent={"neutral"}
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
							intent={"neutral"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"neutral"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
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
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
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
							appearance={"solid"}
							intent={"secondary"}
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
							intent={"secondary"}
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
							intent={"secondary"}
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
							intent={"secondary"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"secondary"}
							lifted
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
							intent={"destructive"}
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
							intent={"destructive"}
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
							intent={"destructive"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"destructive"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"warning"}
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
							intent={"warning"}
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
							intent={"warning"}
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
							intent={"warning"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"warning"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"success"}
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
							intent={"success"}
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
							intent={"success"}
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
							intent={"success"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"success"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>

					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"solid"}
							intent={"visited"}
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
							intent={"visited"}
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
							intent={"visited"}
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
							intent={"visited"}
							lifted
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance={"text"}
							intent={"visited"}
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
				<Title size={3}>State</Title>
				<div className="flex flex-wrap gap-16d items-start">
					<div className="flex gap-10d items-center">
						<Toggle
							appearance="solid"
							intent={"neutral"}
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
							appearance="solid"
							intent={"neutral"}
							loading
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Loading
					</div>
					<div className="flex gap-10d items-center">
						<Toggle
							appearance="solid"
							intent={"neutral"}
							loading
							disabled
							onPressedChange={(v) => console.log("toggled to", v)}
							effect={"fill"}
						>
							<HeartIcon />
						</Toggle>
						Disabled & Loading
					</div>
				</div>
			</div>
		</div>
	);
}
