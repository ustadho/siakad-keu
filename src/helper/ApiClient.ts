"use client"
import axios from "axios";
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

const baseURL = process.env.API_HOST;

function store(set: any) {
  return {
    accessToken: null,
    setAccessToken: (token: string) => set({ accessToken: token }),
  }
}

// Inisialisasi state menggunakan Zustand
const useTokenStore = create(persist(store, {
  name: 'x-auth-tokn', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
}));


const axiosInterceptor = () => {
  const defaultOptions = {
    baseURL
  };

  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (request: any) => {
    request.headers.set({
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "Authorization": "Bearer "
    });

    const token = useTokenStore.getState();
    if (token.accessToken) {
      request.headers.set({
        "Authorization": "Bearer " + token.accessToken
      });
    }

    return request;
  });

  instance.interceptors.response.use(
    (response: any) => {
      return response.data;
    },

    (error: any) => {
      return error.response.data
    }
  )

  return instance;
}

const apiClient = axiosInterceptor()

export { useTokenStore, apiClient }
