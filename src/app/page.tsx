import Container from "@/components/container";
import GetStarted from "@/components/home/getStarted";
import HomePage from "@/components/home/homePage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
	title: "Home",
};

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return (
		<>
			<Container>{session ? <HomePage /> : <GetStarted />}</Container>
		</>
	);
}
