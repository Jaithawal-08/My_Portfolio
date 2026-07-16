import React from "react";
import Video from "../Components/Home/Video";
import HomeHeroText from "../Components/Home/HomeHeroText";
import Image from "../Components/Home/Image";
import HomeBottomText from "../Components/Home/HomeBottomText";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-20">
         <Video />
      </div>

    <div className="fixed inset-0 -z-10 bg-black/65"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-1 flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 pt-20">
          <div className="w-full lg:w-1/2">
            <HomeHeroText />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Image />
          </div>
        </div>
        <div className="px-8 md:px-16 lg:px-24 pb-8">
          <HomeBottomText />
        </div>
      </div>
    </div>
  );
};
export default Home;