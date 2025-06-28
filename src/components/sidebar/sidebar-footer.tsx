"use client";

import {
	Bell,
	EllipsisVertical,
	LogIn,
	LogOut,
	UserCircle2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	useSidebar,
} from "@/components/ui/sidebar";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import SettingsDialog from "../settings/settings-dialog";
import { Skeleton } from "../ui/skeleton";
import { useAuthStore } from "@/stores/auth-store";

export function NavFooter() {
	const { isMobile } = useSidebar();
	const { isPending } = useSession();
	const user = useAuthStore((state) => state.user);
	const name = user?.name || "Guest";
	const image = user?.image;
	const email = user?.email;

	const router = useRouter();
	return (
		<>
			{user && <SettingsDialog />}
			<SidebarMenu>
				<DropdownMenu>
					<DropdownMenuTrigger asChild disabled={isPending}>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-transform"
						>
							{isPending ? (
								<Skeleton />
							) : (
								<>
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage src={image!} alt={name} />
										<AvatarFallback className="rounded-lg">
											<UserCircle2 size={16} />
										</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">{name}</span>
										<span className="text-muted-foreground truncate text-xs">
											{email}
										</span>
									</div>
									<EllipsisVertical className="ml-auto size-4" />
								</>
							)}
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage src={image!} alt={name} />
									<AvatarFallback className="rounded-lg">
										<UserCircle2 size={16} />
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{name}</span>
									<span className="text-muted-foreground truncate text-xs">
										{email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						{user && (
							<>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<UserCircle2 size={16} />
										Account
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Bell />
										Notifications
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</>
						)}
						<DropdownMenuSeparator />
						{/* Not sure about this code below, any case, i will change it in future. */}
						{/* Maybe i will use zustand for state management, but need to learn it... */}
						<DropdownMenuItem
							onSelect={async () => {
								if (user)
									await signOut({
										fetchOptions: {
											onError: () => {
												toast.error("There was an error while logging out!");
											},
											onSuccess: () => {
												toast.success("Successfully logged out!");
												
											},
										},
									});
								else router.push("/login");
							}}
						>
							{user ? (
								<>
									<LogOut />
									Log out
								</>
							) : (
								<>
									<LogIn />
									Log in
								</>
							)}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenu>
		</>
	);
}
