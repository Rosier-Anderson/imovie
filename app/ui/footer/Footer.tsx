import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div className="w-full h-16 bg-gray-primary  dark:bg-neutral-secondary dark:text-white mt-8">
      <footer className="max-w-[1300px] mx-auto h-full flex items-center justify-between ">
        <div>Simple Movie App</div>
        <div className="flex items-center gap-6  p-2 m-2">
          <span>
            <FaFacebookF className="w-6 h-6" />
          </span>
          <span>
            <FiInstagram className="w-6 h-6" />
          </span>
          <span>
            <FaGithub className="w-6 h-6" />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
