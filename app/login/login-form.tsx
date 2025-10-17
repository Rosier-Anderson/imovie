"use client";
import { useSearchParams } from "next/navigation";
import React, { useActionState } from "react";

function LoginForm() {
  return (
    <form className=" flex flex-col gap-6">
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
      <span className="whitespace-nowrap"></span>

      {/* Submit Button */}
      <SubmitButton />
    </form>
  );
}
function SubmitButton() {
  return (
    <button
      // aria-disabled={pending}
      type="submit"
      className="w-full h-11 rounded bg-red-primary font-semibold  cursor-pointer"
    >
      Sign In
    </button>
  );
}
export default LoginForm;
