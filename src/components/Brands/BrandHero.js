/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const BrandHero = () => {
  return (
    <>
      <div className="brandHero">
        <div className=" mx-2 lg:mx-24 py-2 h-screen ">
          <Image
            src="/images/brand.png"
            width={100}
            height={0}
            alt="logo"
            className=""
          />
          <div className="flex items-center justify-around mt-20">
            <div className="w-full lg:w-1/2">
              <img
                src="/hero/5_n47fz6.png"
                className="w-64 mx-auto block"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-5xl mb-7 font-extrabold">
                Boost Your Business: Your Path to Profitable Partnerships
              </h2>
              <p className="font-light">
                Boast powers the entire marketing lifecycle, unlocking your team
                to create content with speed, launch experiments with
                confidence, and deliver experiences of the highest quality.
              </p>
            </div>
          </div>
        </div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      {/* <div className="half-circle"></div> */}
    </>
  );
};

export default BrandHero;
