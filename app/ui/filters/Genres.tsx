import { fetchMovieGenres } from "@/app/lib/data";
import React from "react";
import CustomLink from "../CustomLink";

export default async function Genres() {
  const genresData = await fetchMovieGenres();

  const genres = genresData.genres;
  return (
    <div className="w-[800px]  ">
      {" "}
      <ul
        className="flex gap-6  overflow-x-auto [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-gray-primary
  [&::-webkit-scrollbar-track]:rounded-md
  [&::-webkit-scrollbar-thumb]:bg-red-primary
  [&::-webkit-scrollbar-thumb]:rounded-md
 text-sm
"
      >
        {genres.map(({ name: name }: { name: string }, index: number) => {
          return (
            <li
              key={index}
              className=" w- border rounded whitespace-nowrap py-1 px-2 rounded-3xl"
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
