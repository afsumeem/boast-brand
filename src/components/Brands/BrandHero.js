/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const BrandHero = () => {
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
          <div className="flex h-full flex-col md:flex-row items-center mt-0 lg:-mt-20 justify-around ">
            <div className="w-full lg:w-1/2">
              <img
                src="/hero/boastC.png"
                className="w-32 sm:w-40 mr-24 md:w-52 lg:w-80 mx-auto block brand-hero-image"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mt-5 md:mt-0 mb-7 font-extrabold text-center md:text-start">
                Boost Your Business: Your Path to Profitable Partnerships
              </h2>
              <p className="font-light text-center md:text-start text:base lg:text-xl 2xl:text-xl mb-5 md:mb-0">
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
    </>
  );
};

export default BrandHero;
