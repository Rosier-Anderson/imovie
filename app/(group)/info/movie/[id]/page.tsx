import React from "react";
import Backdrop from "@/app/(group)/Backdrop";
import Poster from "@/app/(group)/Poster";
import { fetchMovieDetails } from "@/app/lib/data";
import { MovieProps } from "@/app/lib/definitions";
import SideNav from "@/app/ui/asside/SideNav";
import Header from "@/app/ui/header/Header";

async function Movie({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const movie = await fetchMovieDetails(id);
  const { title, poster_path, backdrop_path, vote_count }: MovieProps = movie;
  console.log(movie);
  return (
    <div className="w-sreen h-screen ">
      <Header />
      <div className="flex">
        <SideNav />
        <section className=" w-full ">
          <div className="relative flex --flex-col " dir="ltr">
            <Backdrop backdrop_path={backdrop_path} title={title} />
            <div className="absolute --inset-x-12 start-12 bottom-16 h-16 ">
              <Poster poster_path={poster_path} title={title} />
              <div className="">{/* button */}</div>
            </div>
            <div className="absolute left-80 bottom-16 h-16  ">
              {" "}
              <h1 className="text-4xl font-bold text-white ">{title}</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movie;
