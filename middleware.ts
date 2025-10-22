import { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/profile"];
export default async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;
  const isProtect: boolean = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtect && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next()
}
