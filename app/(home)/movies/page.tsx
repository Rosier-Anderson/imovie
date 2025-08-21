import { fetchAllMovie, fetchMovieGenres } from "@/app/lib/data";
import { Genre, moviesDataProps } from "@/app/lib/definitions";
import Genres from "@/app/ui/filters/Genres";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";

export default async function MoviePage() {
  const [moviesData, { genres: movieGenres }]: [
    moviesDataProps,
    { genres: Genre[] }
  ] = await Promise.all([fetchAllMovie(), fetchMovieGenres()]);
  return (
    <main className="">
      <Genres data={movieGenres} />
      <section className="">
        <h1 className="">Suggest For You</h1>
        <Gallery data={moviesData.results} />
      </section>
    </main>
  );
}
