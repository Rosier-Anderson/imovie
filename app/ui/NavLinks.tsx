"use client";

import Link from "next/link";
import clsx from "clsx";
import { NavlinkProps } from "../lib/definitions";
import { assideLinks } from "../lib/nav-links";
import { usePathname } from "next/navigation";

export function NavLinks() {
  let pathname = usePathname();
  const links: NavlinkProps[] = assideLinks;
  return (
    <>
      <nav className="bg-red-400 p-4 w-[300px]">
        <ul className="">
          {links.map((link, index) => {
            return (
              <li key={index} className="m-2 ">
                {index == 4 ? (
                  <hr className=" w-full " />
                ) : (
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex items-center gap-2 p-2 border-none rounded-md",
                      link.href === pathname ? "bg-red-500" : ""
                    )}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}{" "}
        </ul>
      </nav>
    </>
  );
}
