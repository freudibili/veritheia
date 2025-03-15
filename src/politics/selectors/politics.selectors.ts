import { useAuthStore } from "@/auth/store/auth.store";

export const selectPolitics = (
  state: ReturnType<typeof useAuthStore.getState>
) => state.politics;
