"use client";
import { Logo } from "./Logo";
import React, { useEffect, useState } from "react";

import SearchInput from "../Search/SearchInput";
import Login from "@/app/(auth)/login/page";

export default function Header() {
  const [showOnMobile, setShowOnMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleShowOnMobile = (): void => {
      const vw = window.innerWidth;
      setShowOnMobile(vw >= 768);
    };
    handleShowOnMobile();
    window.addEventListener("resize", handleShowOnMobile);
    return () => window.removeEventListener("resize", handleShowOnMobile);
  }, []);
  // just log to the console
  useEffect(() => {
    console.log(showOnMobile);
  }, [showOnMobile]);
  return (
    <div className="w-full border-b h-20">
      <header className=" flex justify-between items-center max-w-[1200px] h-full mx-auto ">
        <Logo />
        <SearchInput />
        <Login />
      </header>
    </div>
  );
}
