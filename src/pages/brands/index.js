import BrandHero from "@/components/Brands/BrandHero";
import Calculator from "@/components/Brands/Calculator";
import ContactUs from "@/components/Brands/ContactUs";
import Dashboard from "@/components/Brands/Dashboard";
import HowItWorks from "@/components/Brands/HowItWorks";
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
    <div className="bg-[#10141d] pb-32">
      <BrandHero />
      <Tab goToTop={goToTop} />
      <HowItWorks />
      <Dashboard />
      <Calculator />
      <TopBrands />
      <ContactUs />
    </div>
  );
};

export default BrandPage;
