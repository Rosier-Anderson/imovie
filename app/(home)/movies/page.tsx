import { fetchAllMovie } from "@/app/lib/data";
import { moviesDataProps } from "@/app/lib/definitions";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";
export default async function MoviePage() {
  const data: moviesDataProps = await fetchAllMovie();
  console.log(data);
  const galleryKeys = {
    imgURL: "poster_path",
    title: "name",
    release_date: "release_date",
    vote: "vote_count",
  };

  return (
    <main className="">
      <section className="">
        <h1 className="">Suggest For You</h1>
        <Gallery data={data.results} galleryKeys={galleryKeys} />
      </section>
    </main>
  );
}
