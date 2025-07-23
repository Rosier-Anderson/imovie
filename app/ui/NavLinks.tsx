import Link from "next/link";
import { NavlinkProps } from "../lib/definitions";
import { assideLinks } from "../lib/assideLinks";
import { Span } from "next/dist/trace";

export function NavLinks() {
  const links: NavlinkProps[] = assideLinks;
  return (
    <>
      <nav className="bg-red-400 p-4 w-[300px]">
        <ul className="">
          {links.map((link, index) => {
            return (
              <li key={index} className="p-2 ">
                {index == 4 ? (
                  <hr className=" w-full " />
                ) : (
                  <Link href={link.href} className=" flex  gap-2">
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
