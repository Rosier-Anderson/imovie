import CustomLink from "@/app/ui/CustomLink";
import React from "react";

export default function Login() {
  return (
    <div className="hidden md:block text-white font-bold">
      <CustomLink href="/login" className="bg-red-primary rounded-md ">
        Sign in
      </CustomLink>
    </div>
  );
}
