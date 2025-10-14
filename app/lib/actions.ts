"use server";

import z from "zod";
import { handleAuthUserConnection } from "./auth";
import { userInfoSchema } from "./validators";
import { parseJwt } from "../utils/parseJWT";


type userInfoProps = {
  username: string;
  roles: [number];
};
type tokenProps = {
  accessToken: string;
};

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
      console.log(await response?.json());
    }
    const token: tokenProps = await response?.json();
    const { UserInfo }: { UserInfo: userInfoProps } = parseJwt(
      token?.accessToken
    );
console.log(UserInfo)

  } catch (error) {
    console.log(error);
  }
}
