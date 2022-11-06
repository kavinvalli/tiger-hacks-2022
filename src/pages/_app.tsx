import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "mapbox-gl/dist/mapbox-gl.css";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
// for icons
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
