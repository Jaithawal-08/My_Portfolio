import React from "react";
import bgVideo from "./Bgimg.mp4";

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full object-cover brightness-[0.7] contrast-[1.05]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
