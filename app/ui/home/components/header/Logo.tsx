import img from "../../../../../public/assets/img/logo.png";
import Link from "next/link";
import Image from "next/image";
export const Logo = () => {
  return (
    <div className="h-20 flex items-center ">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={img}
          className="w-15 h-15"
         
          alt="logo image "
          priority
        />
        <h1 className="text-xl dark:text-white font-bold hidden md:block">I-MOVIE</h1>
      </Link>
    </div>
  );
};
