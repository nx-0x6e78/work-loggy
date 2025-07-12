import { CheckCircle2 } from "lucide-react";

export default function GetStarted() {
	const PRIVILEGES = [
		"Effortless time tracking (manual + automatic)",
		"Task + calendar integration",
		"Real-time reports & analytics",
		"Multi-project management",
		"Hourly rate + budget tracking",
	] as const;
	return (
		<section className="h-full grid-cols-2 gap-3">
			<article>
				<h1 className="font-semibold">
					The Ultimate
					<br />
					Productivity Hub
				</h1>
				<h2 className="text-muted-foreground my-8">
					Smart Tools to Track Time, Projects,<br/>and Profits with Ease
				</h2>
				<ul className="mt-2">
					<article className="flex flex-col gap-2">
						{PRIVILEGES.map((el, index) => (
							<li key={index} className="flex flex-row items-center gap-2"><CheckCircle2 color="green"/>{el}</li>
						))}
					</article>
				</ul>
			</article>
		</section>
	);
}
