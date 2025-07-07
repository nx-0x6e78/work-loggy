import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
} from "@/components/ui/sidebar";
import { CORE_ITEMS } from "@/lib/constants";
import { Separator } from "../ui/separator";
import { AppSidebarFooter } from "./sidebar-footer";
import { AppSidebarMain } from "./sidebar-main";

export function AppSidebar() {
	return (
		<Sidebar variant="floating" collapsible="icon" >
			<SidebarContent>
				<AppSidebarMain items={CORE_ITEMS} />
				<Separator />
			</SidebarContent>
			<SidebarFooter>
				<AppSidebarFooter />
			</SidebarFooter>
		</Sidebar>
	);
}
