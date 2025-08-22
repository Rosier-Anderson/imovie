import {
  fetchMovieDetails,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
} from "@/app/lib/data";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";
import { moviesResultsProps, tvResultsProps } from "@/app/lib/definitions";
import { MdOutlinePlayCircle } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import BannerTrending from "@/app/ui/home/Banners/BannerTrending";
import BannerNews from "@/app/ui/home/Banners/BannnerNews";
export default async function HomePage() {
  const [{ results: upcomingMovies }, { results: nowPlayingMoviesData }]: [
    { results: (moviesResultsProps | tvResultsProps)[] },
    { results: (moviesResultsProps | tvResultsProps)[] }
  ] = await Promise.all([fetchUpcomingMovies(), fetchNowPlayingMovies()]);
  const movieDetails = fetchMovieDetails();
  console.log(nowPlayingMoviesData);
  return (
    <main className="size-full ">
      {/* Banners */}
      <section className="flex gap-4">
        <BannerTrending />
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

          <Gallery data={nowPlayingMoviesData} />
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

          <Gallery data={upcomingMovies} />
        </div>
      </section>
    </main>
  );
}
