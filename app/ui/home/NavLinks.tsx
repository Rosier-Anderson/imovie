"use client";

import Link from "next/link";
import clsx from "clsx";
import { NavlinkProps } from "../../lib/definitions";
import { assideLinks } from "../../lib/nav-links";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  const links: NavlinkProps[] = assideLinks;
  return (
    <>
      <nav className=" p-4 w-[300px]">
        <ul className="">
          {links.map(({ href, icon, label }, index) => {
            return (
              <li key={index} className="m-2 ">
                {index == 4 ? (
                  <hr className=" w-full " />
                ) : (
                  <Link
                    href={href}
                    className={clsx(
                      "flex items-center gap-2 p-2 border-none rounded-md text-gray-tertiary hover:text-black-primary",
                      href === pathname ? "bg-gray-primary " : ""
                    )}
                  >
                    {icon}
                    {label}
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
