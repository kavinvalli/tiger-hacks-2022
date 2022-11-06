import create from "zustand";

export const useStore = create<{
  speed: number;
  pressure: number;
  setSpeed(speed: number): void;
  setPressure(pressure: number): void;
}>((set) => ({
  speed: 60,
  setSpeed: (speed: number) => set({ speed }),
  pressure: 31,
  setPressure: (pressure: number) => set({ pressure }),
}));
