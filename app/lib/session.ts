"use server";

import { auth } from "@/auth";

export async function createSession() {
  const session = await auth;
  console.log(session);
}
