"use client";

import { signIn } from "@/lib/auth-client";
import { checkUserLogin } from "@/lib/validation";
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
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginCard() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [rememberMe, setRememberMe] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const [loading, setLoading] = useState(false);
	const router = useRouter();

	return (
		<Card className="w-full max-w-sm md:max-w-lg">
			<CardHeader>
				<CardTitle>Login to your account</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
				<CardAction>
					<Button
						variant="link"
						asChild
						className="hover:scale-105 transition-[scale]"
					>
						<Link href={"/sign-up"} className="bg-background">
							Sign up
						</Link>
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-6">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							placeholder="m@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
						</div>
						<div className="flex flex-row gap-2">
							<Input
								type={showPassword ? "text" : "password"}
								value={password}
								placeholder="********"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<Button
								onClick={() => {
									setShowPassword(!showPassword);
								}}
							>
								{showPassword ? <EyeClosed /> : <Eye />}
							</Button>
						</div>
						<div className="flex flex-row justify-between">
							<a
								href="#"
								className="inline-block text-sm underline-offset-4 hover:underline"
							>
								Forgot your password?
							</a>
							<div className="flex items-center gap-2">
								<Label htmlFor="rememberMe">Remember me</Label>
								<Checkbox
									onCheckedChange={() => setRememberMe(!rememberMe)}
									checked={rememberMe}
								/>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button
					className="w-full cursor-pointer"
					disabled={loading}
					onClick={async () => {
						setLoading(true);
						try {
							const userResult = await checkUserLogin({
								email: email,
								password: password,
							});

							if (userResult.error)
								throw new Error(userResult.error.issues[0].message);

							await signIn.email(
								{
									email: email,
									password: password,
									rememberMe: rememberMe,
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
						} catch (err) {
							if (err instanceof Error) toast.error(err.message);
						} finally {
							setLoading(false);
						}
					}}
				>
					{loading ? "Logging in..." : "Log in"}
				</Button>
			</CardFooter>
		</Card>
	);
}
