import Map from "@/components/map";
import NavigationInput from "@/components/NavigationInput";
import TemperatureBox from "@/components/TemperatureBox";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { trpc } from "../utils/trpc";

function Home() {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const setData = (origin: string, destination: string) => {
    console.log("form submitted 2");
    setOrigin(origin);
    setDestination(destination);
  };

  const flyToLatLong = (lat: number, long: number) => {
    setLat(lat);
    setLong(long);
  };

  return (
    <Box pos="relative">
      <TemperatureBox />
      <NavigationInput callback={setData} directionsNext={flyToLatLong} />
      <Map
        origin={origin}
        destination={destination}
        panToLat={lat}
        panToLong={long}
      />
    </Box>
  );
}

export default Home;
