import Image from "next/image";
import React from "react";

import Link from "next/link";
import { HiOutlineUserGroup } from "react-icons/hi";
import { galleryCardProps } from "@/app/lib/definitions";

export default function GalleryCard(props: galleryCardProps) {
  const { imgURL, title, release_date, vote } = props;
  const PUBLIC_IMG_URL = process.env.NEXT_PUBLIC_IMAGE_BASE;
  return (
    <div className="rounded-lg border border-gray-secondary dark:border-neutral-secondary shadow-md/5 max-w-[200px] sm:max-w-[300px] min-h-[300px] sm:min-h-[340px]  overflow-hidden">
      <Link href="" className="flex flex-col justify-between items-start ">
        <figure className="size-full  hover:opacity-80 transition-colors ease-in duration-300">
          <Image
            src={`${PUBLIC_IMG_URL}/${imgURL}`}
            width={200}
            height={200}
            alt="movie image"
            className="object-cover rounded-t-md size-full  "
            blurDataURL={`https://image.tmdb.org/t/p/w92${imgURL}`}
            loading="lazy"
          />
        </figure>{" "}
        <div className="flex flex-col  gap-1 p-2  w-full ">
          <h1 className="text-sm sm:text-lg text-left dark:text-white truncate overflow-hidden whitespace-nowrap font-bold">
            {title}
          </h1>
          <div className="flex justify-between  text-xs  font-semibold  text-neutral-secondary  ">
            <span className="font-bold  ">{release_date}</span>
            <span className="flex justify-center items-center leading-0 ">
              <HiOutlineUserGroup className="w-3.5 h-3.5 " />
              {vote}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
