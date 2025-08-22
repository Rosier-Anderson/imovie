import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";

function BannerTrending() {
  // const { imgURL, title, release_date, overview, href } = props;
  return (
    <div className=" w-4/6 min-w-[200px] h-80   rounded-2xl">
      {/* mgiht be in its own component later  */}
      <div className="flex justify-between mt-18">
        <button className="p-2 bg-gray-primary rounded-full cursor-pointer">
          <FaChevronLeft className="w-6 h-6" />
        </button>

        <button className="p-2 bg-gray-primary rounded-full cursor-pointer">
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div>
        <h1></h1>
        <p></p>
        <span></span>
        <button className="flex">
          <MdOutlinePlayCircle className="w-6 h-6" />
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
}

export default BannerTrending;
