"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/stores/auth-store";
import { useTheme } from "next-themes";
import { Geist } from "next/font/google";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import "./globals.css";


const geist = Geist({
	subsets: ["latin"],
});

function ThemedToaster() {
	const { theme } = useTheme();
	return (
		<Toaster
			position="bottom-right"
			richColors
			swipeDirections={["left", "right"]}
			mobileOffset={30}
			theme={theme as "light" | "dark" | "system" | undefined}
		/>
	);
}

function AuthInitializer() {
	const { data: session, isPending } = useSession();
	const setUser = useAuthStore((state) => state.setUser);
	const setIsPending = useAuthStore((state) => state.setIsPending);

	useEffect(() => {
		setIsPending(isPending);
		if (session?.user) {
			setUser({
				name: session.user.name,
				email: session.user.email,
				image: session.user.image,
			});
		} else {
			setUser(null);
		}
	}, [session, setUser, isPending, setIsPending]);

	return null;
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState(false);
	AuthInitializer();
	return (
		<html lang="en" suppressHydrationWarning className={geist.className}>
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
							<ThemedToaster />
							<SidebarTrigger className="fixed mt-4" />
							{children}
						</main>
					</ThemeProvider>
				</SidebarProvider>
			</body>
		</html>
	);
}
