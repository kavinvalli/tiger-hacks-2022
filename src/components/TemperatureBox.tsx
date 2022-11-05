import { Weather } from "@/types/weather";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Climate } from "../../wasm/pkg";

const climate = Climate.new();

export default function TemperatureBox() {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const res = await climate.fetch_terrain_info(
        pos.coords.latitude,
        pos.coords.longitude
      );
      setWeather(res);
    });
  }, []);
  return (
    <Box
      pos="absolute"
      top="20px"
      left="20px"
      display="flex"
      p="20px 25px"
      zIndex={1}
      // bg="#12121250"
      backdropFilter="blur(4px) brightness(60%)"
      boxShadow="0 10px 60px rgba(0, 0, 0, 0.3)"
      alignItems="flex-start"
      borderRadius="xl"
    >
      <Box
        as="img"
        w="auto"
        src="http://openweathermap.org/img/wn/10d@2x.png"
      />
      <Flex direction="column" ml="3">
        <Heading color="white">
          {((weather?.main.temp ?? 32 - 32) * 59).toFixed(2)}°C
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.700">
          <strong>Wind Speed: </strong> {weather?.wind.speed.toFixed(2)} m/s
        </Text>
        <Text fontSize="sm" color="whiteAlpha.700">
          <strong>Rain: </strong>
          {weather?.rain?.["1h"] ?? "00"}mm (last 1 hour)
        </Text>
        <Text fontSize="sm" color="whiteAlpha.700">
          <strong>Visibility: </strong>
          {weather?.visibility}km
        </Text>
      </Flex>
    </Box>
  );
}

// format for icon
// http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
