/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HowItWorks = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className="bg-[#10141d] h-[500px] mb-10 mx-2 lg:mx-24 flex justify-around gap-5 items-center">
      <div>
        <h2
          className="text-5xl font-extrabold text-white"
          style={{
            fontFamily: "Raleway",
            fontWeight: "900",
          }}
        >
          HOW IT WORKS?
        </h2>
        <p
          className="text-white font-thin text-xl uppercase mt-5"
          style={{
            fontFamily: "Raleway",
            fontWeight: "500",
          }}
        >
          Boast turns your customers, <br /> into your brand marketeers
        </p>
      </div>
      <div className=" w-1/2 text-white">
        <img src="/images/howit.png" alt="" />
        <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
          <h3
            className="text-3xl"
            style={{
              fontFamily: "Raleway",
              fontWeight: "700",
            }}
          >
            1. They Shop
          </h3>
          <p>Influential Boast users make a full-price purchase at your POS</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
