import { z } from "zod";
import twilio from "twilio";
import { router, publicProcedure } from "../trpc";

const client = twilio(
  "AC473c7e58a9c3b43702468b2bd79d7582",
  process.env.AUTH_TOKEN
);

export const twilioRouter = router({
  sendMessage: publicProcedure
    .input(
      z.object({ pressure: z.string(), name: z.string(), number: z.string() })
    )
    .mutation(async ({ input }) => {
      await client.messages.create({
        to: input.number,
        messagingServiceSid: "MG9966e6c0c6820754fb2bed0fe2c78470",
        body: `ALERT ${input.name}.\nYour car's tire pressure is ${input.pressure} has exceeded the safety limit of 30-35psi and this can lead to severe accidents. We recommend that you stop the car for a few minutes.`,
      });

      return {
        message: "Sent alert",
      };
    }),
});
