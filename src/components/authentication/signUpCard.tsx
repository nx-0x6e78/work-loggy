"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SignUpCard() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmationPassword, setConfirmationPassword] = useState<string>("");

	const [loading, setLoading] = useState(false);

	return (
		<Card className="w-full max-w-sm md:max-w-lg">
			<CardHeader>
				<CardTitle>Sign Up</CardTitle>
				<CardDescription>Let's begin creating your account.</CardDescription>
				<CardAction>
					<Button
						variant="link"
						asChild
						className="hover:scale-105 transition-[scale]"
					>
						<Link href={"/login"} className="bg-background">
							Login
						</Link>
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-6">
					<div className="grid gap-2">
						<Label htmlFor="name">Name</Label>
						<Input
							type="text"
							placeholder="Jeff"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							placeholder="m@example.com"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input
							type="password"
							required
							value={confirmationPassword}
							onChange={(e) => setConfirmationPassword(e.target.value)}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex-col gap-2 mt-auto">
				<Button
					className="w-full cursor-pointer"
					disabled={loading}
					type="submit"
					onClick={async () => {
						await signUp.email(
							{
								name: name,
								email: email,
								password: password,
								callbackURL: "/",
							},
							{
								onRequest: () => setLoading(true),
								onResponse: () => setLoading(false),
								onError: ({ error }) => {
									toast.error(error.message);
								},
								onSuccess: () => redirect("/"),
							}
						);
					}}
				>
					Sign up
				</Button>
			</CardFooter>
		</Card>
	);
}
