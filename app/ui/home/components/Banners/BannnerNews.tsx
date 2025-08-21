import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BannerNews() {
  return (
    <div className=" w-2/6 h-80 ">
      <div className="relative w-full">
        <div className="absolute w-full h-80 bg-red-primary rotate-4 rounded-2xl"></div>
        {/* arrows */}
        <div className="absolute w-full h-80 bg-gray-primary rounded-2xl ">
          {/* <div className="flex  mt-18">
            <button className="p-2 bg-gray-primary rounded-full cursor-pointer">
              <FaChevronLeft />
            </button>

            <button className="p-2 bg-gray-primary rounded-full cursor-pointer">
              <FaChevronRight />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BannerNews;
