"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
	return (
		<Container>
			<section className="h-full flex flex-col md:flex-row justify-center items-center gap-3">
				<section className="flex flex-col gap-y-2">
					<h1 className="text-xl sm:text-3xl transition-[font]">
						Monitor your work like you never did.
					</h1>
					<Button
						className="max-w-[120px] md:max-w-[150px] cursor-pointer"
						onClick={() => {
							toast.promise(
								() => {
									return new Promise((resolve) => setTimeout(resolve, 3000));
								},
								{
									loading: "Loading...",
									success: () => {
										return "Success";
									},
								}
							);
						}}
					>
						Get started now!
					</Button>
				</section>
			</section>
		</Container>
	);
}
