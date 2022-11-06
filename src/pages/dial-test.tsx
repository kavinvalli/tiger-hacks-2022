import React from "react";
import { Box, Flex, Text, useToken } from "@chakra-ui/react";
import { Meter } from "@/components/meter";

export function Dial() {
  // const [borderColor] = useToken("colors", ["pink.700"]);
  const borderColor = "#2977f5";

  // CHANGE:
  // - Font
  // - Colors
  // - Border Width
  // - Box shadow
  return (
    <Flex
      height="30vh"
      width="30vh"
      position="absolute"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className="layer-1"
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        zIndex="100"
      >
        <Box
          className="white-circle"
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          borderRadius="100vh"
          border="2px solid white"
          zIndex="0"
        ></Box>
        {/* https://stackoverflow.com/questions/22415651/half-circle-with-css-border-outline-only */}
        <Box
          className="red-circle"
          position="absolute"
          left="0"
          height="100%"
          width="50%"
          backgroundColor="gray.800"
          borderRadius="100vh 0 0 100vh"
          border={`4px solid ${borderColor}`}
          borderRightWidth="0"
          zIndex="100"
          transformOrigin="right"
          padding="3px"
          transform="rotate(-149deg) translateX(-2px)"
        ></Box>
        <Box
          className="red-horiz-line"
          width="2px"
          height="50%"
          position="absolute"
          bottom="0"
          left="calc(50% - 1px)"
          background={borderColor}
          transformOrigin="top"
          transform="rotate(-149deg)"
          zIndex="150"
        ></Box>
        <Box
          height="150%"
          width="50%"
          background="gray.800"
          position="absolute"
          top="0"
          left="0"
          zIndex="300"
        ></Box>
      </Box>

      <Box
        className="legend"
        width="50%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="300"
      >
        <Text
          position="absolute"
          top="-10px"
          right="10px"
          fontSize="15px"
          fontWeight="bold"
        >
          37 PSI
        </Text>
        <Text
          position="absolute"
          bottom="-10px"
          right="10px"
          fontSize="15px"
          fontWeight="bold"
        >
          28 PSI
        </Text>
      </Box>

      <Flex
        className="center-circle"
        border={`2px solid ${borderColor}`}
        height="50%"
        width="50%"
        borderRadius="100vh"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        background="gray.800"
        position="relative"
        zIndex="400"
      >
        <Text
          color="#2977f560"
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="1px"
          fontWeight="extrabold"
        >
          Speed
        </Text>
        <Text color="white" fontSize="4xl" fontWeight="bold">
          100
        </Text>
        <Text color="white" fontSize="sm">
          km/h
        </Text>
      </Flex>
    </Flex>
  );
}

// export default function DialTest() {
//   return (
//     <Box
//       background="gray.800"
//       color="white"
//       height="100vh"
//       width="100%"
//       position="relative"
//       overflow="hidden"
//     >
//       <Flex
//         position="absolute"
//         bottom="0"
//         left="0"
//         width="100%"
//         maxHeight="35vh"
//         height="600px"
//         justifyContent="center"
//         alignItems="center"
//         columnGap={15}
//       >
//         <Dial />
//         <Dial />
//       </Flex>
//     </Box>
//   );
// }

export default function DialPage() {
  return <Box h="100vh" w="100vw" display="grid" placeContent="center"></Box>;
}
