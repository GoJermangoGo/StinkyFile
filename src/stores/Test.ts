import { create } from "zustand";

const DEFAULT_STATE = {
	toast: 0,
};

type ToastStore = {
	toast: number;
	incrementToast: () => void;
};

export const useToastStore = create<ToastStore>((set, get) => ({
	...DEFAULT_STATE,
	incrementToast() {
		set({ toast: get().toast + 1 });
	},
}));
