"use client";

import { useParams, usePathname } from "next/navigation";

function UrlMovieHander() {
  const pathname = usePathname();

  return console.log(pathname, "anderson");
}

export default UrlMovieHander;
