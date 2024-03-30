import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Calculator = () => {
  const [value, setValue] = useState(30);
  const [showCalculator, setShowCalculator] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toggleCalculator = () => {
    setShowCalculator(!showCalculator);
  };

  //
  return (
    <div className=" text-white text-center mx-2 lg:mx-24 mb-20">
      <h2
        className="text-5xl "
        style={{
          fontFamily: "Raleway",
          fontWeight: "800",
        }}
      >
        EARN FIRST, PAY LATER!
      </h2>
      <h5
        className="text-xl mt-6 "
        style={{
          fontFamily: "Raleway",
          fontWeight: "800",
        }}
      >
        With boast, seize $50 credit <br /> and embark on a 10-day trial to
        unlock your potential!
      </h5>
      <button
        className="mt-10  get-calculator border-2 py-2 px-3 fixed -left-10 top-56 flex items-center gap-2 -rotate-90"
        onClick={toggleCalculator}
      >
        Calculator {showCalculator ? <FaArrowUpLong /> : <FaArrowDown />}
      </button>

      <div
        className={`calculator-container fixed left-0 top-[360px] z-50 ${
          showCalculator ? "fade-in" : "fade-out"
        }`}
      >
        <div className="w-[500px] calculator p-5  z-0">
          <div className="flex justify-end">
            <button
              className="p-1 border border-[#FC0F67] rounded-full hover:bg-[#FC0F67] text-[#FC0F67] hover:text-white duration-300"
              onClick={toggleCalculator}
            >
              <IoClose />
            </button>
          </div>
          <h5 className="text-xl 2xl:text-3xl mb-2">
            CASHBACK VS REACH CALCULATOR
          </h5>
          <div className="flex w-full gap-2 justify-center items-center ">
            <div className="range w-full">
              <input
                type="range"
                min="1"
                max="200"
                value={value}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <h5 className="flex text-2xl 2xl:text-3xl mb-2 justify-center items-center text-[#FC0F67]">
              <FaDollarSign />
              <span className="text-2xl 2xl:text-3xl font-extrabold">
                {value}
              </span>
            </h5>
          </div>

          {/*  */}

          <div className="px-5 my-2">
            <h3 className="flex justify-between text-lg 2xl:text-xl">
              Estimated Reach{" "}
              <span className="text-xl">
                {value}K - {value * 5}K &#129321;
              </span>
            </h3>
            <h3 className="flex justify-between text-lg my-2 2xl:text-xl">
              Upfront Sales
              <span className="flex items-center text-xl">
                <FaDollarSign />
                {parseFloat(value * 0.05).toFixed(2)}K -{" "}
                {parseFloat(value * 0.1).toFixed(1)}K &#128176;
              </span>
            </h3>
            <h3 className="flex justify-between text-lg 2xl:text-xl">
              Shout Outs{" "}
              <span className="text-xl">{parseInt(value * 1.5)} 📢</span>
            </h3>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Calculator;
