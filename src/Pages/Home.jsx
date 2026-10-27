import React from "react";
import HomeHeroText from "../Components/Home/HomeHeroText";
import Image from "../Components/Home/Image";
import HomeBottomText from "../Components/Home/HomeBottomText";
import HomeScrollSection from "../Components/Home/HomeScrollSection";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between pt-24">
      <div className="flex flex-1 flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-8">
        <div className="w-full lg:w-1/2">
          <HomeHeroText />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Image />
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 pb-10">
        <HomeBottomText />
      </div>
      <HomeScrollSection />
    </div>
  );
};

export default Home;