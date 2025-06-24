"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Preferences() {
	return (
		<section className="flex flex-row flex-wrap gap-3">
			<article className="flex flex-col grow sm:flex-row  justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="standardTimeWork">Standard start time of work</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					defaultValue="10:30:00"
					className="bg-background w-fit appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col grow sm:flex-row  justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak">Duration of lunch break.</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					defaultValue="10:30:00"
					className="bg-background w-fit appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col grow sm:flex-row  justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak">Duration of lunch break.</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					defaultValue="10:30:00"
					className="bg-background w-fit appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col grow sm:flex-row  justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak">Duration of lunch break.</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					defaultValue="10:30:00"
					className="bg-background w-fit appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
			<article className="flex flex-col grow sm:flex-row  justify-between gap-3 bg-background ring-ring ring-1 p-3 px-4 rounded-xl">
				<Label htmlFor="defaultLunchBreak">Duration of lunch break.</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					defaultValue="10:30:00"
					className="bg-background w-fit appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</article>
		</section>
	);
}
