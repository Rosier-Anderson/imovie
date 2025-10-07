import React from "react";

async function LoginForm() {
  "use server";

  return (
    <form
      method="POST"
      action="api/login"
      className="flex flex-col text-base space-y-4"
    >
      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className=" hover:bg-red-700 text-white font-semibold py-2 rounded-md transition-colors duration-200 bg-red-primary"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
