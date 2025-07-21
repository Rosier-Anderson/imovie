import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchMovie() {
  return (
    <div className=" flex justify-center items-center gap-2">
      <label htmlFor="search-movie" className="flex justify-center items-center p-2 bg-gray-200 h-12 rounded-md">
        <IoSearchOutline className="w-6 h-6 text-gray-400" />{" "}
        <input
          name="search-movie"
          type="text"
          className=" bg-transparent  w-[400px]  p-2 rounded-md outline-none"
          placeholder="Search movie, tv..."
        />
      </label>{" "}
    </div>
  );
}
