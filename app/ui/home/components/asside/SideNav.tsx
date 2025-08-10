import React from "react";
import { NavLinks } from "../../NavLinks";

export default function SideNav() {
  return (
    <div className=" h-[400px] w-[300px] overflow-hidden  hidden md:block sticky top-30">
      <aside className="flex items-start justify-end text-sm sm:text-lg  ">
        <NavLinks />
      </aside>
    </div>
  );
}
