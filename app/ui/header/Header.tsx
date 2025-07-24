import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/img/logo.png";

import Link from "next/link";
import Login from "@/app/(overview)/login/page";
import SearchInput from "../search";

export default function Header() {
  return (
    <div className="w-full border-b">
      <header className=" flex justify-between items-center max-w-[1200px]  h-20 mx-auto ">
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
        <SearchInput />
        <Login />
      </header>
    </div>
  );
}
