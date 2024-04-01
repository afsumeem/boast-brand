/* eslint-disable @next/next/no-img-element */

const HowItWorks2 = () => {
  return (
    <div className="bg-[#10141d] mt-16 mb-20 mx-2 lg:mx-24  z-0">
      <div>
        <h2
          data-aos="fade-down"
          data-aos-duration="500"
          className="text-center  text-2xl md:text-4xl font-extrabold text-white"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          HOW IT WORKS?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-white mb-10 font-thin text-base md:text-lg uppercase mt-5 text-center "
          style={{
            fontFamily: "Raleway",
            fontWeight: "500",
          }}
        >
          Boast turns your customers, <br /> into your brand marketeers
        </p>
      </div>
      <div className=" text-white z-0 bg-[#10141d] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
        <div className="">
          <img src="/images/carousel/1.png" className="w-40" alt="" />
          <div className="border rounded-2xl border-gray-600 border-b-0 p-5 h-40 item">
            <h3
              className="text-xl md:text-2xl mb-4 text-white"
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

        <div className="">
          <img src="/images/carousel/3.png" className="w-40 ml-24" alt="" />
          <div className="border rounded-2xl  p-5 border-gray-600 border-b-0 h-40 item">
            <h3
              className="text-xl md:text-2xl mb-4 text-white"
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
        <div className="">
          <img src="/images/carousel/4.png" className="w-40 ml-32" alt="" />
          <div className="border rounded-2xl  p-5 border-gray-600 border-b-0 h-40 item">
            <h3
              className="text-xl md:text-2xl mb-4 text-white"
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
      </div>
    </div>
  );
};

export default HowItWorks2;
