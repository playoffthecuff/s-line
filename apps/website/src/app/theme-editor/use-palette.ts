import { useMemo } from "react";
import {
	type ColorSpace,
	createAchromaticPalette,
	createChromaticPalette,
	createNormalizeChromaticPalettes,
} from "@/lib/utils/colors";

export const useChromaticPalette = (
	name: string,
	hue: number,
	chromaK: number,
	lightness: number[],
	coldWarmK: number,
	colorSpace: ColorSpace,
) =>
	useMemo(
		() =>
			createChromaticPalette(
				name,
				hue,
				chromaK,
				lightness,
				coldWarmK,
				colorSpace,
			),
		[name, lightness, hue, chromaK, coldWarmK, colorSpace],
	);

export const useNormalizedChromaticPalettes = (
	colors: {
		prefix: string;
		hue: number;
		chromaK: number;
	}[],
	lightness: number[],
	coldWarmK: number,
	colorSpace: ColorSpace,
) =>
	useMemo(
		() =>
			createNormalizeChromaticPalettes(
				colors,
				lightness,
				coldWarmK,
				colorSpace,
			).flat(),
		[lightness, colors, coldWarmK, colorSpace],
	);

export const useAchromaticPalette = (
	name: string,
	hue: number,
	chromaK: number,
	lightness: number[],
	coldWarmK: number,
	colorSpace: ColorSpace,
) =>
	useMemo(
		() =>
			createAchromaticPalette(
				name,
				hue,
				chromaK,
				lightness,
				coldWarmK,
				colorSpace,
			),
		[name, lightness, hue, chromaK, coldWarmK, colorSpace],
	);
