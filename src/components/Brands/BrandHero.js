/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";

const BrandHero = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  return (
    <>
      <div className="brandHero">
        <div className="mx-2 lg:mx-24 pt-2">
          <Image
            src="/images/brand.png"
            width={100}
            height={0}
            alt="logo"
            className="pt-5"
          />
        </div>
        <div className=" mx-2 lg:mx-24 h-screen ">
          <div className=" grid grid-cols-1 lg:grid-cols-2 h-full mt-10 lg:-mt-20 gap-5">
            <div
              className=" flex justify-center items-center img-container"
              onMouseEnter={() => setShowSecondImage(true)}
              onMouseLeave={() => setShowSecondImage(false)}
            >
              <img
                src="/hero/boastC.png"
                className={`w-32 sm:w-40 md:w-52 lg:w-80 image ${
                  showSecondImage ? "hidden" : ""
                }`}
                alt=""
              />
              <img
                src="/hero/boastC2.png"
                className={`w-32 sm:w-40 md:w-52 lg:w-80 image ${
                  showSecondImage ? "" : "hidden"
                }`}
                alt=""
              />
            </div>

            <div className=" text-white flex justify-start items-center">
              <div className="ml-0 lg:-ml-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mt-5 md:mt-0 mb-7 font-extrabold text-center md:text-start ">
                  Supercharge your Brand
                </h2>
                <p className="font-light text-center md:text-start text:base lg:text-xl 2xl:text-xl mb-5 md:mb-0">
                  Using your customers and local influencers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default BrandHero;
