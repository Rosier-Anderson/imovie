import { fetchAllMovie } from "@/app/lib/data";
import { moviesDataProps } from "@/app/lib/definitions";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";
export default async function MoviePage() {
  const data: moviesDataProps = await fetchAllMovie();

  return (
    <main className="">
      <section className="">
        <h1 className="">Suggest For You</h1>
        <Gallery data={data.results} />
      </section>
    </main>
  );
}
