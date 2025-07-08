"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { checkUserSignup } from "@/lib/validation";
import { Eye, EyeClosed } from "lucide-react";

export default function SignUpCard() {
	const [name, setName] = useState<string>("");
	const [surname, setSurname] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmationPassword, setConfirmationPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setLoading(true);
		try {
			const userResult = await checkUserSignup({
				name: name,
				surname: surname,
				email: email,
				password: password,
				confirmationPassword: confirmationPassword,
			});

			if (userResult.error) throw new Error(userResult.error.issues[0].message);

			await signUp.email(
				{
					name: userResult.data.name,
					email: userResult.data.email,
					password: userResult.data.password,
					callbackURL: "/",
				},
				{
					onError: (ctx) => {
						toast.error(ctx.error.message);
					},
					onSuccess: () => {
						router.replace("/");
					},
				}
			);
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			noValidate
			className="w-full max-w-sm md:max-w-lg"
		>
			<Card>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<CardDescription>Let's begin creating your account.</CardDescription>
					<CardAction>
						<Button
							variant="link"
							asChild
							type="button"
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
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input
									type="text"
									id="name"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="surname">Surname</Label>
								<Input
									type="text"
									id="surname"
									value={surname}
									onChange={(e) => setSurname(e.target.value)}
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								placeholder="m@example.com"
								id="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<div className="flex gap-2">
								<Input
									type={showPassword ? "text" : "password"}
									required
									value={password}
									id="password"
									onChange={(e) => setPassword(e.target.value)}
									placeholder="********"
								/>
								<Button
									onClick={() => {
										setShowPassword(!showPassword);
									}}
									type="button"
								>
									{showPassword ? <EyeClosed /> : <Eye />}
								</Button>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="confirmPassword">Confirm Password</Label>
							<Input
								type={showPassword ? "text" : "password"}
								required
								id="confirmPassword"
								value={confirmationPassword}
								onChange={(e) => setConfirmationPassword(e.target.value)}
								placeholder="********"
							/>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex-col gap-2 mt-auto">
					<Button
						className="w-full cursor-pointer"
						disabled={loading}
						type="submit"
					>
						{loading ? "Signing up..." : "Sign up"}
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
