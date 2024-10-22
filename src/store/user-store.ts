import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

//PRODUCT ID
interface AuthType {
	// client_secret: string;
	// points: number;
	auth_token: string | null;
	// user?: User;
	// setUser: (user: User) => void;
	setAuthToken: (token: string | null) => void;
	// setPoints: (points: number) => void;
	reset: () => void;
}

const initialState = {
	auth_token: null,
};

export const useClientStore = create<
    AuthType,
	[["zustand/persist", AuthType]]
>(
	persist(
		(set) => ({
			...initialState,
			// auth_token: "",
			// points: 0,
			// setClientSecret: (client_secret) => set(() => ({ client_secret })),
			// setUser: (user) => set(() => ({ user })),
			setAuthToken: (auth_token) => set(() => ({ auth_token })),
			// setPoints: (points) => set(() => ({ points })),
			reset: () => set(initialState),
		}),
		{
			name: "client-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);