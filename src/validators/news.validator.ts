import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .trim()
    .min(5, "Title must contain at least 5 characters")
    .max(200, "Title cannot exceed 200 characters"),

  summary: z
    .string()
    .min(1, "Summary is required")
    .trim()
    .min(20, "Summary must contain at least 20 characters")
    .max(600, "Summary cannot exceed 600 characters"),

  image: z
    .string()
    .min(1, "Image URL is required")
    .url("Invalid image URL"),
});

export type NewsRequest = z.infer<typeof newsSchema>;