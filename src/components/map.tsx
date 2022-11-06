import useDirections from "@/hooks/use-directions";
import useWindow from "@/hooks/use-window";
import type Directions from "@/types/directions";
import type Geocode from "@/types/geocode";
import { motion } from "framer-motion";
import type { Feature, GeoJsonProperties, Geometry } from "geojson";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
// import { useSpeechRecognition } from "react-speech-recognition";
import styles from "./map.module.css";
import { Climate } from "../../wasm/pkg";

const climate = Climate.new();

type Coords = [lon: number, lat: number];

function formatDirectionsURL(origin: Coords, destination: Coords) {
  return `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${encodeURIComponent(
    `${origin.join(",")};${destination.join(",")}`
  )}?alternatives=true&geometries=geojson&steps=true&access_token=${
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  }`;
}

function formatGeocodeURL(location: string) {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`;
}

async function geocodeLocation(location: string): Promise<Coords> {
  const res = await fetch(formatGeocodeURL(location));
  const data = (await res.json()) as Geocode.RootObject;

  return data.features[0]!.center as Coords;
}

async function getDirections(from: Coords, to: Coords) {
  const res = await fetch(formatDirectionsURL(from, to));
  const data = await res.json();

  if (!res.ok) {
    throw new Error((data as Directions.Error).code);
  }

  return data as Directions.RootObject;
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface MapProps {
  origin?: string;
  destination?: string;
  panToLat?: number;
  panToLong?: number;
}

export default function Map({
  origin,
  destination,
  panToLat,
  panToLong,
}: MapProps) {
  const { routeIndex, setDirections, setRouteIndex } = useDirections();
  const isOpen = useWindow((state) => state.isOpen);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const geolocationControlRef = useRef<mapboxgl.GeolocateControl | null>(null);
  const currentCoords = useRef<Coords | null>(null);

  // const { finalTranscript } = useSpeechRecognition({
  //   commands: [
  //     {
  //       command: "(show) directions from * to *",
  //       callback: (origin: string, destination: string) => {
  //         const showDirections = async () => {
  //           setRouteIndex(0);

  //           const currentCoordsOrGeocode = (location: string) => {
  //             if (location.toLowerCase() === "my location") {
  //               return Promise.resolve(currentCoords.current!);
  //             }
  //             return geocodeLocation(location);
  //           };

  //           const [originCoords, destinationCoords] = await Promise.all([
  //             currentCoordsOrGeocode(origin),
  //             currentCoordsOrGeocode(destination),
  //           ]);
  //           const map = mapRef.current!;

  //           console.log("RENDERING");
  //           map.fitBounds(
  //             [
  //               new mapboxgl.LngLat(...originCoords),
  //               new mapboxgl.LngLat(...destinationCoords),
  //             ],
  //             { bearing: 0, pitch: 0, padding: 100 }
  //           );

  //           try {
  //             const directionsData = await getDirections(
  //               originCoords,
  //               destinationCoords
  //             );
  //             const route = directionsData.routes[routeIndex];
  //             const directions = route.legs[0].steps.map((step) => {
  //               return {
  //                 instruction: step.maneuver.instruction,
  //                 modifier: step.maneuver.modifier,
  //               };
  //             });

  //             setDirections(directions);

  //             const geojson: Feature<Geometry, GeoJsonProperties> = {
  //               type: "Feature",
  //               properties: {},
  //               geometry: {
  //                 type: "LineString",
  //                 coordinates: route.geometry.coordinates,
  //               },
  //             };

  //             if (map.getSource("route")) {
  //               (map.getSource("route") as any).setData(geojson);
  //             } else {
  //               map.addLayer({
  //                 id: "route",
  //                 type: "line",
  //                 source: {
  //                   type: "geojson",
  //                   data: geojson,
  //                 },
  //                 layout: {
  //                   "line-join": "round",
  //                   "line-cap": "round",
  //                 },
  //                 paint: {
  //                   "line-color": "#066adb",
  //                   "line-width": 12,
  //                   "line-opacity": 0.75,
  //                 },
  //               });
  //             }
  //           } catch (error) {
  //             if (error instanceof Error && error.message === "InvalidInput") {
  //               console.log("Route exceeds maximum limitation");
  //             }
  //           }
  //         };

  //         showDirections();
  //       },
  //     },
  //   ],
  // });

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const containerWidth = getComputedStyle(
      document.querySelector<HTMLDivElement>("div#map")!
    ).width;

    const widthToPanBy = parseInt(containerWidth) / 2.5;
    const panBy: [number, number] = [widthToPanBy, 0];

    map.panBy(panBy, { duration: 1000 });
  }, []);

  useEffect(() => {
    const showDirections = async () => {
      if (!origin || !destination) return;
      setRouteIndex(0);

      const currentCoordsOrGeocode = (location: string) => {
        if (location.toLowerCase() === "my location") {
          return Promise.resolve(currentCoords.current!);
        }
        return geocodeLocation(location);
      };

      const [originCoords, destinationCoords] = await Promise.all([
        currentCoordsOrGeocode(origin),
        currentCoordsOrGeocode(destination),
      ]);
      const map = mapRef.current!;

      console.log("RENDERING");
      map.fitBounds(
        [
          new mapboxgl.LngLat(...originCoords),
          new mapboxgl.LngLat(...destinationCoords),
        ],
        { bearing: 0, pitch: 0, padding: 100 }
      );

      try {
        const directionsData = await getDirections(
          originCoords,
          destinationCoords
        );
        const route = directionsData.routes[routeIndex];
        // console.log(directionsData.routes[routeIndex]);
        const directions = route!.legs[0]!.steps.map(async (step) => {
          console.log(step.maneuver.location[1], step.maneuver.location[0]);
          return {
            terrainInfo:
              step.maneuver.location.length === 2
                ? await climate.fetch_terrain_info(
                    step.maneuver.location[1]!,
                    step.maneuver.location[0]!
                  )
                : undefined,
            type: step.maneuver.type,
            distance: step.distance,
            duration: step.duration,
            instruction: step.maneuver.instruction,
            modifier: step.maneuver.modifier,
            latitude: step.maneuver.location[1]!,
            longitude: step.maneuver.location[0]!,
          };
        });

        setDirections(await Promise.all(directions));

        const geojson: Feature<Geometry, GeoJsonProperties> = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: route!.geometry.coordinates,
          },
        };

        if (map.getSource("route")) {
          (map.getSource("route") as any).setData(geojson);
        } else {
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#066adb",
              "line-width": 12,
              "line-opacity": 0.75,
            },
          });
        }
      } catch (error) {
        if (error instanceof Error && error.message === "InvalidInput") {
          console.log("Route exceeds maximum limitation");
        }
      }
    };
    showDirections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin, destination]);

  useEffect(() => {
    const map = mapRef.current!;
    if (!map) return;
    if (!panToLat || !panToLong) return;
    map.flyTo({
      center: [panToLong!, panToLat!],
      zoom: 20,
      bearing: 0,
      pitch: 75,
      duration: 2000,
      essential: true,
    });
    // TODO: change marker with car icon
    const marker = new mapboxgl.Marker().setLngLat([panToLong!, panToLat!]);

    marker.addTo(map);

    return () => {
      if (marker) marker.remove();
    };
  }, [panToLat, panToLong]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        currentCoords.current = [coords.longitude, coords.latitude];
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      style: "mapbox://styles/mokshit06/cks6ysuez0lvb18qn8fa2zvdb",
      // default coords
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: "map",
      antialias: true,
    });

    mapRef.current = map;

    const geolocationControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      fitBoundsOptions: {
        maxZoom: 10,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    // geolocationControlRef.current = geolocationControl;

    // console.log(geolocationControl);
    map.addControl(geolocationControl);

    map.on("load", () => {
      const layers = map.getStyle().layers;

      // if (process.env.NODE_ENV === "production") {
      geolocationControl.trigger();
      // }

      if (!layers) return;

      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout?.["text-field"]
      )?.id;

      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#0a0f16",
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.8,
          },
        },
        labelLayerId
      );
    });

    return () => {
      // map.remove();
    };
  }, []);

  return (
    <motion.div className={styles.mapWrapper}>
      <div id="map" className={styles.map}></div>
    </motion.div>
  );
}
