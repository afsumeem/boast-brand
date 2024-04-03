import Benefits from "@/components/Brands/Benefits";
import BrandHero from "@/components/Brands/BrandHero";
import Calculator from "@/components/Brands/Calculator";
import ContactUs from "@/components/Brands/ContactUs";
import Dashboard from "@/components/Brands/Dashboard";
import HowItWorks from "@/components/Brands/HowItWorks";
import MagicHappens from "@/components/Brands/MagicHappens";
import Tab from "@/components/Brands/Tab";
import TopBrands from "@/components/Brands/TopBrands";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
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
    <div className=" bg-slate-100">
      <Head>
        <title>
          Boast: Get Cashback Rewards by Shopping | Early Access Program
        </title>
        <meta name="description" content="Your meta description here" />
        <meta
          name="description"
          content="Boast is an UGC marketplace that connects brands with influencers, offering cashback rewards for promoting purchases. Join our early access program"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          itemProp="description"
          content="Boast is an innovative UGC marketplace that connects brands with influencers, offering cashback rewards for promoting purchases. !"
        />
        <meta
          property="og:title"
          content="Boast: Get Cashback Rewards by Shopping | Early Access Program"
        />
      </Head>
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
    </div>
  );
}
