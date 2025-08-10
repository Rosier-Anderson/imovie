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
                  <hr className=" w-full dark:text-neutral-secondary" />
                ) : (
                  <Link
                    href={href}
                    className={clsx(
                      "flex items-center gap-2 p-2 border-none rounded-md text-black hover:text-black-primary dark:hover:text-white",
                      href === pathname
                        ? "bg-gray-primary dark:bg-neutral-secondary dark:text-white "
                        : ""
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
