import Image from "next/image";
import { imageLoader } from "@/app/utils/imageLoader";

export default function Backdrop({
  backdrop_path,
  title,
}: {
  backdrop_path: string;
  title: string;
}) {
  return (
    <div className=" w-full h-[400px] overflow-hidden  ">
      <figure
        className="relative size-full  absolute bottom-0 
  w-full 
  bg-black/50 
  text-white 
  text-center 
  text-lg 
  p-5

  transition-opacity duration-500 ease-in-out"
      >
        <Image
          src={imageLoader(backdrop_path)}
          alt={`${title} picture`}
          className="bg-cover bg-no-repeat object-cover object-top  before:absolute before:block before:bg-red-primary before:size-full "
          fill
          priority
        />
      </figure>
    </div>
  );
}
