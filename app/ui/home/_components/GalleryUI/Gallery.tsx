import React, { Suspense } from "react";
import { moviesResultsProps, tvResultsProps } from "@/app/lib/definitions";
import GalleryCard from "./GalleryCard";

import GallerySkeleton from "./GallerySkeleton";
import { getGalleryCardDate, getGalleryCardTitle } from "@/app/utils";

export default function Gallery({
  data,
  gallleryGenre,
}: {
  data: (moviesResultsProps | tvResultsProps)[];
  gallleryGenre: string;
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
                id={item.id}
                genre={gallleryGenre}
              />
            </li>
          );
        })}
      </ul>
    </Suspense>
  );
}
