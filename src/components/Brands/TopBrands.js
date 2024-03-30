/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";

const TopBrands = () => {
  return (
    <div className="py-7 flex px-7">
      <div>
        <h2
          className="text-white text-3xl px-3 uppercase flex flex-col gap-2 "
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
            letterSpacing: "-2px",
          }}
        >
          <span>Brands</span>
          <span>who are</span> <span>with</span> <span>us</span>
        </h2>
      </div>
      <div>
        <Marquee autoFill="true">
          <img
            className=" mr-10"
            style={{ height: "80px", width: "100px" }}
            src="/images/logo1.png"
            alt="image1"
          />

          <img
            style={{ height: "35px" }}
            className=" mr-10"
            src="/images/logo2.png"
            alt="image2"
          />

          <img
            style={{ height: "100px", width: "90px" }}
            className=" mr-10"
            src="/images/logo3.png"
            alt="image3"
          />
        </Marquee>
        <Marquee autoFill="true" direction="right">
          <img
            style={{ height: "90px", width: "100px" }}
            className=" mr-10"
            src="/images/logo4.png"
            alt="image4"
          />

          <img
            style={{ height: "30px" }}
            className=" mr-10"
            src="/images/logo5.png"
            alt="image5"
          />

          <img
            className=" mr-10"
            style={{ height: "100px", width: "90px" }}
            src="/images/logo6.png"
            alt="image6"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
