import { Account } from "src/models/account.model";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthState = {
  isLogin: boolean;
  account: Account;
  setIsLogin: (x: boolean) => void;
  setAccount: (x: Account) => void;
  logout: () => void
};

function store(set: any): AuthState {
  return {
    isLogin: false,
    account: {},
    setIsLogin: (x: boolean) => set((state: any) => ({ ...state, isLogin: x })),
    setAccount: (x: Account) => set((state: any) => ({ ...state, account: x })),
    logout: () => set(() => ({ isLogin: false, token: '', account: {} }))
  };
}

export const useAuthStore = create(
  persist(store, {
    name: 'auth-store', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  })
);
