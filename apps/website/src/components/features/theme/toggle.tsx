"use client";

import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle/toggle";
import { ToggleButton } from "../../ui/buttons/toggle2";
import { MoonIcon } from "../../ui/icons/moon";
import { SunIcon } from "../../ui/icons/sun";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	return (
		<Toggle
			pressed={theme === "light"}
			appearance={"ghost"}
			onPressedChange={(v) => setTheme(v ? "light" : "dark")}
			shape={"circular"}
			intent={"secondary"}
		>
			{theme === "light" ? <SunIcon /> : <MoonIcon />}
		</Toggle>
	);
}
