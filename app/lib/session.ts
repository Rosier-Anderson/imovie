"use server";

import { cookies } from "next/headers";

type userPayload = {
  username: string;
  password: string;
};

export async function createSession(accessToken: string) {
  const expireDate = new Date(Date.now() + 40 * 1000); // 40 seconds
  const jwt = (await cookies()).set("jwt", accessToken, {
    httpOnly: true,
    secure: true,
    expires: expireDate,
  });
  console.log("JWT:", jwt);
}

export async function getToken(jwt: string | undefined) {
  if (!jwt) {
    console.log("No token provided!");
    return null;
  }
  return jwt;
}
