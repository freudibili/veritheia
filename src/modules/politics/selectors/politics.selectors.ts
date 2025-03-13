import { useAuthStore } from "@/modules/auth/store/auth.store";

export const selectPoliticsProfile = (
  state: ReturnType<typeof useAuthStore.getState>
) => state.politics;

export const selectPoliticsEmail = (
  state: ReturnType<typeof useAuthStore.getState>
) => state.politics?.email;
