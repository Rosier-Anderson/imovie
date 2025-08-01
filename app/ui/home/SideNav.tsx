import React from "react";
import { NavLinks } from "./NavLinks";

export default function SideNav() {
  return (
    <>
      {" "}
      <aside className="sticky top-10  flex justify-end items-start max-w-[200px] row-span-3 col-span-1 max-md:hidden text-sm sm:text-lg  ">
        <NavLinks />
      </aside>
    </>
  );
}
