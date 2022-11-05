// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Directions {
  export interface Admin {
    iso_3166_1_alpha3: string;
    iso_3166_1: string;
  }

  export interface MapboxStreetsV8 {
    class: string;
  }

  export interface TollCollection {
    type: string;
  }

  export interface Intersection {
    entry: boolean[];
    bearings: number[];
    duration: number;
    mapbox_streets_v8: MapboxStreetsV8;
    is_urban: boolean;
    admin_index: number;
    out: number;
    weight: number;
    geometry_index: number;
    location: number[];
    in?: number;
    turn_weight?: number;
    turn_duration?: number;
    classes: string[];
    toll_collection: TollCollection;
  }

  export interface Maneuver {
    type: string;
    instruction: string;
    bearing_after: number;
    bearing_before: number;
    location: number[];
    modifier: string;
    exit?: number;
  }

  export interface Geometry {
    coordinates: number[][];
    type: string;
  }

  export interface Step {
    intersections: Intersection[];
    maneuver: Maneuver;
    name: string;
    weight_typical: number;
    duration_typical: number;
    duration: number;
    distance: number;
    driving_side: string;
    weight: number;
    mode: string;
    geometry: Geometry;
    destinations: string;
    ref: string;
    rotary_name: string;
  }

  export interface Leg {
    via_waypoints: any[];
    admins: Admin[];
    weight_typical: number;
    duration_typical: number;
    weight: number;
    duration: number;
    steps: Step[];
    distance: number;
    summary: string;
  }

  export interface Geometry2 {
    coordinates: number[][];
    type: string;
  }

  export interface Route {
    weight_typical: number;
    duration_typical: number;
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
    legs: Leg[];
    geometry: Geometry2;
  }

  export interface Waypoint {
    distance: number;
    name: string;
    location: number[];
  }

  export interface RootObject {
    routes: Route[];
    waypoints: Waypoint[];
    code: string;
    uuid: string;
  }

  export interface Error {
    code: string;
    message: string;
  }
}

export default Directions;
