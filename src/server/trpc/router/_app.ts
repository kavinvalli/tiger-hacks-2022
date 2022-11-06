import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { twilioRouter } from "./twilio";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  twilio: twilioRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
