"use server";

import z from "zod";
import {  handleAuthConnection } from "./session";

const userInfoSchema = z.object({
  username: z.string().trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});
export async function login(prevState: unknown, formData: FormData) {
  const result = userInfoSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      error: z.treeifyError(result.error),
    };
  }
  try {
  } catch (error) {
    console.log(error);
  }
   const {username, password} = result.data

 await handleAuthConnection(username, password)

}

