import img from "../../../public/assets/img/logo.png";
import Link from "next/link";
import Image from "next/image";
import React, { isValidElement } from "react";

type LogoProps = {
  children?: React.ReactElement;
};
export const Logo = (children: LogoProps) => {
  return (
    <div className="h-20 flex items-center ">
      <Link href="/" className="flex items-center justify-center">
        <Image src={img} className="w-15 h-15" alt="logo image " priority />
        {children && isValidElement(children) && children}
      </Link>
    </div>
  );
};
