import { User } from "@/types/user.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setHydrated: (hydrated: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isHydrated: false,
      login: (user: User) =>
        set({
          user,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
      setHydrated: (hydrated: boolean) =>
        set({
          isHydrated: hydrated,
        }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      },
    }
  )
);
