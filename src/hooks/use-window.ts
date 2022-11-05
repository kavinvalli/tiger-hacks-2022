import create from "zustand";

export const AppType = {
  SPOTIFY: "SPOTIFY",
  BROWSER: "BROWSER",
} as const;

export type App = keyof typeof AppType;

type WindowState = {
  isOpen: boolean;
  app: App;
  openApp: (app: App) => void;
  closeApp: () => void;
};

const useWindow = create<WindowState>((set) => ({
  isOpen: false,
  app: AppType.SPOTIFY,
  openApp: (app) => set({ app, isOpen: true }),
  closeApp: () => set({ isOpen: false }),
}));

export default useWindow;
