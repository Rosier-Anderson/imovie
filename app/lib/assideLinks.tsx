import { CgProfile } from "react-icons/cg";
import { CiSaveDown2 } from "react-icons/ci";
import { GiTv } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RiHomeLine, RiMovie2AiLine } from "react-icons/ri";

export const assideLinks = [
  {
    label: "Home",
    href: "/",
    icon: <RiHomeLine className="w-6 h-6" />,
  },
  {
    label: "Movie",
    href: "/movie",
    icon: <RiMovie2AiLine className="w-6 h-6" />,
  },
  {
    label: "TV",
    href: "/tvs",
    icon: <GiTv className="w-6 h-6" />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <IoSearchOutline className="w-6 h-6" />,
  },
  {
    label: "",
    href: "",
    icon: <hr className=" w-full" />,
  },

  {
    label: "Saved",
    href: "/saved",
    icon: <CiSaveDown2 className="w-6 h-6" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <CgProfile className="w-6 h-6" />,
  },
];
