// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/prefer-namespace-keyword
declare module Geocode {
  export interface Properties {
    wikidata: string;
    short_code: string;
    foursquare: string;
    landmark?: boolean;
    address: string;
    category: string;
  }

  export interface Geometry {
    type: string;
    coordinates: number[];
  }

  export interface Context {
    id: string;
    wikidata: string;
    short_code: string;
    text: string;
  }

  export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text: string;
    place_name: string;
    bbox: number[];
    center: number[];
    geometry: Geometry;
    context: Context[];
    matching_text: string;
    matching_place_name: string;
  }

  export interface RootObject {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
  }
}

export default Geocode;
