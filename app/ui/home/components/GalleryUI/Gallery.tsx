"use client";
import React, { Suspense, lazy } from "react";
import {
  galleryCardProps,
  galleryKeysProps,
  moviesResultsProps,
  tvResultsProps,
} from "@/app/lib/definitions";
import CardSkeleton from "./GalleryCardSkeleton";
import getMediaDate from "@/app/helpers/formatDates";
const GalleryCard = lazy(() => import("./GalleryCard"));
export default function Gallery({
  data,
  galleryKeys,
}: {
  data: (moviesResultsProps | tvResultsProps)[];
  galleryKeys: galleryKeysProps;
}) {
  const { imgURL, title, vote, release_date }: galleryKeysProps = galleryKeys;
  return (
    <ul className=" grid gap-8 grid-flow-col  grid-rows-4 grid-cols-5 size-max mt-4">
      {data.map((item, index: number) => {
        const isMovie = "title" in item && "release_date" in item;
        const isTV = "name" in item && "first_air_date" in item;
        const date = getMediaDate(item);
        return (
          <li key={index} className="">
            <Suspense fallback={<CardSkeleton />}>
              <GalleryCard
                imgURL={`${item[imgURL]}`}
                title={`${
                  isMovie ? item.title : isTV ? item.name : "undefied"
                } `}
                vote={item.vote}
                release_date={date}
              />
            </Suspense>
          </li>
        );
      })}
    </ul>
  );
}
