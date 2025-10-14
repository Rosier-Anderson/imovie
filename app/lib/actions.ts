"use server";

import z from "zod";
import { userInfoSchema } from "./Zvalidators";
import { createSession } from "./session";
import { redirect } from "next/navigation";

const testUser = {
  id: "1",
  user: "anderson",
  pwd: "anderson",
};

export async function login(prevState: unknown, formData: FormData) {
  const formDataResult = userInfoSchema.safeParse(Object.fromEntries(formData));
  if (!formDataResult.success) {
    return {
      errors: z.treeifyError(formDataResult.error),
    };
  }
  const { user, pwd } = formDataResult.data;
  if (user !== testUser.user || pwd !== testUser.pwd) {
    return {
      errors: {
        properties: {
 user: ["Invalid user or password"],
        }
       
      },
    };
  }

  await createSession(testUser.id);
  redirect("/")
}

// export function logout() {
//   //handle logout
// }
