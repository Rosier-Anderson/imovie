import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { LoginUser } from "./app/lib/api/loginUser";
import { jwtDecode } from "jwt-decode";
import z from "zod";
type userInfo = {
  username: string;
  roles: [number];
};

async function getUser(username: string, password: string) {
  const response = await LoginUser(username, password);
  if (!response?.ok) {
    return { error: "Failed to fecth user" };
  }
  const { accessToken } = await response?.json();
  const { UserInfo }: { UserInfo: userInfo } = jwtDecode(accessToken);
  console.log(UserInfo);
  return UserInfo.username;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username, password);
          return user;
          if (!user) return null;
        }
        console.log("Invalid credentials");
        return null;
        //
      },
    }),
  ],
});
