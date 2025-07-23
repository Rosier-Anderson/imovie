import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/img/logo.png";
import SearchMovie from "../../searchMovie/page";
import Link from "next/link";
import Login from "@/app/(overview)/login/page";

export default function Header() {
  return (
    <header className=" flex justify-between items-center w-full h-20">
      <div className=" ">
        <Link href="/">
          <Image
            src={Logo}
            className=""
            width={200}
            height={200}
            alt="logo image "
          />
        </Link>
      </div>
      <SearchMovie />
      <Login />
    </header>
  );
}
