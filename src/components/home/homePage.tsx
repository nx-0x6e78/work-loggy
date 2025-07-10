"use client";

import { useAuthStore } from "@/stores/auth-store";

export default async function HomePage() {
	const user = useAuthStore((state) => state.user)
	return <section className="grid grid-cols-2 gap-4"></section>;
}
