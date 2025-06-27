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

export function NavFooter() {
	const { isMobile } = useSidebar();
	const { data: session } = useSession()!;

	const [profilePicture, setProfilePicture] = useState<string>();
	const [userName, setUserName] = useState<string | "Guest">("Guest");
	const [userEmail, setUserEmail] = useState<string>();

	useEffect(() => {
		if (session?.user) {
			setProfilePicture(session.user.image!);
			setUserName(session.user.name!);
			setUserEmail(session.user.email);
		}
	}, [session]);

	const router = useRouter();
	return (
		<>
			{session?.user && <SettingsDialog />}
			<SidebarMenu>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-transform"
						>
							<Avatar className="h-8 w-8 rounded-lg grayscale">
								<AvatarImage src={profilePicture} alt={userName} />
								<AvatarFallback className="rounded-lg">
									<UserCircle2 size={16} />
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{userName}</span>
								<span className="text-muted-foreground truncate text-xs">
									{userEmail}
								</span>
							</div>
							<EllipsisVertical className="ml-auto size-4" />
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
									<AvatarImage src={profilePicture} alt={userName} />
									<AvatarFallback className="rounded-lg">
										<UserCircle2 size={16} />
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{userName}</span>
									<span className="text-muted-foreground truncate text-xs">
										{userEmail}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						{session?.user && (
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
								if (session?.user)
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
							{session?.user ? (
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
