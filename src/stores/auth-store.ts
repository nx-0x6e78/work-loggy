import { create } from "zustand";

type User = {
	name: string;
	email: string;
	image?: string | null;
};

type AuthStore = {
	user: User | null;
	setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));
