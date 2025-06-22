"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider> & {defaultTheme: "dark" | "light" | "system"}) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
