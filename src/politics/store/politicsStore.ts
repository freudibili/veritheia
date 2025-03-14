import { create } from "zustand";
import { Actor } from "../types/politics.types";
import politicsApi from "../service/politicsApi";

interface PoliticsState {
  actors: Actor[];
  loading: boolean;
  error: string | null;
  fetchActors: () => Promise<void>;
}

export const usePoliticsStore = create<PoliticsState>((set) => ({
  actors: [],
  loading: false,
  error: null,
  fetchActors: async () => {
    try {
      set({ loading: true, error: null });
      const response = await politicsApi.getAllActors();
      set({ actors: response, loading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch actors",
        loading: false,
      });
    }
  },
}));
