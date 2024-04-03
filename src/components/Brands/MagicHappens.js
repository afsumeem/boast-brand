/* eslint-disable @next/next/no-img-element */
import React from "react";

const MagicHappens = () => {
  return (
    <div className="h-fit md:h-[500px] bg-black grid grid-cols-1 md:grid-cols-3  p-2 lg:px-24 mb-20 gap-14 text-white">
      <div className="flex flex-col items-center gap-4 justify-center">
        <img src="/images/carousel/hero.png" alt="" className="h-28 lg:h-64" />
        <h2 className="text-xl lg:text-2xl border border-[#fc0f6663] magic-title text-center bg-black p-3 rounded-xl -mt-[54px]">
          Make purchases
        </h2>
        <p className="text-center">
          Local Influencers and your customers with a certain reach buy from
          your website or store
        </p>
      </div>
      <div className="flex gap-4  flex-col items-center justify-center">
        <img src="/images/carousel/dsd.png" alt="" className="h-28 lg:h-64" />
        <h2 className="text-xl lg:text-2xl border border-[#fc0f6663] magic-title text-center bg-black p-3 rounded-xl -mt-[52px]">
          Share UGC
        </h2>
        <p className="text-center ">
          they Generate authentic content promoting your brand across social
          media platforms
        </p>
      </div>
      <div className="flex gap-4  flex-col items-center justify-center">
        <img src="/images/carousel/FFF.png" alt="" className="h-28 lg:h-64" />
        <h2 className="text-xl lg:text-2xl border border-[#fc0f6663]  magic-title text-center bg-black p-3 rounded-xl -mt-[40px]">
          Earn rewards
        </h2>
        <p className="text-center ">
          They Receive cashback incentives for their social media posts, driving
          brand advocacy and loyalty
        </p>
      </div>
    </div>
  );
};

export default MagicHappens;
