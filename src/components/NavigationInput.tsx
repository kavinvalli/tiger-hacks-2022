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
      backdropFilter="blur(8px) brightness(0.6) "
      shadow="lg"
      rounded="xl"
      p={7}
      display="flex"
      flexDir="column"
      border="2px solid rgb(30 41 59/1)"
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
        rounded="md"
        bg="rgb(30 41 59/1)"
        border="none"
        h={12}
        color="white"
        fontSize="lg"
        _focus={{ border: "none" }}
        px={6}
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <Input
        type="text"
        w="full"
        maxW="500px"
        placeholder="Destination"
        rounded="md"
        color="white"
        bg="rgb(30 41 59/1)"
        border="none"
        h={12}
        fontSize="lg"
        _focus={{ border: "none" }}
        px={6}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Button
        mt={2}
        bg="rgb(14 165 233/1)"
        px={8}
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
      >
        Submit
      </Button>
    </Box>
  );
}
