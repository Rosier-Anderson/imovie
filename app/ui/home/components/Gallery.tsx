import React, { Suspense } from "react";
import { moviesProps } from "../../../lib/definitions";
import { fetchAllMovie } from "@/app/lib/data";
import GalleryCard from "./GalleryCard";
import CardSkeleton from "../CardSkeleton";

export default async function Gallery() {
  const data = await fetchAllMovie();
  const movies = data.results;

  return (
    <ul className=" grid gap-8 grid-flow-col  grid-rows-4 grid-cols-5 size-max mt-4">
      {movies.map((movie: moviesProps, index: number) => {
        const [year, month] = movie.release_date.split("-");
        const newRelease_date = `${month}-${year}`;

        return (
          <li key={index} className="">
            <Suspense fallback={<CardSkeleton/>}>
               <GalleryCard
              imgURL={`${movie.poster_path}`}
              title={`${movie.title}`}
              vote={movie.vote_count}
              release_date={newRelease_date}
            />
            </Suspense>
           
          </li>
        );
      })}
    </ul>
  );
}
