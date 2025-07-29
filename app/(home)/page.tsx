import Image from "next/image";
import { fetchAllMovie } from "../lib/data";
import { moviesProps } from "../lib/definitions";

export default async function HomePage() {
  const data = await fetchAllMovie();
  const movies = data.results;
  console.log(movies);
  return (
    <main className="grid gap-4 grid-flow-col grid-cols-5 grid-rows-4">
      {movies.map((movie: moviesProps, index: number) => {
        let picturePath: string = movie.backdrop_path;
        return (
          <ul key={index}>
            <li>
              <span>{movie.title}</span>
              <Image
                src={picturePath}
                width={50}
                height={50}
                alt="movie image"
              />
            </li>
          </ul>
        );
      })}
    </main>
  );
}
