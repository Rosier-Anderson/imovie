import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchMovie() {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <label
        htmlFor="search-movie"
        className="flex justify-center items-center py-6 px-2 bg-gray-200 h-10 rounded-md border-node focus-within:outline-2 focus-within:outline-gray-300  duration-200 ease-in-out "
      >
        <IoSearchOutline className="w-6 h-6 text-gray-400" />
        <input
          id="search-movie"
          name="search-movie"
          type="text"
          className="bg-transparent w-[400px] p-2 rounded-md outline-none "
          placeholder="Search movie, tv..."
        />
      </label>
    </div>
  );
}
