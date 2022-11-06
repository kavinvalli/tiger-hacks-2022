import { Box } from "@chakra-ui/react";
import { Meter } from "./meter";

export function Dial({ deg }: { deg: number }) {
  return (
    <Box
      style={
        {
          "--p": `${deg}deg`,
          "--f": "calc(360deg - var(--p))",
        } as any
      }
      css={{
        marginLeft: "-10px",
        marginTop: "-10px",
        zIndex: 2,
        height: "308px",
        width: "308px",
        position: "absolute",
        border: "double 1em transparent",
        borderRadius: "9999px",
        transform: "rotate(-120deg) scaleX(-1)",
        backgroundImage:
          "linear-gradient(#00060E, #00060E),conic-gradient(#00060E var(--f), #00D1FF var(--p))",
        backgroundOrigin: "border-box",
        WebkitBackgroundClip: "content-box,border-box",
        backgroundClip: "content-box,border-box",
      }}
    />
  );
}
