import { UserCircle2 } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { SidebarMenuSubButton } from "../ui/sidebar";
import { useState } from "react";
import Container from "../container";

export default function AccountDialog() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<SidebarMenuSubButton asChild>
					<span className="cursor-pointer">
						<UserCircle2 />
						<span>Account</span>
					</span>
				</SidebarMenuSubButton>
			</DialogTrigger>
			<DialogContent className="overflow-hidden p-0 h-[600px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]">
				<DialogTitle className="sr-only">Account</DialogTitle>
				<DialogDescription className="sr-only">
					View and change your account here.
				</DialogDescription>
				<main className="flex flex-1 flex-col overflow-hidden h-full">
					<header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<div className="px-4">Account</div>
					</header>
					<Container>
						<p>i will re-do it, i dont like how it is</p>
					</Container>
				</main>
			</DialogContent>
		</Dialog>
	);
}
