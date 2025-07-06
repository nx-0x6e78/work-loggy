"use client";

import { useAuthStore } from "@/stores/auth-store";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Pencil, UserCircle, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { SidebarMenuButton } from "../ui/sidebar";

export default function AccountDialog() {
	const [open, setOpen] = useState(false);
	const user = useAuthStore((state) => state.user);
	const name = user?.name;
	const email = user?.email;
	const profilePicture = user?.image;

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
					<header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<div className="px-4">Account</div>
					</header>
					<section className="p-4 py-0 grid grid-cols-[3fr_2fr] gap-6">
						<article className="flex flex-col gap-2">
							<Label htmlFor="email">Email address</Label>
							<Input
								type="email"
								placeholder="m@example.com"
								value={email}
								readOnly
							/>
							<Separator decorative className="my-3" />
							<div className="grid grid-cols-2 gap-2">
								<div className="flex flex-col gap-2">
									<Label htmlFor="name">Name</Label>
									<Input type="text" value={name} readOnly />
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="surname">Surname</Label>
									<Input type="text" value="" readOnly />
								</div>
							</div>
						</article>
						<article>
							<Label htmlFor="profilePicture">Profile picture</Label>
							<div className="flex items-center justify-center relative">
								<div className="relative">
									<Avatar className="w-fit h-fit">
										<AvatarImage src={profilePicture!} />
										<AvatarFallback>
											<UserCircle size={128} />
										</AvatarFallback>
									</Avatar>
									<div className="absolute -bottom-4">
										<Label htmlFor="input-file" className="ring-1 ring-ring px-2 py-3 rounded-md backdrop-blur-sm">Select a File</Label>
										<Input
											type="file"
											id="input-file"
											accept="image/jpg, image/jpeg, image/png"
											multiple={false}
											className="hidden"
										/>
									</div>
								</div>
							</div>
						</article>
						<Button
							className="absolute bottom-4 right-4 max-w-[120px] cursor-pointer"
							disabled={true}
						>
							Save
						</Button>
					</section>
				</main>
			</DialogContent>
		</Dialog>
	);
}
