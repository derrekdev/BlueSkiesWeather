import { create } from "zustand";
import type { LoadingType } from "../types/store";

export const useLoading = create<LoadingType>((set) => ({
  isLoading: false,
  openLoad: () =>
    set(() => ({
      isLoading: true,
    })),
  closeLoad: () => {
    set(() => ({
      isLoading: false,
    }));
  },
}));
