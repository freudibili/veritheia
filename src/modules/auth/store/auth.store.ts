import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  politics: { email: string } | null;
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  politics: null,
  login: (credentials) => {
    set({ isAuthenticated: true, politics: { email: credentials.email } });
  },
  logout: () => {
    set({ isAuthenticated: false, politics: null });
  },
}));
