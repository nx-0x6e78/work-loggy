import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
} from "@/components/ui/sidebar";
import { CORE_ITEMS } from "@/lib/constants";
import { Separator } from "../ui/separator";
import { NavFooter } from "./nav-footer";
import { NavMain } from "./nav-main";

export function AppSidebar() {
	return (
		<Sidebar variant="floating" collapsible="icon">
			<SidebarContent>
				<NavMain items={CORE_ITEMS} />
				<Separator />
			</SidebarContent>
			<SidebarFooter>
				<NavFooter />
			</SidebarFooter>
		</Sidebar>
	);
}
