import { Suspense } from "react";
import { Logo } from "../ui/header/Logo";
import LoginForm from "./login-form";
import { LoginGitHub } from "./login-github-page";
import { auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();

  console.log(session)
  return (
    <div className="flex h-screen  bg-neutral-primary">
      <article className="bg-white w-sm min-h-3/6 mx-auto my-auto flex justify-center rounded-md ">
        <section className="w-full m-6 flex flex-col gap-10">
          <div className="flex flex-col items-center ">
            <Logo />
            <h1 className="font-bold text-2xl/loose">
              Sign in to Simple Movie App
            </h1>
          </div>
          <div className="">
            <Suspense>
              <LoginForm />
            </Suspense>
            <Suspense>
              <LoginGitHub />
            </Suspense>
          </div>
        </section>
      </article>
    </div>
  );
}
