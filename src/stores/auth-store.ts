import { create } from "zustand";

type User = {
	name: string;
	email: string;
	image?: string | null;
};

type AuthStore = {
	user: User | null;
	isPending: boolean;
	setUser: (user: User | null) => void;
	setIsPending: (pending: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	isPending: true,
	setUser: (user) => set({ user }),
	setIsPending: (pending) => set({ isPending: pending }),
}));
