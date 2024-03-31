/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";

const HowItWorks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[#10141d] h-[500px] mt-10 md:mt-0 mb-10 mx-2 lg:mx-24 flex flex-col md:flex-row justify-between gap-5 items-center z-0">
      <div>
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-center md:text-start text-2xl md:text-4xl font-extrabold text-white"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          HOW IT WORKS?
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-white font-thin text-base md:text-lg uppercase mt-5 text-center md:text-start"
          style={{
            fontFamily: "Raleway",
            fontWeight: "500",
          }}
        >
          Boast turns your customers, <br /> into your brand marketeers
        </p>
      </div>
      <div className="w-[80%] md:w-[50%] lg:w-1/2 text-white z-0 bg-[#10141d] ">
        <div className="slider-container ">
          <Slider {...settings}>
            <div className="w-[90%]">
              <img src="/images/carousel/1.png" className="w-52" alt="" />
              <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
                <h3
                  className="text-xl md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  1. They Signup
                </h3>
                <p>Join Boast and unlock the power of UGC marketing.</p>
              </div>
            </div>

            <div className="w-[90%]">
              <img src="/images/carousel/3.png" className="w-52 ml-24" alt="" />
              <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
                <h3
                  className="text-xl md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  2. Load Credit
                </h3>
                <p>
                  Make full-price purchases at your favorite brands and receive
                  cashback rewards.
                </p>
              </div>
            </div>
            <div className="w-[90%]">
              <img src="/images/carousel/4.png" className="w-52 ml-32" alt="" />
              <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
                <h3
                  className="text-xl md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  3. Start Campaign with a tap
                </h3>
                <p>Start promoting brands effortlessly with just a tap.</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
