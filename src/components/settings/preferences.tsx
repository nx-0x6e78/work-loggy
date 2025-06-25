"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Preferences() {
	return (
		<section className="grid md:grid-cols-2 gap-3">
			<article className="flex flex-col sm:flex-row justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="standardTimeWork" className="text-nowrap">
					Standard start time of work
				</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					className="bg-background w-min appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col sm:flex-row justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak" className="text-nowrap">
					Duration of lunch break.
				</Label>
				<Input
					type="time"
					step="1"
					className="bg-background w-min appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col sm:flex-row justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak" className="text-nowrap">
					Default hourly earnings
				</Label>
				<Input
					type="number"
					step="1"
					className="bg-background w-min appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col sm:flex-row justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak" className="text-nowrap">
					Rounding of the hours
				</Label>
				<Input
					type="time"
					step="1"
					className="bg-background w-min appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
		</section>
	);
}
