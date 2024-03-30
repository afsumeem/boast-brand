import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const Tab = ({ goToTop }) => {
  return (
    <div className="  w-full  fixed bottom-3 ">
      <div className="w-1/2 block mx-auto rounded-full border-2 border-gray-600 py-3 bg-[#10141d] tab">
        <div className="flex justify-around items-center mx-auto z-10">
          <a
            href="https://web.facebook.com/boastbrand/"
            target="blank"
            className="text-[#FC0F67] p-3 rounded-lg "
          >
            <FaFacebook className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/getboastofficial/"
            target="blank"
            className="text-[#FC0F67] p-3 rounded-lg"
          >
            <FaInstagram className="text-lg" />
          </a>

          <a
            href="/https://www.getboast.co/"
            className="text-[#FC0F67]"
            target="blank"
          >
            INFLUENCERS
          </a>
          <p className="text-[#FC0F67] uppercase">About Us</p>
          <button onClick={goToTop} className="text-[#FC0F67]">
            <FaArrowUpLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab;
