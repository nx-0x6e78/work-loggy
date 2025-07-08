import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Dashboard",
};

export default async function Dashboard() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) redirect("/");
	return <h1>Dashboard in progress</h1>;
}
