import LoginCard from "@/components/authentication/loginCard";
import Container from "@/components/container";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Login",
};

export default async function Login() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (session) redirect("/");

	return (
		<>
			<Container className="flex items-center justify-center">
				<LoginCard />
			</Container>
		</>
	);
}
