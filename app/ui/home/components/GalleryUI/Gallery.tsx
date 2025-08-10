"use client";
import React, { Suspense } from "react";
import { moviesResultsProps, tvResultsProps } from "@/app/lib/definitions";
import GalleryCard from "./GalleryCard";
import getGalleryCardDate from "@/app/utils/formatDates";
import getGalleryCardTitle from "@/app/utils/formatGalleryCardTitle";
import GallerySkeleton from "./GallerySkeleton";

export default function Gallery({
  data,
}: {
  data: (moviesResultsProps | tvResultsProps)[];
}) {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <ul className=" grid gap-4 grid-flow-row-dense grid-cols-2 md:grid-cols-5 md:grid-rows-4 dark:text-white">
        {data.map((item, index: number) => {
          return (
            <li key={index} className=" ">
              <GalleryCard
                imgURL={item.poster_path}
                vote={item.vote_count}
                title={getGalleryCardTitle(item)}
                release_date={getGalleryCardDate(item)}
              />
            </li>
          );
        })}
      </ul>
    </Suspense>
  );
}
