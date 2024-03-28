import RootLayout from "@/components/Layout/RootLayout";
import HeroSection from "@/components/UI/HeroSection";
import HowDoesItWork from "@/components/UI/HowDoesItWork";
import SecondSection from "@/components/UI/SecondSection";
import ThirdSection from "@/components/UI/ThirdSection";
import WishlistForm from "@/components/UI/WishlistForm";
import EligibilitySection from "@/components/UI/EligibilitySection";
import BrandSection from "@/components/UI/BrandSection";
import AnimatedCursor from "react-animated-cursor";
import LargestCommunity from "@/components/UI/LargestCommunity";
import Head from "next/head";

export default function HomePage() {
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
      <AnimatedCursor
        innerSize={15}
        outerSize={0}
        color="#fff"
        outerAlpha={0.2}
        innerScale={2}
        outerScale={0}
        innerStyle={{ border: "2px solid black", backgroundColor: "#fd7f3e" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <HeroSection />
      <SecondSection />
      <BrandSection />
      <ThirdSection />
      <HowDoesItWork />
      <LargestCommunity />
      <EligibilitySection />
      <WishlistForm />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
