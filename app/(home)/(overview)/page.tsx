import { fetchNowPlayingMovies, fetchUpcomingMovies } from "@/app/lib/data";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";

export default async function HomePage() {
  const [upcomingMovies, nowPlayingMoviesData] = await Promise.all([
    fetchUpcomingMovies(), // type safe it later with his own definitions
    fetchNowPlayingMovies(),
  ]);

  return (
    <main className="size-full ">
      <section>
        <div>
          <h1>Now playing movies </h1>
          <Gallery data={nowPlayingMoviesData.results} />
        </div>
      </section>
      <section>
        <div>
          <h1>Upcoming movies</h1>
          <Gallery data={upcomingMovies.results} />
        </div>
      </section>
    </main>
  );
}
