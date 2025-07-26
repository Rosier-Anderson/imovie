import img from "../../../../public/assets/img/logo.png";
import Link from "next/link";
import Image from "next/image";
export const Logo = () => {
  return (
    <div className="h-20 flex items-center ">
      <Link href="/">
        <Image
          src={img}
          className=""
          width={200}
          height={200}
          alt="logo image "
        />
      </Link>
    </div>
  );
};
