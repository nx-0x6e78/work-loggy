"use client";

import { ModeToggle } from "../ui/mode-toggle";

export default function Appearance() {
	return (
		<section className="flex">
			<ModeToggle className="absolute bottom-4 left-4"/>
		</section>
	);
}
