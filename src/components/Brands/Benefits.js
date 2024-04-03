/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="mx-2 lg:mx-24 mb-20">
      <h2
        data-aos="fade-right"
        data-aos-duration="500"
        className="text-center md:text-start  text-2xl md:text-5xl font-extrabold text-white uppercase mb-10"
        style={{
          fontFamily: "Raleway",
          fontWeight: "800",
        }}
      >
        Why love us?
      </h2>
      {/*  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div data-aos="fade-up benefit">
          <div className="benefits-container h-[330px] relative">
            <div className="benefit-content h-[330px] px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-xl benefit-title text-center text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Cost effective marketing alternative
                </h2>
              </div>

              <p className="text-lg benefit-detail left-0 px-5 text-white text-center absolute bottom-5 ">
                Boast offers a budget-friendly solution for brands to amplify
                their marketing efforts.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div data-aos="flip-left">
          <div className="benefits-container2 h-[330px] relative ">
            <div className="benefit-content h-[330px] px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-xl text-center benefit-title  text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  One tap <br /> campaigns
                </h2>
              </div>
              <p className="text-lg benefit-detail left-0 px-5 text-white text-center  absolute bottom-5 benefit-detail">
                Launch campaigns seamlessly with just a single tap, saving time
                and effort.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div data-aos="flip-right">
          <div className="benefits-container3 h-[330px] relative ">
            <div className="benefit-content h-[330px] px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-xl  text-center benefit-title text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Brands only pay after a purchase is made
                </h2>
              </div>
              <p className="text-lg benefit-detail left-0 px-5 text-white text-center absolute bottom-5">
                Pay-per-performance model ensures brands invest in marketing
                only when it drives actual sales.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div data-aos="fade-down">
          <div className="benefits-container4 h-[330px] relative ">
            <div className="benefit-content h-[330px] px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-xl text-center benefit-title text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Payment upon Purchase
                </h2>
              </div>
              <p className="text-lg benefit-detail left-0 px-5 text-white absolute bottom-5 text-center ">
                Adopt a pay-per-performance approach, ensuring brands only
                invest in marketing upon generating actual sales.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div data-aos="fade-down">
          <div className="benefits-container5 h-[330px] relative ">
            <div className="benefit-content h-[330px] px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-xl text-center benefit-title text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  No Integration Needed
                </h2>
              </div>
              <p className="text-lg benefit-detail left-0 px-5 text-white absolute bottom-5 text-center ">
                Simply say yes and begin your journey hassle-free.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="benefits-container6 h-[330px] relative ">
            <div className="benefit-content h-[330px] px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-xl text-center benefit-title text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Infinitely Scalable Marketing
                </h2>
              </div>
              <p className="text-lg benefit-detail left-0 px-5 text-white absolute bottom-5 text-center ">
                Achieve limitless growth potential with marketing that expands
                in tandem with your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
