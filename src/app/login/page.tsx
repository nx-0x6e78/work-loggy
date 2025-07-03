import LoginCard from "@/components/authentication/loginCard";
import Container from "@/components/container";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (session) redirect("/");

	return (
		<>
			<title>Login</title>
			<Container className="flex items-center justify-center">
				<LoginCard />
			</Container>
		</>
	);
}
