"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof NextThemeProvider>;

export const ThemeProvider = ({ children, ...props }: Props) => (
	<NextThemeProvider {...props}>{children}</NextThemeProvider>
);
