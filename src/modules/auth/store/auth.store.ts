import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (credentials) => {
    // Implement your login logic here
    set({ isAuthenticated: true, user: { email: credentials.email } });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));
