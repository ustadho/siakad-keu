import { AlertColor } from "@mui/material";
import { create } from "zustand";

type SnackbarState = {
  isOpen: boolean,
  message: string,
  status: AlertColor,
  openSnackbar: (x: any) => void,
  closeSnackbar: () => void,
};

function store(set: any): SnackbarState {
  return {
    isOpen: false,
    message: 'Oke siap',
    status: 'success',
    openSnackbar: (x: any) => set((state: any) => ({ ...state, isOpen: true, message: x.message, status: x.status })),
    closeSnackbar: () => set((state: any) => ({ ...state, isOpen: false})),
  };
}

export const useSnackbarStore = create(store);
