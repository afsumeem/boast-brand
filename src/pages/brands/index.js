import Benefits from "@/components/Brands/Benefits";
import BrandHero from "@/components/Brands/BrandHero";
import Calculator from "@/components/Brands/Calculator";
import ContactUs from "@/components/Brands/ContactUs";
import Dashboard from "@/components/Brands/Dashboard";
import HowItWorks from "@/components/Brands/HowItWorks";
import HowItWorks2 from "@/components/Brands/HowItWorks2";
import MagicHappens from "@/components/Brands/MagicHappens";
import Tab from "@/components/Brands/Tab";
import TopBrands from "@/components/Brands/TopBrands";
import React, { useEffect, useState } from "react";

const BrandPage = () => {
  //
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#10141d] pb-20">
      <BrandHero />
      <Tab goToTop={goToTop} />
      <HowItWorks />
      {/* <HowItWorks2 /> */}
      <Benefits />

      <div className="calc-section pt-12 pb-5">
        <Calculator />
        <TopBrands />
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <MagicHappens />
      <Dashboard />
      <ContactUs />
    </div>
  );
};

export default BrandPage;
