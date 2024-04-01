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
        Why Brands love Boast
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div data-aos="fade-up">
          <div className="benefits-container relative">
            {/* <div className="h-10"></div> */}
            <div className="benefit-content px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-2xl text-center text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Cost effective marketing alternative
                </h2>
              </div>

              <p className="benefit-detail left-0 px-5 text-white text-center absolute bottom-5 ">
                Boast offers a budget-friendly solution for brands to amplify
                their marketing efforts.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div data-aos="flip-left">
          <div className="benefits-container2 relative ">
            {/* <div className="h-10"></div> */}
            <div className="benefit-content  px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-2xl text-center   text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  One tap <br /> campaigns
                </h2>
              </div>
              <p className="benefit-detail left-0 px-5 text-white text-center  absolute bottom-5 benefit-detail">
                Launch campaigns seamlessly with just a single tap, saving time
                and effort.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div data-aos="flip-right">
          <div className="benefits-container3 relative ">
            {/* <div className="h-10"></div> */}
            <div className="benefit-content  px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-2xl  text-center  text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Brands only pay after a purchase is made
                </h2>
              </div>
              <p className="benefit-detail left-0 px-5 text-white text-center absolute bottom-5">
                Pay-per-performance model ensures brands invest in marketing
                only when it drives actual sales.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div data-aos="fade-down">
          <div className="benefits-container4 relative ">
            {/* <div className="h-10"></div> */}
            <div className="benefit-content  px-5">
              <div className="flex items-center justify-center h-full">
                <h2
                  className="text-2xl text-center text-white uppercase "
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  Brands only pay after a purchase is made
                </h2>
              </div>
              <p className="benefit-detail left-0 px-5 text-white absolute bottom-5 text-center ">
                Utilize your existing customer base as powerful promoters,
                enhancing brand loyalty and reach.
              </p>
            </div>
          </div>
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
