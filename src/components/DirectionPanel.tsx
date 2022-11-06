import useDirections, { Direction } from "@/hooks/use-directions";
import {
  Box,
  Button,
  Divider,
  Flex,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  type ButtonProps,
} from "@chakra-ui/react";
import { useState } from "react";
import { pressureAnalyzer } from "@/utils/pressure";
import { useStore } from "@/hooks/central";

function getIcon(type: string, modifier: string) {
  let icon = modifier
    ? modifier.replace(/\s+/g, "-").toLowerCase()
    : type.replace(/\s+/g, "-").toLowerCase();

  if (type === "arrive" || type === "depart") {
    icon = type;
  }

  if (type === "roundabout" || type === "rotary") {
    icon = "roundabout";
  }

  return icon;
}

function BlueButton(props: ButtonProps) {
  return (
    <Button
      bg="rgb(14 165 233/1)"
      px={8}
      color="white"
      fontSize="md"
      _active={{
        bg: "rgb(56 189 248/1)",
      }}
      _hover={{
        bg: "rgb(56 189 248/1)",
      }}
      h={12}
      type="submit"
      rounded="lg"
      {...(props as any)}
    />
  );
}

interface DirectionPanelProps {
  directionsNext: (lat: number, long: number) => void;
}

function formatDistance(m: number) {
  const mi = m / 1609.344;
  if (mi >= 100) return mi.toFixed(0) + "mi";
  if (mi >= 10) return mi.toFixed(1) + "mi";
  if (mi >= 0.1) return mi.toFixed(2) + "mi";
  return (mi * 5280).toFixed(0) + "ft";
}

export default function DirectionPanel({
  directionsNext,
}: DirectionPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const directions = useDirections((state) => state.directions);
  const store = useStore();

  return (
    <Tabs
      // display="flex"
      isFitted
      size="md"
      pos="absolute"
      right="20px"
      // border="2px solid rgb(30, 41, 59)"
      top="20px"
      maxH="50vh"
      overflowY="auto"
      backdropFilter="blur(4px) brightness(60%)"
      shadow="xl"
      color="white"
      zIndex={10}
      borderRadius="xl"
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
    >
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Step by Step</Tab>
      </TabList>
      <TabPanels>
        <TabPanel px={6} py={4}>
          <OrderedList listStyleType="none" marginInlineStart="0">
            {directions.map((direction: Direction, index: number) => (
              <Box
                key={index}
                cursor="pointer"
                onClick={() => {
                  directionsNext(direction.latitude, direction.longitude);
                  setCurrentIndex(index);
                  setTabIndex(1);

                  const time_covered = directions
                    .slice(0, index)
                    .reduce(
                      (total, direction) => total + direction.duration,
                      0
                    );
                  // direction.terrainInfo.weather
                  pressureAnalyzer.set_duration_driving(time_covered / 60);
                  pressureAnalyzer.set_current_temp(
                    direction.terrainInfo.main.temp
                  );
                  store.setPressure(pressureAnalyzer.get_optimal_pressure());
                }}
                rounded="lg"
                bg={
                  currentIndex == index ? "rgba(255,255,255, 0.3)" : undefined
                }
              >
                <Flex alignItems="center">
                  <Box
                    // as="span"
                    mx={2.5}
                    // my={2.5}
                    display="block"
                    height="25px"
                    w="25px"
                    opacity={0.7}
                    backgroundSize="contain"
                    className={`directions-icon directions-icon-${getIcon(
                      direction.type,
                      direction.modifier
                    )}`}
                  />
                  <Box py={2.5}>
                    <ListItem key={index} pb={1}>
                      {direction.instruction}
                    </ListItem>
                    <Text
                      fontWeight="700"
                      color="#70fbff"
                      opacity={0.8}
                      fontSize="sm"
                    >
                      {formatDistance(direction.distance)}
                    </Text>
                  </Box>
                </Flex>
                <Divider />
              </Box>
            ))}
          </OrderedList>
        </TabPanel>
        <TabPanel p={8}>
          <Text maxW="350px" fontSize="xl" mb={4}>
            {directions[currentIndex] && (
              <div>{directions[currentIndex]?.instruction}</div>
            )}
          </Text>
          <Flex gap={2}>
            <BlueButton
              disabled={
                directions[currentIndex - 1] === undefined ||
                directions[currentIndex - 1] === null
              }
              w="full"
              onClick={() => {
                directionsNext(
                  directions[currentIndex - 1]!.latitude,
                  directions[currentIndex - 1]!.longitude
                );
                setCurrentIndex(currentIndex - 1);

                const time_covered = directions
                  .slice(0, currentIndex)
                  .reduce((total, direction) => total + direction.duration, 0);
                // direction.terrainInfo.weather
                pressureAnalyzer.set_duration_driving(time_covered / 60);
                pressureAnalyzer.set_current_temp(
                  directions[currentIndex - 1]!.terrainInfo.main.temp
                );
                store.setPressure(pressureAnalyzer.get_optimal_pressure());
              }}
            >
              Previous
            </BlueButton>
            <BlueButton
              disabled={
                directions[currentIndex + 1] === undefined ||
                directions[currentIndex + 1] === null
              }
              colorScheme="blue"
              // mt="2"
              w="full"
              onClick={() => {
                directionsNext(
                  directions[currentIndex + 1]!.latitude,
                  directions[currentIndex + 1]!.longitude
                );
                setCurrentIndex(currentIndex + 1);

                const time_covered = directions
                  .slice(0, currentIndex + 2)
                  .reduce((total, direction) => total + direction.duration, 0);
                // direction.terrainInfo.weather
                pressureAnalyzer.set_duration_driving(time_covered / 60);
                pressureAnalyzer.set_current_temp(
                  directions[currentIndex + 1]!.terrainInfo.main.temp
                );
                store.setPressure(pressureAnalyzer.get_optimal_pressure());
              }}
            >
              Next
            </BlueButton>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
