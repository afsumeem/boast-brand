import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className=" text-white mx-2 lg:mx-24 grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
      <div
        data-aos="fade-right"
        className=" text-white px-14 py-16 bg-[#0d1118] dashboard1"
        style={{ borderTopLeftRadius: "60px" }}
      >
        <h2
          className="text-3xl md:text-4xl mb-5 text-[#FFF6A5]"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          12k+ <br /> Influencer
        </h2>
        <p>Generated daily by each Boast user, on average.</p>
      </div>
      <div
        data-aos="flip-left"
        className="bg-[#0d1118] border-2 text-white px-10 py-20 dashboard2"
      >
        <h2
          className="text-3xl md:text-4xl mb-5 text-[#FFF6A5]"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          5x more conversions
        </h2>
        <p>Than the industry average</p>
      </div>
      <div
        data-aos="fade-left"
        className="bg-[#0d1118] text-white   px-10 py-20 rounded-br-[60px] dashboard3"
      >
        <h2
          className="text-3xl md:text-4xl mb-5 text-[#FFF6A5]"
          style={{
            fontFamily: "Raleway",
            fontWeight: "800",
          }}
        >
          1 tap <br /> campaign
        </h2>
        <p>Our app lets you start a campaign with just a tap</p>
      </div>
    </div>
  );
};

export default Dashboard;
