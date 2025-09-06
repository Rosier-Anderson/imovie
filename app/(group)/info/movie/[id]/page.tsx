import { fetchMovieDetails } from "@/app/lib/data";
import SideNav from "@/app/ui/asside/SideNav";
import Header from "@/app/ui/header/Header";
import { imageLoader } from "@/app/utils/imageLoader";
import Image from "next/image";

import React from "react";

async function Movie({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  interface Movie {
    title: string;
    poster_path: string;
    backdrop_path: string;
    vote_count: number;
  }
  const movie = await fetchMovieDetails(id);
  const { title, poster_path, backdrop_path, vote_count }: Movie = movie;
  console.log(movie);
  return (
    <div className="">
      <Header />
      <div className="flex">
        <SideNav />
        <section className="w-full bg-red-primary">
          <div className=" w-full h-[400px] overflow-hidden">
            <figure className=" relative size-full ">
              <Image
                src={imageLoader(backdrop_path)}
                alt={`${title} picture`}
                className=" object-cover object-center "
                fill
                priority
              />
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movie;
