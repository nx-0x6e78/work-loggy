import { SETTINGS_OPTIONS } from "@/lib/constants";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "../ui/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { SidebarMenuButton } from "../ui/sidebar";

export default function SettingsDialog() {
	const [open, setOpen] = useState(false);
	type NavItem = (typeof SETTINGS_OPTIONS.nav)[number];
	const [settingsPage, setSettingsPage] = useState<NavItem>(
		SETTINGS_OPTIONS.nav[0]
	);

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
			<DialogContent className="overflow-hidden p-0 h-[600px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]">
				<DialogTitle className="sr-only">Settings</DialogTitle>
				<DialogDescription className="sr-only">
					Customize your settings here.
				</DialogDescription>
				<Select
					value={settingsPage.name}
					onValueChange={(value) => {
						const matched = SETTINGS_OPTIONS.nav.find(
							(item) => item.name === value
						);
						if (matched) setSettingsPage(matched);
					}}
					required
				>
					<SelectTrigger className="w-fit absolute top-4 left-4">
						<SelectValue placeholder="Settings" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Settings</SelectLabel>
							{SETTINGS_OPTIONS.nav.map((item, index) => (
								<SelectItem key={index} value={item.name}>
									{item.name}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<main className="flex flex-1 flex-col overflow-hidden h-full">
					<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<div className="flex items-center gap-2 px-4"></div>
					</header>
					<section className="overflow-y-auto scroll p-4">
						<settingsPage.element />
						<Button className="absolute bottom-4 right-4 max-w-[120px] cursor-pointer">
							Save
						</Button>
					</section>
				</main>
			</DialogContent>
		</Dialog>
	);
}
