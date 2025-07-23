import CustomLink from "@/app/ui/CustomLink";
import React from "react";

export default function Login() {
  return (
    <div>
      <CustomLink href="/login" className="bg-red-600 rounded-md ">
        Sign in
      </CustomLink>
    </div>
  );
}
