import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const Tab = ({ goToTop }) => {
  return (
    <div className="w-full fixed bottom-3 z-50">
      <div className="w-full md:w-1/2 block mx-auto rounded-full border-2 border-gray-600 py-4 bg-[#10141d] tab z-50">
        <div className="flex justify-around items-center mx-auto ">
          <a
            href="https://web.facebook.com/boastbrand/"
            target="blank"
            className="text-[#FC0F67]  rounded-lg duration-300 hover:text-[#FAE411] tab-list"
          >
            <FaFacebook className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/getboastofficial/"
            target="blank"
            className="text-[#FC0F67]  tab-list rounded-lg duration-300 hover:text-[#FAE411]"
          >
            <FaInstagram className="text-lg" />
          </a>

          <a
            href="https://www.getboast.co/"
            className="text-[#FC0F67] bg-inherit  tab-list duration-300 hover:text-[#FAE411]"
            target="blank"
          >
            INFLUENCERS
          </a>
          <p className="text-[#FC0F67] bg-inherit tab-list duration-300 hover:text-[#FAE411] uppercase">
            About Us
          </p>
          <button
            onClick={goToTop}
            className="text-[#FC0F67] tab-list duration-300 hover:text-[#FAE411]"
          >
            <FaArrowUpLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab;
