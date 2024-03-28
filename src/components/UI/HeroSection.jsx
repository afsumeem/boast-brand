import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../Shared/Navbar";

const HeroSection = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden ">
      <div className=" flex justify-center items-center pt-5 mt-5 lg:mt-16 hero-section h-auto lg:h-[100vh] overflow-hidden">
        <div style={{ zIndex: 100 }} className=" absolute top-0 w-full left-0">
          <Navbar />
        </div>

        {/* yellow section */}
        <div className=" absolute -left-[160px] top-[50px] md:top-[0] lg:-top-[130px] md:-left-[190px] lg:-left-[500px] z-0 ">
          <Image
            src={"/hero/yellowbg.png"}
            className="w-[350px] md:w-[500px] lg:w-[1300px]"
            width={1100}
            height={0}
            // layout="fill"
            alt="yellow"
          />
        </div>
        {/* pink section */}
        <div
          style={{ zIndex: 0 }}
          className=" absolute right-[0px] sm:-right-[6px] top-7 sm:-top-0 lg:right-[0px]  lg:-top-[10px]  z-0 "
        >
          <Image
            src={"/hero/pinkbg.png"}
            className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[800px]"
            width={900}
            height={0}
            alt="pink"
          />
        </div>
        {/* line 1 */}
        <div className=" absolute -left-16  top-[50px] lg:-top-10  lg:-left-[170px] z-0 ">
          <Image
            src={"/hero/line1.png"}
            className="w-[200px] lg:w-[700px]"
            width={600}
            height={0}
            alt="line 1"
          />
        </div>
        {/* line 2 */}
        <div className=" absolute rotate-3 top-3 lg:-top-[90px] md:top-[5px] -right-[7px] sm:right-[115px] md:right-[65px] lg:right-[30px] ">
          <Image
            src={"/hero/line2.png"}
            className="w-[240px] sm:w-[250px] md:w-[350px] lg:w-[900px]"
            width={1000}
            height={0}
            alt="line2 "
          />
        </div>

        {/* Text and diloags */}
        <div className=" z-10 mt-36 ml-10 lg:ml-96 w-3/6">
          <h2
            className="text-3xl sm:text-[50px] lg:text-6xl font-extrabold hero-title ml-0 md:-ml-20"
            style={{ letterSpacing: "-2px" }}
          >
            Upto 100 <span className="hero-p">%</span> cashback <br />
            <span className="text-black hero-title">
              {" "}
              on your <br className="md:hidden" />
              <span
                style={{ position: "relative", display: "inline-block" }}
                className=" "
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fe5727",
                    height: "50%",
                    borderRadius: "6px",
                    zIndex: -1,
                  }}
                ></span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Shoutout",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    " Post",
                    1000,
                    " Story",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h2>
          <button
            onClick={handleScrollToWishlist}
            className="bg-black my-5 hover:bg-[#fd7f3e] text-white font-bold px-4 lg:px-6 py-2 rounded-full hover:text-black duration-300 ml-0 md:-ml-20"
          >
            Early access
          </button>
        </div>

        {/* main Cha */}
        <div className=" relative top-28 md:top-14 lg:top-[70px]  left-[27px] sm:left-10 md:left-[80px] lg:left-[70px] ">
          <Image
            src={"/hero/boastC.png"}
            className="w-[120px] sm:w-[200px] lg:w-[500px]"
            width={400}
            height={0}
            alt="main carecter"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
