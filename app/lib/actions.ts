"use server";

<<<<<<< HEAD
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginWithCredentials(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", { formData });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
=======
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
        },
      },
    };
>>>>>>> feature/auth
  }

  await createSession(testUser.id);
  redirect("/");
}
<<<<<<< HEAD
export async function loginWithGitHub() {
  try {
    await signIn("github", { redirectTo: "/profile" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function logout() {}
=======

// export function logout() {
//   //handle logout
// }
>>>>>>> feature/auth
