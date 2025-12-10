import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { ENV } from "./_core/env";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
        name: z.string().min(1),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          const mailchimpApiKey = ENV.mailchimpApiKey;
          const mailchimpListId = ENV.mailchimpListId;

          if (!mailchimpApiKey || !mailchimpListId) {
            throw new Error("Mailchimp credentials not configured");
          }

          const serverPrefix = mailchimpApiKey.split("-").pop();
          const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`;

          const response = await fetch(mailchimpUrl, {
            method: "POST",
            headers: {
              "Authorization": `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString("base64")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email_address: input.email,
              status: "subscribed",
              merge_fields: {
                FNAME: input.name,
                MESSAGE: input.message || "",
              },
            }),
          });

          if (!response.ok) {
            const error = await response.json();
            console.error("Mailchimp error:", error);
            throw new Error(error.detail || "Failed to subscribe");
          }

          return { success: true, message: "Lead adicionado com sucesso!" };
        } catch (error) {
          console.error("Lead subscription error:", error);
          throw new Error(error instanceof Error ? error.message : "Failed to subscribe");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
