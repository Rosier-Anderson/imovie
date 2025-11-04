import {
  fetchMovieDetails,
  fetchNowPlayingMovies,
  fetchTrendingMovie,
  fetchUpcomingMovies,
} from "@/app/lib/data";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";

import { MdOutlinePlayCircle } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import BannerTrending from "@/app/ui/home/Banner/BannerTrending";
import BannerNews from "@/app/ui/home/Banner/BannnerNews";
import {
  moviesResultsProps,
  trendingMovieProps,
  tvResultsProps,
} from "@/app/interfaces";
export default async function HomePage() {
  const [
    { results: upcomingMovies },
    { results: nowPlayingMoviesData },
    { results: trendingMovie },
  ]: [
    { results: (moviesResultsProps | tvResultsProps)[] },
    { results: (moviesResultsProps | tvResultsProps)[] },
    { results: trendingMovieProps[] }
  ] = await Promise.all([
    fetchUpcomingMovies(),
    fetchNowPlayingMovies(),
    fetchTrendingMovie(),
  ]);

  return (
    <main className="size-full ">
      {/* Banners */}
      <section className="flex gap-4">
        <BannerTrending trendingMovie={trendingMovie} />
        <BannerNews />
      </section>
      {/* Playing Movies */}
      <section className="">
        <div className=" dark:text-white">
          <div className="flex gap-2 items-center">
            <span className="inline-block w-1 h-6 bg-red-primary"></span>
            <h1 className="text-2xl font-bold dark:text-white">
              Now playing movies{" "}
            </h1>
            <MdOutlinePlayCircle className="w-6.5 h-6.5" />
          </div>

          <Gallery data={nowPlayingMoviesData} gallleryGenre="movie" />
        </div>
      </section>
      {/* Upcomming Movies */}
      <section className="">
        <div className="dark:text-white">
          <div className="flex gap-2 items-center">
            <span className="inline-block w-1 h-6 bg-red-primary"></span>
            <h1 className="text-2xl font-bold dark:text-white">
              Upcoming movies
            </h1>
            <PiClockCountdownFill className="w-6.5 h-6.5" />
          </div>

          <Gallery data={upcomingMovies} gallleryGenre="movie" />
        </div>
      </section>
    </main>
  );
}
