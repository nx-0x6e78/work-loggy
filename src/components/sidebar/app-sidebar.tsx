import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { NavFooter } from "./nav-footer";
import { NavMain } from "./nav-main";
import { CORE_ITEMS } from "@/lib/constants";

const user = {
	name: "shadcn",
	email: "m@example.com",
	avatar: "/avatars/shadcn.jpg",
};

export function AppSidebar() {
	return (
		<Sidebar variant="floating" collapsible="icon">
			<SidebarContent>
				<NavMain items={CORE_ITEMS} />
				<Separator />
			</SidebarContent>
			<SidebarFooter>
				<NavFooter user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
