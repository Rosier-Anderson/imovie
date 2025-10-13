"use server";

import { cookies } from "next/headers";

type userPayload = {
  username: string;
  password: string;
};
export async function createSession(userInfo: userPayload) {
  const { username, password } = userInfo;

  // console.log(response?.headers.getSetCookie());
}
export async function getSession() {} // get the suer session
