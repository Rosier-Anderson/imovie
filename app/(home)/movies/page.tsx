import { fetchAllMovie, fetchMovieGenres } from "@/app/lib/data";
import { Genre, moviesDataProps } from "@/app/lib/definitions";
import Genres from "@/app/ui/filters/Genres";
import { SortBy } from "@/app/ui/filters/SortBy";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";

export default async function MoviePage() {
  const [moviesData, { genres: movieGenres }]: [
    moviesDataProps,
    { genres: Genre[] }
  ] = await Promise.all([fetchAllMovie(), fetchMovieGenres()]);
  return (
    <main className="">
      <div className="flex">
        <Genres data={movieGenres} />
        {/* <SortBy /> to change later for time saving*/}
      </div>

      <section className="">
        <h1 className="">Suggest For You</h1>
        <Gallery data={moviesData.results} />
      </section>
    </main>
  );
}
