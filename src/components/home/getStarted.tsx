import { Button } from "../ui/button";

export default function GetStarted() {
	return (
		<section className="h-full flex flex-col justify-center items-center gap-3">
			<h1 className="text-xl sm:text-3xl transition-[font]">
				Monitor your work like you never did.
			</h1>
			<Button className="max-w-[120px] md:max-w-[150px] cursor-pointer">
				Get started now!
			</Button>
		</section>
	);
}
