import SignUpCard from "@/components/authentication/signUpCard";
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
			<title>Sign Up</title>
			<Container className="flex items-center justify-center">
				<SignUpCard />
			</Container>
		</>
	);
}
