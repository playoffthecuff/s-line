"use client";

import { useTheme } from "next-themes";
import { useMemo, useState } from "react";
import { ErrorIcon } from "@/components/ui/icons/error";
import { HelpIcon } from "@/components/ui/icons/help";
import { InfoIcon } from "@/components/ui/icons/info";
import { SparkleIcon } from "@/components/ui/icons/sparkle";
import { SuccessIcon } from "@/components/ui/icons/success";
import { WarningIcon } from "@/components/ui/icons/warning";
import CheckboxField from "@/components/ui/checkbox-field";
import { HighlightedCode } from "@/components/ui/highlighted-code";
import { ChromaSlider } from "@/components/ui/sliders/chroma-slider";
import NumberSlider from "@/components/ui/sliders/number-slider";
import { OklchSlider } from "@/components/ui/sliders/oklch-slider";
import {
	type ColorSpace,
	createLightness,
	replaceChromaInOklchString,
} from "@/lib/utils/colors";
import { createUnoConfig } from "@/lib/utils/uno-config";
import { Card } from "./card";
import { useAchromaticPalette, useChromaticPalette, useNormalizedChromaticPalettes } from "./use-palette";

const initialValues = {
	coldWarmK: 1,
	colorSpace: "srgb" as ColorSpace,
	maxBrightness: 1,
	minBrightness: 0,
	neutralHue: 142,
	neutralChroma: 0.5,
	primaryHue: 264,
	primaryChroma: 1,
	successHue: 142,
	successChroma: 1,
	warningHue: 110,
	warningChroma: 1,
	errorHue: 29,
	errorChroma: 1,
	visitedHue: 328,
	visitedChroma: 1,
	spacingSize: 1,
	radius: 1,
	textSize: 1,
};

