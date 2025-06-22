"use client";

import { useState } from "react";
import { Settings } from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { SETTINGS_OPTIONS } from "@/lib/constants";

export function SettingsDialog() {
	const [open, setOpen] = useState(false);
	const [settingsPage, setSettingsPage] = useState<NavItem>(
		SETTINGS_OPTIONS.nav[0]
	);
	type NavItem = (typeof SETTINGS_OPTIONS.nav)[number];

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<SidebarMenuButton asChild>
					<span className="cursor-pointer">
						<Settings />
						<span>Settings</span>
					</span>
				</SidebarMenuButton>
			</DialogTrigger>
			<DialogContent className="overflow-hidden p-0 h-[600px] md:max-w-[800px] lg:max-w-[800px]">
				<DialogTitle className="sr-only">Settings</DialogTitle>
				<DialogDescription className="sr-only">
					Customize your settings here.
				</DialogDescription>
				<SidebarProvider className="items-start">
					<Sidebar className="hidden md:flex">
						<SidebarContent>
							<SidebarGroup>
								<SidebarGroupContent>
									<SidebarMenu>
										{SETTINGS_OPTIONS.nav.map((item) => (
											<SidebarMenuItem key={item.name}>
												<SidebarMenuButton
													asChild
													isActive={item.name === settingsPage.name}
													onClick={() => setSettingsPage(item)}
												>
													<span className="cursor-pointer">
														<item.icon />
														<span>{item.name}</span>
													</span>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarContent>
					</Sidebar>
					<main className="flex flex-1 flex-col overflow-hidden">
						<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
							<div className="flex items-center gap-2 px-4">
								<Breadcrumb>
									<BreadcrumbList>
										<BreadcrumbItem className="hidden md:block">
											<BreadcrumbLink href="#">Settings</BreadcrumbLink>
										</BreadcrumbItem>
										<BreadcrumbSeparator className="hidden md:block" />
										<BreadcrumbItem>
											<BreadcrumbPage>{settingsPage.name}</BreadcrumbPage>
										</BreadcrumbItem>
									</BreadcrumbList>
								</Breadcrumb>
							</div>
						</header>
						<section className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
							<settingsPage.element />
						</section>
						<SidebarTrigger className="fixed bottom-0 left-0 z-20 m-2" />
					</main>
				</SidebarProvider>
			</DialogContent>
		</Dialog>
	);
}
