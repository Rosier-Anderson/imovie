"use server";

import z from "zod";
import { handleAuthUserConnection } from "./auth";
import { userInfoSchema } from "./validators";
import { extractJwtFromCookieString } from "../utils/extractJwtFromCokkie";

export async function login(prevState: unknown, formData: FormData) {
  const formDataResult = userInfoSchema.safeParse(Object.fromEntries(formData));
  if (!formDataResult.success) {
    return {
      error: z.treeifyError(formDataResult.error),
    };
  }
  try {
    const { user, pwd } = formDataResult.data;
    const response = await handleAuthUserConnection(user, pwd);
    if (!response?.ok) {
      const { msg } = await response?.json();
    }
    const cookies = response?.headers?.getSetCookie().toString();
    console.log(extractJwtFromCookieString(cookies));
  } catch (error) {
    console.log(error);
  }
}
