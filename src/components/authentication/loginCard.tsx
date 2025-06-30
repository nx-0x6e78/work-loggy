import Link from "next/link";
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

export default function LoginCard() {
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
				<form>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
								<a
									href="#"
									className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
								>
									Forgot your password?
								</a>
							</div>
							<Input id="password" type="password" required />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2 mt-auto">
				<Button type="submit" className="w-full">
					Login
				</Button>
				<div className="flex">
					<Button variant="outline" className="w-full">
						Login with Google
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
