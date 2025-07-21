import React from "react";
import { NavLinks } from "./NavLinks";

export default function SideNav() {
  return (
    <>
      {" "}
      <aside className=" flex justify-end items-start row-span-2 max-md:hidden">
        <NavLinks/>
      </aside>
    </>
  );
}
