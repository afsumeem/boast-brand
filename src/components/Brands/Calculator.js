import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

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
    <div className="bg-[#10141d] text-white text-center mx-2 lg:mx-24 mb-20">
      <h2
        className="text-5xl bg-[#10141d]"
        style={{
          fontFamily: "Raleway",
          fontWeight: "800",
        }}
      >
        EARN FIRST, PAY LATER!
      </h2>
      <h5
        className="text-3xl mt-6 bg-[#10141d]"
        style={{
          fontFamily: "Raleway",
          fontWeight: "800",
        }}
      >
        CASHBACK VS REACH CALCULATOR
      </h5>
      <button
        className="mt-10 get-calculator border-2 py-2 px-3"
        onClick={toggleCalculator}
      >
        {showCalculator ? "Close Calculator" : "Get Calculator"}
      </button>

      <div
        className={`calculator-container ${
          showCalculator ? "fade-in" : "fade-out"
        }`}
      >
        <div className="w-[500px] mx-auto calculator mt-10 p-5 z-0">
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
            <h5 className="flex text-2xl mb-2 justify-center items-center text-[#FC0F67]">
              <FaDollarSign />
              <span className="text-2xl font-extrabold">{value}</span>
            </h5>
          </div>

          {/*  */}

          <div className="px-5 my-3">
            <h3 className="flex justify-between text-xl">
              Estimated Reach{" "}
              <span className="text-2xl">{value * 8}K &#129321;</span>
            </h3>
            <h3 className="flex justify-between text-xl my-2">
              Upfront Sales
              <span className="flex items-center text-2xl">
                <FaDollarSign />
                {value * 3}K &#128176;
              </span>
            </h3>
            <h3 className="flex justify-between text-xl">
              Shout Outs <span className="text-2xl">{value * 2} 📢</span>
            </h3>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Calculator;
