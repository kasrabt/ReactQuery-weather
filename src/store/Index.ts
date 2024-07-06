import { create } from "zustand";

interface storeState {
  city: string;
  newCity: (formValue: string) => void;
}

export const useStore = create<storeState>((set) => ({
  city: "arak",
  newCity: (formValue) => set(() => ({ city: formValue })),
}));
