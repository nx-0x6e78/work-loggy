"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { UserCircle2 } from "lucide-react";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { SidebarMenuButton } from "../ui/sidebar";

export default function AccountDialog() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<SidebarMenuButton asChild>
					<span className="cursor-pointer">
						<UserCircle2 />
						<span>Account</span>
					</span>
				</SidebarMenuButton>
			</DialogTrigger>
			<DialogContent className="overflow-hidden p-0 h-[600px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]">
				<DialogTitle className="sr-only">Account</DialogTitle>
				<DialogDescription className="sr-only">
					View and change your account here.
				</DialogDescription>
				<main className="flex flex-1 flex-col overflow-hidden h-full">
					<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<div className="flex items-center gap-2 px-4"></div>
					</header>
					<section className="overflow-y-auto scroll p-4">
						<Button className="absolute bottom-4 right-4 max-w-[120px] cursor-pointer">
							Save
						</Button>
					</section>
				</main>
			</DialogContent>
		</Dialog>
	);
}
