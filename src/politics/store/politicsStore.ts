import { create } from "zustand";
import { Actor } from "../types/politics.types";
import politicsApi from "../service/politicsApi";

interface PoliticsState {
  actor: Actor | null;
  actors: Actor[];
  loading: boolean;
  error: string | null;
  fetchActors: () => Promise<void>;
  fetchActor: (id: string) => Promise<void>;
}

export const usePoliticsStore = create<PoliticsState>((set) => {
  const handleAsync = async <T>(
    apiCall: () => Promise<T>,
    updateState: (data: T) => void
  ) => {
    try {
      set({ loading: true, error: null });
      const data = await apiCall();
      updateState(data);
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        loading: false,
      });
    }
  };

  return {
    actor: null,
    actors: [],
    loading: false,
    error: null,

    fetchActors: () =>
      handleAsync<Actor[]>(
        () => politicsApi.getActors(),
        (data) => set({ actors: data, loading: false })
      ),

    fetchActor: (id: string) =>
      handleAsync<Actor>(
        () => politicsApi.getActor(id),
        (data) => set({ actor: data, loading: false })
      ),
  };
});
