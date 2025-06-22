"use client";

export default function Preferences() {
	return (
		<section className="flex flex-row flex-wrap gap-4 justify-center">
			{Array.from({ length: 9 }).map((_, i) => (
				<div
					key={i}
					// className="grow min-w-[300px] max-w-[330px] h-[300px] bg-muted/50 rounded-xl"
					className="grow w-[300px] h-[300px] bg-muted/50 rounded-xl"
				/>
			))}
		</section>
	);
}
