import { fetchMovieGenres } from "@/app/lib/data";
import React from "react";

export default async function Genres(genres: []) {
  

  const data = genres;
  return (
    <div className="w-[800px] overflow-hidden ">
      {" "}
      <ul
        className="flex gap-2
         py-4  overflow-x-auto scroll-smooth webkit-scrollbar-style
 text-sm dark:text-white
"
      >
        {data.map(({ name: name }: { name: string }, index: number) => {
          return (
            <li
              key={index}
              className="min-w-32 text-center border border-gray-secondary  whitespace-nowrap p-2 rounded-3xl cursor-pointer"
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
