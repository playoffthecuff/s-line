"use client";
import { Slider } from "@base-ui/react/slider";
import { useState } from "react";
import { type ColorSpace, findMaxChromaForHue } from "@/lib/utils/colors";
import { NumberField } from "../fields/s/number";
import css from "./slider.module.css";
import { cn } from "@/lib/utils/cn";

interface Props {
	initialValue: number;
	colorSpace?: ColorSpace;
	onChange?: (v: number) => void;
}

export function OklchSlider({
	initialValue,
	onChange,
	colorSpace = "srgb",
}: Props) {
	const [value, setValue] = useState(initialValue);
	const handleChange = (v: number) => {
		setValue(v);
		if (onChange) onChange(v);
	};
	const current = findMaxChromaForHue(value, colorSpace);
	return (
		<div className="flex items-center gap-18d">
			<Slider.Root min={0} max={359} value={value} onValueChange={handleChange}>
				<Slider.Control className="flex w-56 touch-none items-center py-2 select-none cursor-pointer">
					<Slider.Track
						className={cn(
							"h-2 w-full rounded select-none outline outline-1 outline-gray-fg",
							css["oklch-gradient"],
						)}
					>
						<Slider.Thumb
							className="size-4 rounded-full bg-transparent outline outline-1 outline-gray-fg select-none has-[:focus-visible]:outline has-[:focus-visible]:outline-2"
							style={{
								backgroundColor: `oklch(${current.L} ${current.C} ${value})`,
							}}
						/>
					</Slider.Track>
				</Slider.Control>
			</Slider.Root>
			<NumberField
				onValueChange={(v) => handleChange(v ?? 0)}
				min={0}
				max={359}
				value={value}
			/>
		</div>
	);
}
