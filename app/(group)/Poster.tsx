import Image from "next/image";
import { imageLoader } from "@/app/utils/imageLoader";

export default function Poster({
  poster_path,
  title,
}: {
  poster_path: string;
  title: string;
}) {
  return (
    <div className="w-56 h-[380px] p-2  bg-white rounded-2xl">
      <figure className="relative size-full rounded-2xl overflow-hidden ">
        <Image
          src={imageLoader(poster_path)}
          className="object-cover "
          alt={`${title} picture`}
          fill
          priority
        />
      </figure>
    </div>
  );
}
