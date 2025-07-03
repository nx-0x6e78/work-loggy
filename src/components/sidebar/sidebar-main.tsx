import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";

export function NavMain({
	items,
}: {
	items: Readonly<
		{
			title: string;
			url: string;
			icon: LucideIcon;
		}[]
	>;
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Work Loggy</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<Link href={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
