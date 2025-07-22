import Link from "next/link";
import { NavlinkProps } from "../lib/definitions";
import { assideLinks } from "../lib/assideLinks";

export function NavLinks() {
  const links: NavlinkProps[] = assideLinks;
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
