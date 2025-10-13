"use client";
import React, { useActionState } from "react";
import { login } from "../lib/actions";

function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form action={loginAction} className=" flex flex-col gap-6">
      <label
        htmlFor="user"
        className="border border-gray-secondary rounded relative "
      >
        <input
          id="user"
          type="text"
          name="user"
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
          id="pwd"
          type="pwd"
          name="pwd"
          placeholder="Password"
          className="w-full h-11 text-sm p-2 focus:outline-gray-secondary"
        />
      </label>
      <span className="whitespace-nowrap">
        {state?.error.properties && (
          <p className="text-red-primary">
            {state.error.properties?.pwd?.errors}
          </p>
        )}
      </span>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-11 rounded bg-red-primary font-semibold "
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
