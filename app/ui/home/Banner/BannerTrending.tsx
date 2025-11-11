"use client";
import { trendingMovieProps } from "@/app/lib/definitions";
import { imageLoader } from "@/app/utils";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";

function BannerTrending({
  trendingMovie,
}: {
  trendingMovie: trendingMovieProps[];
}) {
  const [moveToNextSlide, setMoveToNextSlide] = useState<number>(0);
  const movie = trendingMovie[moveToNextSlide];

  return (
    <div className="relative w-4/6 min-w-[200px] h-[330px] rounded-2xl overflow-hidden text-white  ">
      {
        //   console.log(trendingMovieArray);
        // }

        <div className="">
          <figure className="size-full inset-0 absolute saturate-150 brightness-125 ">
            <Image
              src={imageLoader(movie.backdrop_path)}
              alt="Banner movie picture"
              className="object-cover object-center size-full "
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </figure>

          <BannerContent props={movie} />
        </div>
      }
      <div className="flex justify-between absolute top-[30%] w-full  p-2">
        <button className="p-2 bg-gray-primary rounded-full cursor-pointer">
          <FaChevronLeft className="w-4 h-4 text-black-primary" />
        </button>

        <button
          onClick={() =>
            setMoveToNextSlide((nextSlide) =>
              nextSlide >= trendingMovie.length - 1 ? 0 : nextSlide + 1
            )
          }
          className="p-2 bg-gray-primary rounded-full cursor-pointer"
        >
          <FaChevronRight className="w-4 h-4 text-black-primary" />
        </button>
      </div>
    </div>
  );
}

export default BannerTrending;
const BannerButton = () => {
  return (
    <div className="flex justify-between absolute top-[30%] w-full  p-2">
      <button className="p-2 bg-gray-primary rounded-full cursor-pointer">
        <FaChevronLeft className="w-4 h-4 text-black-primary" />
      </button>

      <button
        // onClick={}
        className="p-2 bg-gray-primary rounded-full cursor-pointer"
      >
        <FaChevronRight className="w-4 h-4 text-black-primary" />
      </button>
    </div>
  );
};
const BannerContent = ({
  props,
}: {
  props: { title: string; overview: string };
}) => {
  const { title, overview }: { title: string; overview: string } = props;
  return (
    <div className="flex flex-col gap-2 absolute inset-x-0 bottom-6 mx-8 ">
      <h1 className="text-white text-3xl font-bold">{title}</h1>
      <p className="text-sm w-">{overview}</p>

      <div className="flex items-center gap-2">
        {" "}
        <span className="text-sm">2025</span>
        <span className=" flex items-center gap-1.5 h-10 bg-red-primary rounded-lg p-2 ">
          <MdOutlinePlayCircle className="w-6 h-6" />
          {/* the movie info will be in the link */}
          <Link href="/" className="">
            Watch Now
          </Link>
        </span>
      </div>
    </div>
  );
};
