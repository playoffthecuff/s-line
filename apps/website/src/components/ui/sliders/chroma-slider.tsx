"use client";
import { Slider } from "@base-ui-components/react/slider";
import { useState } from "react";
import { type ColorSpace, findMaxChromaForHue } from "@/lib/utils/colors";
import { NumberField } from "../fields/number";

interface Props {
	hue: number;
	colorSpace: ColorSpace;
	initialValue: number;
	onChange?: (v: number) => void;
	achromatic?: boolean;
}

export function ChromaSlider({
	colorSpace,
	hue,
	initialValue,
	onChange,
	achromatic,
}: Props) {
	const current = findMaxChromaForHue(hue, colorSpace);
	if (achromatic) {
		current.C *= (0.75 * 0.75) / 2;
		current.L /= 1.2;
	}

	const [value, setValue] = useState(initialValue);
	const handleChange = (v: number) => {
		setValue(v);
		if (onChange) onChange(v);
	};
	return (
		<div className="flex gap-18d items-center">
			<Slider.Root
				min={0}
				max={1}
				step={0.01}
				value={value}
				onValueChange={(v) => handleChange(+v)}
			>
				<Slider.Control className="flex w-56 touch-none items-center py-2 select-none cursor-pointer">
					<Slider.Track
						className="h-2 w-full rounded select-none outline outline-1 outline-neutral-fg"
						style={{
							background: `linear-gradient(
									to right,
									${[...Array(11)].map((_, i) => `oklch(${current.L} ${(current.C * i) / 10} ${hue})`).join(", ")}
								)`,
						}}
					>
						<Slider.Thumb
							className="size-4 rounded-full bg-transparent outline outline-1 outline-neutral-fg select-none has-[:focus-visible]:outline has-[:focus-visible]:outline-2"
							style={{
								backgroundColor: `oklch(${current.L} ${current.C * value} ${hue})`,
							}}
						/>
					</Slider.Track>
				</Slider.Control>
			</Slider.Root>
			<NumberField
				onValueChange={(v) => handleChange(v ?? 0)}
				min={0}
				max={100}
				value={value}
			/>
		</div>
	);
}
