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
          <div className=" grid grid-cols-1 lg:grid-cols-2 h-full mt-10 lg:-mt-20 gap-5 px-10">
            <div
              className=" flex justify-center items-center img-container"
              onMouseEnter={() => setShowSecondImage(true)}
              onMouseLeave={() => setShowSecondImage(false)}
            >
              <img
                src="/hero/boastC.png"
                className={`w-32 ml-0 md:-ml-40 sm:w-40 md:w-52 lg:w-80 image ${
                  showSecondImage ? "hidden" : ""
                }`}
                alt=""
              />
              <img
                src="/hero/boastC2.png"
                className={`w-32 ml-0 md:-ml-40 sm:w-40 md:w-52 lg:w-80 image ${
                  showSecondImage ? "" : "hidden"
                }`}
                alt=""
              />
            </div>

            <div className=" text-white flex justify-start items-center ">
              <div className="ml-0 lg:-ml-44 mt-0 md:-mt-12 ">
                <h2 className="text-3xl md:text-4xl lg:text-6xl md:mt-0 font-extrabold text-center md:text-start ">
                  Supercharge your Brand
                </h2>
                <p className="font-bold text-center md:text-start text:xl lg:text-2xl my-5 text-gray-400">
                  Using your customers and local influencers
                </p>

                <p className="font-thin md:text-start text:base lg:text-xl 2xl:text-xl mb-5 md:mb-0 text-justify w-full md:w-[700px]">
                  Boast provides automatching end-to-end UGC marketing for
                  businesses using their own customers and Influencers by
                  implementing a cashback model. We provide cashbacks from
                  10%-100% when ever they purchase from your brand and share the
                  purchase on social media.
                </p>
                <button className="my-3 start-now-btn px-5 py-2">
                  Start Now
                </button>
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
