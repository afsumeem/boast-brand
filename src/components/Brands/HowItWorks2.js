/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "@/styles/HowItWroks.module.css";

const HowItWorks2 = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="bg-[#10141d] h-[500px] mt-10 md:mt-0 mb-10 mx-2 lg:mx-24 flex flex-col md:flex-row justify-around gap-5 items-center z-0 relative">
      <div className="w-1/2">
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-center md:text-start text-2xl md:text-5xl font-extrabold text-white"
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
          className="text-white font-thin text-base md:text-xl uppercase mt-5 text-center md:text-start"
          style={{
            fontFamily: "Raleway",
            fontWeight: "500",
          }}
        >
          Boast turns your customers, <br /> into your brand marketeers
        </p>
      </div>
      {/*  */}
      {/* <div className="w-[80%] md:w-[50%] lg:w-1/2 text-white z-0 bg-[#10141d] "> */}
      {/* 1 */}
      <div className={styles.howItWorksContainer}>
        <Parallax pages={4}>
          <ParallaxLayer sticky={{ start: 0, end: 3 }} offset={1.5} speed={1.5}>
            <div className={`${styles.card}`}>
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
                <p className="text-white">
                  Influential Boast users make a full-price purchase at your POS
                </p>
              </div>
            </div>
          </ParallaxLayer>
          {/* 2 */}
          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            offset={2.5}
            speed={1.5}
            // style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div className={`${styles.card} `}>
              <img src="/images/carousel/2.png" className="w-52 ml-16" alt="" />
              <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
                <h3
                  className="text-xl md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  2. They Login
                </h3>
                <p className="text-white">
                  Influential Boast users make a full-price purchase at your POS
                </p>
              </div>
            </div>
          </ParallaxLayer>
          {/* 3 */}
          <ParallaxLayer
            sticky={{ start: 2, end: 3 }}
            offset={2.5}
            speed={1.5}
            // style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div className={`${styles.card} `}>
              <img src="/images/carousel/3.png" className="w-52 ml-24" alt="" />
              <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
                <h3
                  className="text-xl md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  3. Load Credit
                </h3>
                <p className="text-white">
                  Influential Boast users make a full-price purchase at your POS
                </p>
              </div>
            </div>
          </ParallaxLayer>
          {/* 4 */}
          <ParallaxLayer
            sticky={{ start: 3, end: 3 }}
            offset={2.5}
            speed={1.5}
            // style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div className={`${styles.card}`}>
              <img src="/images/carousel/4.png" className="w-52 ml-32" alt="" />
              <div className="border rounded-2xl  p-7 border-gray-600 border-b-0">
                <h3
                  className="text-xl md:text-3xl text-white"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                  }}
                >
                  4. Start Campaign with a tap
                </h3>
                <p className="text-white">
                  Influential Boast users make a full-price purchase at your POS
                </p>
              </div>
            </div>
          </ParallaxLayer>
          {/* 4 */}
          {/* </div> */}
        </Parallax>
      </div>
    </div>
  );
};

export default HowItWorks2;
