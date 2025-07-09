import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
	return (
		<section className="grid grid-cols-2">
			<article>
				<h1>Good morning {session?.user.name} {new Date().toTimeString()}</h1>
			</article>
		</section>
	);
}
