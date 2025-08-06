import { fetchAllTvs } from "@/app/lib/data";
import { tvDataProps } from "@/app/lib/definitions";
import Gallery from "@/app/ui/home/components/GalleryUI/Gallery";

export default async function TVPage() {
  const tvData: tvDataProps = await fetchAllTvs();
  console.log(tvData);
  return (
    <main>
      <section></section>
    </main>
  );
}
