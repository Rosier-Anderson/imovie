"use client";
import { useSearchParams } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className=" flex flex-col gap-6">
      <label
        htmlFor="user"
        className="border border-gray-secondary rounded relative "
      >
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          className="block w-full h-11 text-sm p-2 focus:outline-gray-secondary"
        />
      </label>

      {/* Password Field */}
      <label
        htmlFor="pwd"
        className="border border-gray-secondary rounded pb-0"
      >
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="w-full h-11 text-sm p-2 focus:outline-gray-secondary"
        />
      </label>
      <span className="whitespace-nowrap">
        {errorMessage && (
          <>
            <p className="text-sm text-red-primary">{errorMessage}</p>
          </>
        )}
      </span>
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      {/* Submit Button */}
      <SubmitButton />
    </form>
  );
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="w-full h-11 rounded bg-red-primary font-semibold  cursor-pointer"
    >
      Sign In
    </button>
  );
}
export default LoginForm;
