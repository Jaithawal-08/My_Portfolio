import React from "react";
import AdminImg from "./AdminImg.jpeg";

const Image = () => {
  return (
    <div className="w-full flex justify-center lg:justify-end">

      <div className="group relative overflow-hidden rounded-[35px] p-2 border-4 border-cyan-400/60 transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_0_90px_rgba(34,211,238,0.6)] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px]">

        <img
          src={AdminImg}
          alt="Jai Thawal"
          className="w-full rounded-[30px] object-cover brightness-85 transition-all duration-500 group-hover:brightness-100 group-hover:scale-105"
          loading="eager"
          decoding="async"
        />

      </div>

    </div>
  );
};

export default Image;
