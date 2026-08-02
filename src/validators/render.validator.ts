import { z } from "zod";

export const renderSchema = z.object({
  html: z
    .string()
    .min(1, "HTML is required"),

  width: z
    .number()
    .int()
    .positive()
    .max(4000)
    .optional()
    .default(1080),

  height: z
    .number()
    .int()
    .positive()
    .max(4000)
    .optional()
    .default(1080),
});

export type RenderRequest = z.infer<typeof renderSchema>;