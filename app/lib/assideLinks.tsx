
import { BsFillSave2Fill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiTv } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RiHomeLine, RiMovie2AiLine } from "react-icons/ri";

 export const assideLinks = [
    {
      label: "Home",
      href: "/",
      icon: <RiHomeLine />
    },
    {
      label: "Movie",
      href: "/movie",
      icon: <RiMovie2AiLine />
    },
    {
      label: "TV",
      href: "/tv",
      icon: <GiTv />
    }, 
     {
      label: "Search",
      href: "/search",
      icon :  <IoSearchOutline />
    }, 
    {
      label: "Fake hr",
      href: "",
      
    },
    {
      label: "Saved",
      href: "/saved",
      icon: <BsFillSave2Fill />
    }, {
      label: "Profile",
      href: "/profile",
      icon: <CgProfile />
    },
  ];