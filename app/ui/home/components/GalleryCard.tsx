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
    <div className="rounded-lg border border-gray-secondary shadow-md/5 w-[200px] min-h-[340px]  ">
      <div className=" overflow-hidden   ">
        <Link href="" className="flex flex-col justify-between items-start">
          <figure className="size-full  ">
            <Image
              src={`${PUBLIC_IMG_URL}/${imgURL}`}
              width={200}
              height={200}
              alt="movie image"
              className="object-cover rounded-t-md size-full  "
              loading="lazy"
            />
          </figure>{" "}
          <div className="flex flex-col  gap-1 p-2  w-full ">
            <h1 className="text-sm sm:text-lg text-left truncate overflow-hidden whitespace-nowrap font-bold">
              {title}
            </h1>
            <div className="flex justify-between  text-xs  font-semibold  text-gray-tertiary ">
              <span className="font-bold text-gray-tertiary">{release_date}</span>
              <span className="flex justify-center items-center leading-0 ">
                <HiOutlineUserGroup className="w-3.5 h-3.5 " />
                {vote}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
