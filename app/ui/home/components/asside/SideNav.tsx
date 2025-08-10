import React from "react";
import { NavLinks } from "../../NavLinks";

export default function SideNav() {
  return (
    <div className=" h-[400px]   hidden md:block sticky top-20   bg-gray-secondary">
      <aside className="  mr-5 ml-auto p-0 bg-red-primary flex  items-start justify-end text-sm sm:text-lg  ">
        <NavLinks />
      </aside>
    </div>
  );
}
