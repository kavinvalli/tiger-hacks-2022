import useDirections from "@/hooks/use-directions";
import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import DirectionPanel from "./DirectionPanel";

interface NavigationInputProps {
  callback: (origin: string, destination: string) => void;
  directionsNext: (lat: number, long: number) => void;
}

export default function NavigationInput({
  callback,
  directionsNext,
}: NavigationInputProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDirectionPanel, setShowDirectionPanel] = useState(false);

  return showDirectionPanel ? (
    <DirectionPanel directionsNext={directionsNext} />
  ) : (
    <Box
      zIndex={10}
      backdropFilter="blur(4px) brightness(60%)"
      boxShadow="0 10px 60px rgba(0, 0, 0, 0.3)"
      p={10}
      display="flex"
      flexDir="column"
      gap={2}
      w="full"
      maxW="500px"
      as="form"
      pos="absolute"
      right="20px"
      top="20px"
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("form submitted");
        callback(origin, destination);
        setShowDirectionPanel(true);
      }}
    >
      <Input
        type="text"
        w="full"
        maxW="500px"
        placeholder="Origin"
        bg="white"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <Input
        type="text"
        bg="white"
        w="full"
        maxW="500px"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
}
