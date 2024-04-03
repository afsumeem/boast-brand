/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";

const HowItWorks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[#10141d] h-[500px] mt-10 md:mt-0 mb-10 mx-0 lg:mx-24 flex flex-col md:flex-row justify-between gap-5 items-center z-0">
      <div>
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-center md:text-start text-2xl md:text-5xl font-extrabold text-white"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          It&#39;s Simple
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-white font-thin text-base md:text-lg  mt-5 text-center md:text-start"
          style={{
            fontFamily: "Raleway",
            fontWeight: "500",
          }}
        >
          Boast makes your customers <br /> sing your song, <br /> all you have
          to do is..
        </p>
      </div>
      <div className="w-[80%] md:w-[50%] lg:w-1/2 text-white z-0 bg-[#10141d] ">
        <div className="slider-container w-[90%] ml:0 md:ml-10 lg:-ml-28">
          <Slider {...settings}>
            <div className="w-full md:w-[90%]">
              <img
                src="/images/carousel/1.png"
                className="w-24 md:w-52"
                alt=""
              />
              <div className="border-0 rounded-2xl p-7  how-it-slide1 h-auto md:h-36">
                <h3
                  className="text-xl mb-2 md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  1. Signup
                </h3>
                <p>Join Boast and unlock the power of UGC marketing.</p>
              </div>
            </div>

            <div className="w-[90%]">
              <img
                src="/images/carousel/2.png"
                className="w-24 md:w-52 ml-24"
                alt=""
              />
              <div className="rounded-2xl p-7  border-0 how-it-slide2 h-auto md:h-36">
                <h3
                  className="text-xl mb-2 md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  2. Load Credit
                </h3>
                <p>
                  You load credit to your new boast account and connect your
                  brands social platforms.
                </p>
              </div>
            </div>
            <div className="w-[90%]">
              <img
                src="/images/carousel/3.png"
                className="w-24 md:w-52 ml-32"
                alt=""
              />
              <div className=" rounded-2xl  p-7 border-0 how-it-slide3 h-auto md:h-36">
                <h3
                  className="text-xl mb-2 md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  3. Start campaign.
                </h3>
                <p>
                  Users and influencers shopping from your brand will tag and
                  post the purchase in return for cashbacks.
                </p>
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
