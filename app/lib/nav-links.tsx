import { CgProfile } from "react-icons/cg";
import { CiSaveDown2 } from "react-icons/ci";
import { GiTv } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RiHomeLine, RiMovie2AiLine } from "react-icons/ri";

export const assideLinks = [
  {
    label: "Home",
    href: "/",
    icon: <RiHomeLine className="w-8 h-8" />,
  },
  {
    label: "Movie",
    href: "/movies",
    icon: <RiMovie2AiLine className="w-8 h-8" />,
  },
  {
    label: "TV",
    href: "/tvs",
    icon: <GiTv className="w-8 h-8" />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline className="w-8 h-8" />,
  },
  {
    label: "",
    href: "",
    icon: <hr className=" w-full" />,
  },

  {
    label: "Saved",
    href: "/saved",
    icon: <CiSaveDown2 className="w-8 h-8" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <CgProfile className="w-8 h-8" />,
  },
];
