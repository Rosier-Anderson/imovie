import Link from "next/link";
import { NavlinkProps } from "../lib/definitions";
import { linksData } from "../lib/linksData";

export function NavLinks() {
  const links: NavlinkProps[] = linksData;
  return (
    <>
      <nav className="">
        <ul className="">
          {links.map((link, index) => {
            return (
              <li key={index} className="">
                <Link href={link.href}>
                  {index === 4 ? <hr /> : link.label}
                </Link>
              </li>
            );
          })}{" "}
        </ul>
      </nav>
    </>
  );
}
