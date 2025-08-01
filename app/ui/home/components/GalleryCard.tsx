import Image from "next/image";
import React from "react";

import Link from "next/link";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function GalleryCard({
  title,
  imgURL,
  vote,
  release_date,
}: {
  title: string;
  imgURL: string;
  vote: number;
  release_date: string;
}) {
  const PUBLIC_IMG_URL = process.env.NEXT_PUBLIC_IMAGE_BASE;
  return (
    <div className="rounded-lg border shadow-md w-[200px] min-h-[340px]  ">
      <div className=" overflow-hidden   ">
        <Link href="" className="flex flex-col justify-between ">
          <figure className="size-full border-none ">
            <Image
              src={`${PUBLIC_IMG_URL}/${imgURL}`}
              width={200}
              height={200}
              alt="movie image"
              className="object-cover rounded-t-md size-full  "
              loading="lazy"
            />
          </figure>{" "}
          <div className="p-2">
            <h1 className=" truncate overflow-hidden whitespace-nowrap font-bold">
              {title}
            </h1>
            <div className="flex justify-between items-center text-sm font-semibold ">
              <span>{release_date}</span>
              <span className="flex justify-center items-center gap-1"><HiOutlineUserGroup className="w-4 h-4" />{vote}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
