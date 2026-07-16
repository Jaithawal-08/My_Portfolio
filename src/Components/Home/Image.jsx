import React from "react";
import AdminImg from "./AdminImg.jpeg";

const Image = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

    <div className="group relative overflow-hidden rounded-[35px] p-2 border-4 border-cyan-400/60 transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_0_90px_rgba(34,211,238,0.6)]">

        <img
            src={AdminImg}
            alt="Jai Thawal"
            className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[560px] xl:w-[600px] h-auto rounded-[30px] object-cover brightness-85 transition-all duration-500 group-hover:brightness-100 group-hover:scale-105"
          />

    </div>

</div>
  );
};

export default Image;