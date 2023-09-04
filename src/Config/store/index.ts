import { create } from "zustand";

type Store = {
	currectSolution: string;
};
type Actions = {
	setCurrectSolution: (id: string) => void;
};

export const useStore = create<Store & Actions>((set) => ({
	currectSolution: "Five9",
	setCurrectSolution: (id) =>
		set(() => ({ currectSolution: id || "" })),
}));
