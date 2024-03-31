/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";

const Benefits = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: null, // Hides next arrow button
    prevArrow: null, // Hides previous arrow button
  };

  return (
    <div className="mx-2 lg:mx-24 mb-20">
      <h2
        className="text-center md:text-start text-2xl md:text-4xl font-extrabold text-white uppercase mb-10"
        style={{
          fontFamily: "Raleway",
          fontWeight: "800",
        }}
      >
        Why Brands love Boast
      </h2>
      <div className="">
        <div className="slider-container ">
          <Slider {...settings}>
            <div className="px-5">
              <div className="benefits-container relative ">
                <div className="h-10"></div>
                <div className="benefit-content pt-20 px-5">
                  <h2
                    className="text-2xl  mb-5 text-white uppercase "
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Cost effective marketing alternative
                  </h2>
                  <p className="text-white mb-5">
                    Followers of your customer have similar demographics and
                    spending power
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="px-5">
              <div className="benefits-container2 relative ">
                <div className="h-10"></div>
                <div className="benefit-content pt-20  px-5">
                  <h2
                    className="text-2xl  mb-5 text-white uppercase "
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    One tap <br /> campaigns
                  </h2>
                  <p className="text-white mb-5">
                    Followers of your customer have similar demographics and
                    spending power
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="px-5">
              <div className="benefits-container3 relative ">
                <div className="h-10"></div>
                <div className="benefit-content pt-20  px-5">
                  <h2
                    className="text-2xl  mb-5 text-white uppercase "
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Brands only pay after a purchase is made
                  </h2>
                  <p className="text-white mb-5">
                    Followers of your customer have similar demographics and
                    spending power
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="px-5">
              <div className="benefits-container4 relative ">
                <div className="h-10"></div>
                <div className="benefit-content pt-20  px-5">
                  <h2
                    className="text-2xl  mb-5 text-white uppercase "
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "700",
                    }}
                  >
                    Brands only pay after a purchase is made
                  </h2>
                  <p className="text-white mb-5">
                    Followers of your customer have similar demographics and
                    spending power
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "hidden" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "hidden" }}
//       onClick={onClick}
//     />
//   );
// }
