"use server";

import z from "zod";
import { userInfoSchema } from "./Zvalidators";


export async function login(prevState: unknown, formData: FormData) {
  const formDataResult = userInfoSchema.safeParse(Object.fromEntries(formData));
  if (!formDataResult.success) {
    return {
      error: z.treeifyError(formDataResult.error),
    };
  }
 
}
