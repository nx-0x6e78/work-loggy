"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import "./globals.css";

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
					>
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
