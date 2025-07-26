import React from "react";
import { NavLinks } from "./NavLinks";

export default function SideNav() {
  return (
    <>
      {" "}
      <aside className=" flex justify-end items-start max-w-[200px] row-span-3 col-span-1 max-md:hidden ">
        <NavLinks />
      </aside>
    </>
  );
}
