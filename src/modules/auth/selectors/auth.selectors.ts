import { useAuthStore } from "../store/auth.store";

// Authentication selectors
export const selectIsAuthenticated = (
  state: ReturnType<typeof useAuthStore.getState>
) => state.isAuthenticated;

export const selectPolitics = (
  state: ReturnType<typeof useAuthStore.getState>
) => state.politics;

export const selectLogin = (state: ReturnType<typeof useAuthStore.getState>) =>
  state.login;

export const selectLogout = (state: ReturnType<typeof useAuthStore.getState>) =>
  state.logout;
