"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Toaster } from "sonner";
import "./globals.css";

function ThemedToaster() {
	const { theme } = useTheme();

	return (
		<Toaster
			position="bottom-right"
			richColors
			swipeDirections={["left", "right"]}
			closeButton
			mobileOffset={30}
			theme={theme as "light" | "dark" | "system" | undefined}
		/>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState(false);
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<SidebarProvider open={open} onOpenChange={setOpen}>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
						themes={["dark", "light", "system"]}
					>
						<ThemedToaster />
						<AppSidebar />
						<main className="w-full">
							<SidebarTrigger className="fixed mt-4" />
							{children}
						</main>
					</ThemeProvider>
				</SidebarProvider>
			</body>
		</html>
	);
}
