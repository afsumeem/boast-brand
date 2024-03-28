import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="flex flex-col lg:flex-row max-w-full lg:max-w-7xl mx-auto py-10 justify-center gap-10">
        <div className="flex flex-col w-full lg:w-3/6 ">
          <div className="flex gap-3 mx-5 lg:mx-0">
            <Image src={"/images/1212.png"} width={100} height={0} alt="Logo" />
          </div>
          <div className="flex flex-col my-5 text-white mx-7 lg:mx-0">
            <p className="text-justify text-sm text-gray-200">
              Boast provides end-to-end UGC marketing for businesses using their
              own customers by implementing a cashback model. Brands top up
              marketing funds, enabling us to offer cashbacks ranging from 10%
              to 100% to our members. When customers make purchases and share on
              social media, they receive cashback rewards.
            </p>
          </div>
          <div className="flex gap-3 mx-7 lg:mx-0">
            <a
              href="https://web.facebook.com/boastbrand/"
              target="blank"
              className="text-[#ff4e50] bg-black p-3 rounded-lg "
            >
              <FaFacebook className="text-lg" />
            </a>

            <a
              href="https://www.instagram.com/getboastofficial/"
              target="blank"
              className="text-[#ff4e50] bg-black p-3 rounded-lg"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
        {/* 2nd section */}
        <div className="mx-7 lg:mx-0">
          <div className=" text-gray-100">
            <h4 className=" text-xl font-extrabold mb-2">Office</h4>
            <p className=" text-sm text-gray-300">
              136, Kalachadpur, North Baridhara, Dhaka 1206, Bangladesh
            </p>
            <h4 className=" text-xl font-extrabold mt-3 mb-2">Contacts</h4>
            <p className=" text-sm text-gray-300">
              +8801614395930 ridwan@xrougex.com
            </p>
            {/* <p className=" text-sm text-gray-300">+8801614395930 rehnuma@contentguy.co</p> */}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center  py-3 text-white font-normal">
        <p>© 2024 BOAST. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
