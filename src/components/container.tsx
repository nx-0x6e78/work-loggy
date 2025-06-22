import { cn } from "@/lib/utils";
import { HTMLAttributes, HtmlHTMLAttributes } from "react";

export default function Container({
	children,
	className,
	...props
}: HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
	return (
		<section className={cn("h-full max-w-[1440px] mx-auto py-4", className)}>
			{children}
		</section>
	);
}
