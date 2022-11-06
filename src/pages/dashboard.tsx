import Map from "@/components/map";
import NavigationInput from "@/components/NavigationInput";
import TemperatureBox from "@/components/TemperatureBox";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Dial } from "@/components/dial";
import { useStore } from "@/hooks/central";
import { Meter, PressureMeter } from "@/components/meter";
import { pressureAnalyzer } from "@/utils/pressure";
import { trpc } from "@/utils/trpc";
import { signIn } from "next-auth/react";

function Home() {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const store = useStore();
  const sendTwilioMessage = trpc.twilio.sendMessage.useMutation({
    onSuccess() {
      alert("SENT ALERT MAIL");
    },
    onError() {
      alert("SENDING EMAIL FAILED");
    },
  });

  useEffect(() => {
    pressureAnalyzer.set_speed(store.speed);
    console.log("updating pressure");
    store.setPressure(pressureAnalyzer.get_optimal_pressure());
  }, [store.speed]);

  useEffect(() => {
    const roundedPressure = Math.round(store.pressure).toString();
    document.querySelector("#psi")!.innerHTML = roundedPressure;

    if (store.pressure > 37 || store.pressure < 29) {
      // TODO: connect auth0 and get name from there
      sendTwilioMessage.mutate({
        name: "John",
        number: process.env.NEXT_PUBLIC_PHONE_NUMBER as any,
        pressure: roundedPressure,
      });
    }
  }, [store.pressure]);

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
      <Box
        position="absolute"
        h="305px"
        display="flex"
        gap="8rem"
        w="max-content"
        bottom="1rem"
        left="50%"
        transform="translateX(-50%)"
        rounded="60px"
        p="35px 40px 0 40px"
        border="2px solid rgb(30 41 59/1)"
        bg="#00060E"
        overflow="hidden"
      >
        <Box
          contentEditable
          onInput={() => {
            const tspan = document.querySelector("#speed");
            if (!tspan) return;

            store.setSpeed(parseInt(tspan.innerHTML));
          }}
          _focus={{ outline: "none" }}
        >
          <Dial deg={((store.speed - 20) / 160) * 240} />
          <Meter height="250px" />
        </Box>
        <Box>
          <Dial deg={((store.pressure - 29) / 8) * 240} />
          <PressureMeter height="250px" />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
