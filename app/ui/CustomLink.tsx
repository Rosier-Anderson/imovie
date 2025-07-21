// import { LinkButonType} from "../types/global";
import Link from "next/link";
import { CustomLinkProps } from "../lib/definitions";

export default function CustomLink({
  href,
  className,
  children,
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center p-2  m-2 ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
}