export default function ThemeEditorPage() {
	const { theme } = useTheme();
	const [coldWarmK, setColdWarmK] = useState(initialValues.coldWarmK);
	const [minBrightness, setMinBrightness] = useState(
		initialValues.minBrightness,
	);
	const [maxBrightness, setMaxBrightness] = useState(
		initialValues.maxBrightness,
	);
	const [primaryHue, setPrimaryHue] = useState(initialValues.primaryHue);
	const [primaryChroma, setPrimaryChroma] = useState(
		initialValues.primaryChroma,
	);
	const [neutralHue, setNeutralHue] = useState(initialValues.neutralHue);
	const [neutralChroma, setNeutralChroma] = useState(
		initialValues.neutralChroma,
	);
	const [successHue, setSuccessHue] = useState(initialValues.successHue);
	const [successChroma, setSuccessChroma] = useState(
		initialValues.successChroma,
	);
	const [warningHue, setWarningHue] = useState(initialValues.warningHue);
	const [warningChroma, setWarningChroma] = useState(
		initialValues.warningChroma,
	);
	const [visitedHue, setVisitedHue] = useState(initialValues.visitedHue);
	const [visitedChroma, setVisitedChroma] = useState(
		initialValues.visitedChroma,
	);
	const [errorHue, setErrorHue] = useState(initialValues.errorHue);
	const [errorChroma, setErrorChroma] = useState(initialValues.visitedChroma);
	const [colorSpace, setColorSpace] = useState(initialValues.colorSpace);
	const [spacingSize, setSpacingSize] = useState(initialValues.spacingSize);
	const [radius, setRadius] = useState(initialValues.radius);
	const [textSize, setTextSize] = useState(initialValues.textSize);
	const [key, setKey] = useState(0);
	const lightness = useMemo(
		() => createLightness(minBrightness, maxBrightness),
		[minBrightness, maxBrightness],
	);
	const paletteDeps = [lightness, coldWarmK, colorSpace] as const;
	const neutralPalette = useAchromaticPalette(
		"neutral",
		neutralHue,
		neutralChroma,
		...paletteDeps,
	);
	const successPalette = useChromaticPalette(
		"success",
		successHue,
		successChroma,
		...paletteDeps,
	);
	const warningPalette = useChromaticPalette(
		"warning",
		warningHue,
		warningChroma,
		...paletteDeps,
	);
	const errorPalette = useChromaticPalette(
		"error",
		errorHue,
		errorChroma,
		...paletteDeps,
	);
	const primaryPalette = useChromaticPalette(
		"primary",
		primaryHue,
		primaryChroma,
		...paletteDeps,
	);
	const visitedPalette = useChromaticPalette(
		"visited",
		visitedHue,
		visitedChroma,
		...paletteDeps,
	);
	const normalizedPalettes = useNormalizedChromaticPalettes([{hue: primaryHue, prefix: "primary", chromaK: primaryChroma}, {hue: successHue, prefix: "success", chromaK: successChroma}, {hue: warningHue, prefix: "warning", chromaK: warningChroma}, {hue: errorHue, prefix: "error", chromaK: errorChroma}, {hue: visitedHue, prefix: "visited", chromaK: visitedChroma}], lightness, coldWarmK, colorSpace);
	const allPalettes = neutralPalette.concat(
		successPalette,
		warningPalette,
		errorPalette,
		visitedPalette,
		primaryPalette,
	);
	
	return (
		<main
			className="font-8d flex gap-20d"
			style={{
				backgroundColor:
					theme === "dark" ? neutralPalette[12][1] : neutralPalette[3][1],
				fontSize: `calc(${spacingSize * 2 ** (0.25 * (textSize - 1))}rem)`,
			}}
			suppressHydrationWarning
		>
			<div
				className="flex flex-col gap-8d min-w-100 sticky top-12 overflow-x-hidden overflow-y-auto"
				style={{
					backgroundColor:
						theme === "dark" ? neutralPalette[14][1] : neutralPalette[1][1],
					height: "calc(100dvh - 3rem)",
				}}
			>
				<div className="py-12d px-16d flex flex-col gap-10d">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Primary Color</label>
					<OklchSlider
						initialValue={initialValues.primaryHue}
						onChange={(v) => setPrimaryHue(+v)}
						colorSpace={colorSpace}
						key={key}
					/>
					<ChromaSlider
						hue={primaryHue}
						colorSpace={colorSpace}
						initialValue={initialValues.primaryChroma}
						onChange={(v) => setPrimaryChroma(v)}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Success Color</label>
					<OklchSlider
						initialValue={initialValues.successHue}
						onChange={(v) => setSuccessHue(+v)}
						colorSpace={colorSpace}
						key={key}
					/>
					<ChromaSlider
						hue={successHue}
						colorSpace={colorSpace}
						initialValue={initialValues.successChroma}
						onChange={(v) => setSuccessChroma(v)}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Error Color</label>
					<OklchSlider
						initialValue={initialValues.errorHue}
						onChange={(v) => setErrorHue(+v)}
						colorSpace={colorSpace}
						key={key}
					/>
					<ChromaSlider
						hue={errorHue}
						colorSpace={colorSpace}
						initialValue={initialValues.errorChroma}
						onChange={(v) => setErrorChroma(v)}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Warning Color</label>
					<OklchSlider
						initialValue={initialValues.warningHue}
						onChange={(v) => setWarningHue(+v)}
						colorSpace={colorSpace}
						key={key}
					/>
					<ChromaSlider
						hue={warningHue}
						colorSpace={colorSpace}
						initialValue={initialValues.warningChroma}
						onChange={(v) => setWarningChroma(v)}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Neutral Color</label>
					<OklchSlider
						initialValue={initialValues.neutralHue}
						onChange={(v) => setNeutralHue(+v)}
						colorSpace={colorSpace}
						key={key}
					/>
					<ChromaSlider
						hue={neutralHue}
						colorSpace={colorSpace}
						initialValue={initialValues.neutralChroma}
						onChange={(v) => setNeutralChroma(v)}
						achromatic
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Visited Color</label>
					<OklchSlider
						initialValue={initialValues.visitedHue}
						onChange={(v) => setVisitedHue(+v)}
						colorSpace={colorSpace}
						key={key}
					/>
					<ChromaSlider
						hue={visitedHue}
						colorSpace={colorSpace}
						initialValue={initialValues.visitedChroma}
						onChange={(v) => setVisitedChroma(v)}
					/>
				</div>
				<div className="flex gap-16d py-12d px-16d w-fit">
					<CheckboxField
						defaultChecked={initialValues.colorSpace === "p3"}
						onCheckedChange={(v) => setColorSpace((v && "p3") || "srgb")}
						label="Wide Gamut (P3)"
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Cold-Warm Asymmetry</label>
					<NumberSlider
						initialValue={initialValues.coldWarmK}
						onChange={(v) => setColdWarmK(+v)}
						min={0}
						max={2}
						step={0.2}
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Minimum Brightness</label>
					<NumberSlider
						initialValue={initialValues.minBrightness}
						onChange={(v) => setMinBrightness(+v)}
						min={0}
						max={0.25}
						step={0.025}
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Maximum Brightness</label>
					<NumberSlider
						initialValue={initialValues.maxBrightness}
						onChange={(v) => setMaxBrightness(+v)}
						min={0.75}
						max={1}
						step={0.025}
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Spacing</label>
					<NumberSlider
						initialValue={initialValues.spacingSize}
						onChange={(v) => setSpacingSize(+v)}
						min={0.5}
						max={2}
						step={0.1}
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Radius</label>
					<NumberSlider
						initialValue={initialValues.radius}
						onChange={(v) => setRadius(+v)}
						min={0}
						max={2}
						step={0.1}
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d w-fit">
					{/** biome-ignore lint/a11y/noLabelWithoutControl: '' */}
					<label>Font Size</label>
					<NumberSlider
						initialValue={initialValues.textSize}
						onChange={(v) => setTextSize(+v)}
						min={0.4}
						max={1.6}
						step={0.1}
						key={key}
					/>
				</div>
				<div className="py-12d px-16d flex flex-col gap-10d">
					<button
						type="button"
						className="inline-flex cursor-pointer items-center justify-center gap-12d rounded-6d transition-all leading-[1] px-13d py-12d"
						style={{
							backgroundColor:
								theme === "dark" ? neutralPalette[6][1] : neutralPalette[5][1],
							color: "var(--colors-neutral-850)",
							borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
						}}
						onClick={() => {
							setColdWarmK(initialValues.coldWarmK);
							setColorSpace(initialValues.colorSpace);
							setErrorHue(initialValues.errorHue);
							setMaxBrightness(initialValues.maxBrightness);
							setMinBrightness(initialValues.minBrightness);
							setNeutralHue(initialValues.neutralHue);
							setPrimaryHue(initialValues.primaryHue);
							setSpacingSize(initialValues.spacingSize);
							setSuccessHue(initialValues.successHue);
							setWarningHue(initialValues.warningHue);
							setKey((v) => v + 1);
						}}
					>
						Reset
					</button>
				</div>
			</div>
			<div className="p-16d self-start overflow-y-auto flex-grow" style={{height: "calc(100vh - 48px)"}}>
				<div className="flex gap-16d flex-wrap max-w-200 justify-center">
					<div className="w-full flex flex-col gap-14d items-center">
						<div className="flex items-end w-90 justify-between">
							<h1
								className="text-8d font-11d leading-[1]"
								style={{ fontSize: spacingSize * textSize * 2 ** 2 * 8 }}
							>
								Heading 1
							</h1>
							<h6
								className="text-3d font-11d leading-[1.5]"
								style={{ fontSize: spacingSize * textSize * 2 ** 0.75 * 8 }}
							>
								Heading 6
							</h6>
						</div>
						<div className="flex items-end w-90 justify-between">
							<h2
								className="text-7d font-11d leading-[1]"
								style={{ fontSize: spacingSize * textSize * 2 ** 1.75 * 8 }}
							>
								Heading 2
							</h2>
							<h5
								className="text-4d font-11d leading-[1.225]"
								style={{ fontSize: spacingSize * textSize * 2 ** 1 * 8 }}
							>
								Heading 5
							</h5>
						</div>
						<div className="flex items-end w-90 justify-between">
							<h3
								className="text-6d font-11d leading-[1]"
								style={{ fontSize: spacingSize * textSize * 2 ** 1.5 * 8 }}
							>
								Heading 3
							</h3>
							<h4
								className="text-5d font-11d leading-[1.025]"
								style={{ fontSize: spacingSize * textSize * 2 ** 1.25 * 8 }}
							>
								Heading 4
							</h4>
						</div>
					</div>
					<Card
						palette={primaryPalette}
						borderRadius={radius * spacingSize * 2 ** 2.75}
					>
						<div
							className="flex flex-col gap-15d p-15d"
							style={{
								backgroundColor:
									theme === "dark" ? neutralPalette[13][1] : neutralPalette[2][1],
							}}
						>
							<div className="flex justify-between">
								<p
									className="flex gap-8d items-center"
									style={{
										color:
											theme === "dark"
												? primaryPalette[5][1]
												: primaryPalette[10][1],
									}}
								>
									<HelpIcon />
									<span>Message</span>
								</p>
								<a
									href="./"
									className="underline cursor-pointer"
									style={{
										color:
											theme === "dark"
												? primaryPalette[5][1]
												: primaryPalette[10][1],
									}}
								>
									Link
								</a>
							</div>
							<button
								type="button"
								className="inline-flex items-center justify-center gap-11d rounded-6d transition-all leading-[1] px-14d py-12d"
								style={{
									backgroundColor: primaryPalette[10][1],
									color: "var(--colors-neutral-50)",
									borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
								}}
							>
								Button
							</button>
						</div>
						<div
							className="flex flex-col gap-14d p-14d"
							style={{
								backgroundColor:
									theme === "dark"
										? replaceChromaInOklchString(primaryPalette[12][1], "0.04")
										: replaceChromaInOklchString(primaryPalette[1][1], "0.03"),
							}}
						>
							<p
								className="flex gap-16d items-center leading-none"
								style={{
									color:
										theme === "dark"
											? neutralPalette[2][1]
											: neutralPalette[19][1],
								}}
							>
								<span>Text</span>
							</p>
							<p className="flex gap-16d items-center leading-none">
								<span
									style={{
										color:
											theme === "dark"
												? neutralPalette[7][1]
												: neutralPalette[11][1],
									}}
								>
									Muted text
								</span>
							</p>
						</div>
					</Card>
					<Card
						palette={visitedPalette}
						borderRadius={radius * spacingSize * 2 ** 2.75}
					>
						<div
							className="flex flex-col gap-15d p-15d"
							style={{
								backgroundColor:
									theme === "dark" ? neutralPalette[13][1] : neutralPalette[2][1],
							}}
						>
							<div className="flex justify-between">
								<p
									className="flex gap-8d items-center"
									style={{
										color:
											theme === "dark"
												? visitedPalette[5][1]
												: visitedPalette[10][1],
									}}
								>
									<SparkleIcon />
									<span>Message</span>
								</p>
								<a
									href="./"
									className="underline cursor-pointer"
									style={{
										color:
											theme === "dark"
												? visitedPalette[5][1]
												: visitedPalette[10][1],
									}}
								>
									Visited
								</a>
							</div>
							<button
								type="button"
								className="inline-flex items-center justify-center gap-11d rounded-6d transition-all leading-[1] px-14d py-12d"
								style={{
									backgroundColor: visitedPalette[10][1],
									color: "var(--colors-neutral-50)",
									borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
								}}
							>
								Button
							</button>
						</div>
						<div
							className="flex flex-col gap-14d p-14d"
							style={{
								backgroundColor:
									theme === "dark"
										? replaceChromaInOklchString(visitedPalette[12][1], "0.04")
										: replaceChromaInOklchString(visitedPalette[1][1], "0.03"),
							}}
						>
							<p
								className="flex gap-16d items-center leading-none"
								style={{
									color:
										theme === "dark"
											? neutralPalette[2][1]
											: neutralPalette[19][1],
								}}
							>
								<span>Text</span>
							</p>
							<p className="flex gap-16d items-center leading-none">
								<span
									style={{
										color:
											theme === "dark"
												? neutralPalette[7][1]
												: neutralPalette[11][1],
									}}
								>
									Muted text
								</span>
							</p>
						</div>
					</Card>
					<Card
						palette={neutralPalette}
						borderRadius={radius * spacingSize * 2 ** 2.75}
					>
						<div
							className="flex flex-col gap-15d p-15d"
							style={{
								backgroundColor:
									theme === "dark" ? neutralPalette[13][1] : neutralPalette[2][1],
							}}
						>
							<p
								className="flex gap-8d items-center"
								style={{
									color:
										theme === "dark"
											? neutralPalette[5][1]
											: neutralPalette[10][1],
								}}
							>
								<InfoIcon />
								<span>Message</span>
							</p>
							<button
								type="button"
								className="inline-flex items-center justify-center gap-12d rounded-6d transition-all leading-[1] px-13d py-12d"
								style={{
									backgroundColor:
										theme === "dark"
											? neutralPalette[7][1]
											: neutralPalette[5][1],
									color: "var(--colors-neutral-850)",
									borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
								}}
							>
								Button
							</button>
						</div>
						<div
							className="flex flex-col gap-14d p-14d"
							style={{
								backgroundColor:
									theme === "dark"
										? neutralPalette[13][1]
										: neutralPalette[2][1],
							}}
						>
							<p
								className="flex gap-16d items-center leading-none"
								style={{
									color:
										theme === "dark"
											? neutralPalette[2][1]
											: neutralPalette[19][1],
								}}
							>
								<span>Text</span>
							</p>
							<p className="flex gap-16d items-center leading-none">
								<span
									style={{
										color:
											theme === "dark"
												? neutralPalette[7][1]
												: neutralPalette[11][1],
									}}
								>
									Muted text
								</span>
							</p>
						</div>
					</Card>
					<Card
						palette={successPalette}
						borderRadius={radius * spacingSize * 2 ** 2.75}
					>
						<div
							className="flex flex-col gap-15d p-15d"
							style={{
								backgroundColor:
									theme === "dark" ? neutralPalette[13][1] : neutralPalette[2][1],
							}}
						>
							<div className="flex gap-16d">
								<p
									className="flex gap-8d items-center"
									style={{
										color:
											theme === "dark"
												? successPalette[5][1]
												: successPalette[10][1],
									}}
								>
									<SuccessIcon />
									<span>Message</span>
								</p>
							</div>
							<button
								type="button"
								className="inline-flex items-center justify-center gap-11d rounded-6d transition-all leading-[1] px-14d py-12d"
								style={{
									backgroundColor: successPalette[10][1],
									color: "var(--colors-neutral-50)",
									borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
								}}
							>
								Button
							</button>
						</div>
						<div
							className="flex flex-col gap-14d p-14d"
							style={{
								backgroundColor:
									theme === "dark"
										? replaceChromaInOklchString(successPalette[12][1], "0.04")
										: replaceChromaInOklchString(successPalette[1][1], "0.03"),
							}}
						>
							<p
								className="flex gap-16d items-center leading-none"
								style={{
									color:
										theme === "dark"
											? neutralPalette[2][1]
											: neutralPalette[19][1],
								}}
							>
								<span>Text</span>
							</p>
							<p className="flex gap-16d items-center leading-none">
								<span
									style={{
										color:
											theme === "dark"
												? neutralPalette[7][1]
												: neutralPalette[11][1],
									}}
								>
									Muted text
								</span>
							</p>
						</div>
					</Card>
					<Card
						palette={warningPalette}
						borderRadius={radius * spacingSize * 2 ** 2.75}
					>
						<div
							className="flex flex-col gap-15d p-15d"
							style={{
								backgroundColor:
									theme === "dark" ? neutralPalette[13][1] : neutralPalette[2][1],
							}}
						>
							<div className="flex gap-16d">
								<p
									className="flex gap-8d items-center"
									style={{
										color:
											theme === "dark"
												? warningPalette[5][1]
												: warningPalette[10][1],
									}}
								>
									<WarningIcon />
									<span>Message</span>
								</p>
							</div>
							<button
								type="button"
								className="inline-flex items-center justify-center gap-11d rounded-6d transition-all leading-[1] px-14d py-12d"
								style={{
									backgroundColor: warningPalette[10][1],
									color: "var(--colors-neutral-50)",
									borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
								}}
							>
								Button
							</button>
						</div>
						<div
							className="flex flex-col gap-14d p-14d"
							style={{
								backgroundColor:
									theme === "dark"
										? replaceChromaInOklchString(warningPalette[12][1], "0.04")
										: replaceChromaInOklchString(warningPalette[1][1], "0.03"),
							}}
						>
							<p
								className="flex gap-16d items-center leading-none"
								style={{
									color:
										theme === "dark"
											? neutralPalette[2][1]
											: neutralPalette[19][1],
								}}
							>
								<span>Text</span>
							</p>
							<p className="flex gap-16d items-center leading-none">
								<span
									style={{
										color:
											theme === "dark"
												? neutralPalette[7][1]
												: neutralPalette[11][1],
									}}
								>
									Muted text
								</span>
							</p>
						</div>
					</Card>
					<Card
						palette={errorPalette}
						borderRadius={radius * spacingSize * 2 ** 2.75}
					>
						<div
							className="flex flex-col gap-15d p-15d"
							style={{
								backgroundColor:
									theme === "dark" ? neutralPalette[13][1] : neutralPalette[2][1],
							}}
						>
							<div className="flex gap-16d">
								<p
									className="flex gap-8d items-center"
									style={{
										color:
											theme === "dark" ? errorPalette[5][1] : errorPalette[10][1],
									}}
								>
									<ErrorIcon />
									<span>Message</span>
								</p>
							</div>
							<button
								type="button"
								className="inline-flex items-center justify-center gap-11d rounded-6d transition-all leading-[1] px-14d py-12d"
								style={{
									backgroundColor: errorPalette[10][1],
									color: "var(--colors-neutral-50)",
									borderRadius: `calc(var(--spacing-size) * ${radius} * 4rem)`,
								}}
							>
								Button
							</button>
						</div>
						<div
							className="flex flex-col gap-14d p-14d"
							style={{
								backgroundColor:
									theme === "dark"
										? replaceChromaInOklchString(errorPalette[12][1], "0.04")
										: replaceChromaInOklchString(errorPalette[1][1], "0.03"),
							}}
						>
							<p
								className="flex gap-16d items-center leading-none"
								style={{
									color:
										theme === "dark"
											? neutralPalette[2][1]
											: neutralPalette[19][1],
								}}
							>
								<span>Text</span>
							</p>
							<p className="flex gap-16d items-center leading-none">
								<span
									style={{
										color:
											theme === "dark"
												? neutralPalette[7][1]
												: neutralPalette[11][1],
									}}
								>
									Muted text
								</span>
							</p>
						</div>
					</Card>
					<div className="relative pt-4">
						<div className="flex gap-16d flex-wrap flex-col max-w-200 max-h-80 overflow-y-scroll">
							<HighlightedCode
								code={createUnoConfig(allPalettes, spacingSize, radius, textSize, normalizedPalettes)}
								language="js"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}