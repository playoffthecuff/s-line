"use client";

import { useTheme } from "next-themes";
import { MoonIcon } from "../../ui/icons/moon";
import { SunIcon } from "../../ui/icons/sun";
import { ToggleButton } from "../../ui/buttons/toggle";

export function ThemeToggle() {
	const { setTheme } = useTheme();
	return (
			<ToggleButton
				aria-label="color scheme"
				onPressedChange={(v) => setTheme(v ? "dark" : "light")}
				className={"rounded-4 border-neutral-500 hover:bg-neutral-150 dark:hover:bg-neutral-950"}
				render={(p, s) => {
					return (
						<button type="button" {...p}>
							{s.pressed ? <MoonIcon /> : <SunIcon />}
						</button>
					);
				}}
			/>
	);
}
