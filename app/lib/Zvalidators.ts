import z from "zod";

export const userInfoSchema = z.object({
  user: z.string().trim(),
  pwd: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});
