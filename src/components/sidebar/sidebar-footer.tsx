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
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SettingsDialog from "../dialogs/settings-dialog";
import AccountDialog from "../dialogs/account-dialog";
import { Skeleton } from "../ui/skeleton";

export function NavFooter() {
	const { isMobile } = useSidebar();
	const user = useAuthStore((state) => state.user);
	const name = user?.name || "Guest";
	const image = user?.image;
	const email = user?.email;
	const isPending = useAuthStore((state) => state.isPending);

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
										<AvatarImage
											src={image!}
											alt={name}
											className="object-cover object-center"
										/>
										<AvatarFallback className="rounded-lg">
											<UserCircle2 size={16} />
										</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">{name}</span>
										<span className="text-muted-foreground truncate text-xs blur-[3px] hover:blur-none transition-[all]">
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
									<AvatarImage
										src={image!}
										alt={name}
										className="object-cover object-center"
									/>
									<AvatarFallback className="rounded-lg">
										<UserCircle2 size={16} />
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{name}</span>
									<span
										className="text-muted-foreground truncate text-xs blur-[3px] hover:blur-none transition-[all] cursor-pointer"
										onClick={async () => {
											if (!navigator.clipboard)
												return toast.error(
													"Please, allow access to clipboard."
												);
											await navigator.clipboard.writeText(email!);
											toast.success("Email copied to clipboard.");
										}}
									>
										{email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						{user && (
							<>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<AccountDialog />
									<SidebarMenuButton>
										<Bell />
										Notifications
									</SidebarMenuButton>
								</DropdownMenuGroup>
							</>
						)}
						<DropdownMenuSeparator />
						{/* Not sure about this code below, any case, i will change it in future. */}
						{/* Maybe i will use zustand for state management, but need to learn it... */}
						<DropdownMenuItem
							variant={user ? "destructive" : "default"}
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
