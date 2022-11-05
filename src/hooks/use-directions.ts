import { Weather } from "@/types/weather";
import { string } from "zod";
import create from "zustand";

export type Direction = {
  instruction: string;
  modifier: string;
  latitude: number;
  longitude: number;
  terrainInfo: Weather;
};

type Point = {
  type?: "Feature";
  geometry?: {
    type: "Point";
    coordinates: [number, number];
  };
  properties?: { id?: string; marker?: string };
};

type DirectionsState = {
  directions: Direction[];
  setDirections: (directions: Direction[]) => void;
  routeIndex: number;
  setRouteIndex: (routeIndex: number) => void;
  destination: Point;
  setDestination: (destination: Point) => void;
  origin: Point;
  setOrigin: (origin: Point) => void;
};

const useDirections = create<DirectionsState>((set) => ({
  directions: [],
  setDirections: (directions) => set({ directions }),
  routeIndex: 0,
  setRouteIndex: (routeIndex) => set({ routeIndex }),
  destination: {},
  setDestination: (destination) => set({ destination }),
  origin: {},
  setOrigin: (origin) => set({ origin }),
}));

export default useDirections;
