import useDirections, { Direction } from "@/hooks/use-directions";
import {
  Box,
  Button,
  Flex,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";

interface DirectionPanelProps {
  directionsNext: (lat: number, long: number) => void;
}

export default function DirectionPanel({
  directionsNext,
}: DirectionPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directions = useDirections((state) => state.directions);
  console.log(directions);
  return (
    <Tabs
      // display="flex"
      isFitted
      pos="absolute"
      right="20px"
      top="20px"
      // bg="white"
      backdropFilter="blur(4px) brightness(60%)"
      boxShadow="0 10px 60px rgba(0, 0, 0, 0.3)"
      color="white"
      zIndex={10}
      defaultIndex={1}
      borderRadius="lg"
      // flexDir="column"
    >
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Step by Step</Tab>
      </TabList>
      <TabPanels p="1.2rem">
        <TabPanel>Overview</TabPanel>
        <TabPanel>
          {directions[currentIndex] && (
            <div>{directions[currentIndex]?.instruction}</div>
          )}
          <Flex gap={2}>
            <Button
              disabled={
                directions[currentIndex - 1] === undefined ||
                directions[currentIndex - 1] === null
              }
              w="full"
              colorScheme="blue"
              onClick={() => {
                directionsNext(
                  directions[currentIndex - 1]!.latitude,
                  directions[currentIndex - 1]!.longitude
                );
                setCurrentIndex(currentIndex - 1);
              }}
            >
              Previous
            </Button>
            <Button
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
              }}
            >
              Next
            </Button>
          </Flex>
          {/* {directions[currentIndex + 1] === undefined && (
            <Button colorScheme="blue" onClick={() => setCurrentIndex(0)}>
              Close
            </Button>
          )} */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
