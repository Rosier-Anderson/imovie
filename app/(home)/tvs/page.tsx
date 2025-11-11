import { fetchAllTvs, fetchTvGenres } from "@/app/lib/data";
import {
  Genre,
  moviesResultsProps,
  tvResultsProps,
} from "@/app/lib/definitions";
import Genres from "@/app/ui/filters/Genres";
import Gallery from "@/app/ui/home/_components/GalleryUI/Gallery";

export default async function TVPage() {
  const [{ results: tvData }, { genres: tvGenres }]: [
    { results: (moviesResultsProps | tvResultsProps)[] },
    { genres: Genre[] }
  ] = await Promise.all([fetchAllTvs(), fetchTvGenres()]);

  return (
    <main>
      <Genres data={tvGenres} />
      <section>
        <Gallery data={tvData} gallleryGenre="tv" />
      </section>
    </main>
  );
}
