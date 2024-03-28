/* eslint-disable @next/next/no-img-element */
import { MdArrowOutward } from "react-icons/md";
const ContactUs = () => {
  return (
    <>
      <div className="h-[600px] flex flex-col items-center justify-center">
        <h2
          className="text-5xl text-white text-center"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          WANT YOUR BRAND AND <br /> PRODUCT FEATURED LIKE THIS?
        </h2>

        <button className="mt-10  get-calculator border-2 py-2 px-4 flex items-center gap-2 text-white text-xl duration-300">
          Contact Us <MdArrowOutward />
        </button>
      </div>
      <div className="mx-2 lg:mx-24 border-t-1 border-gray-600"></div>
    </>
  );
};

export default ContactUs;
