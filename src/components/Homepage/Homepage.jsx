import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative" style={{ textAlign: "center" }}>
      {/* Increase z-index for image container */}
      <div
        className="w-full relative"
        style={{ height: "70vh", position: "relative" }}
      >
        <Image
          alt="Fotografija restorana"
          src="/restaurant-photo.jpg"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <div
        style={{
          transform: "translate(-50%, -50%)",
        }}
        className="absolute left-[50%] top-[60%] z-10 text-white"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-[24px] md:text-[32px] lg:text-[42px]">
            Pravi gastro užitak na Vrbasu!
          </h1>

          <button className="uppercase text-[15px] lg:text-[18px] px-12 py-2 bg-[#c55a4b] hover:bg-[#833b32] text-white">
            Prikaži jelovnik
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
