"use client";
import { FaGithub } from "react-icons/fa";
import { loginWithGitHub } from "../lib/actions";

export function LoginGitHub() {
  return (
    <section
      aria-labelledby="oauth-login-heading"
      className="flex flex-col items-center gap-4 text-gray-tertiary text-sm"
    >
      <h2 id="oauth-login-heading" className="sr-only">
        Continue with social login
      </h2>

      <div className="flex items-center gap-2 w-full justify-center">
        <hr className="w-16 border-gray-300" aria-hidden="true" />
        <span>Or continue with</span>
        <hr className="w-16 border-gray-300" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={() => loginWithGitHub()}
        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer"
        aria-label="Sign in with GitHub"
      >
        <FaGithub size={20} aria-hidden="true" />
        <span>GitHub</span>
      </button>
    </section>
  );
}
