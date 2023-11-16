import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative max-h-[600px]" style={{ textAlign: "center" }}>
      {/* Increase z-index for image container */}
      <div
        className="w-full relative"
        style={{ height: "500px", position: "relative" }}
      >
        <Image
          alt="Fotografija restorana"
          src="/restaurant-photo.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          transform: "translate(-50%, -50%)",
        }}
        className="absolute left-[50%] top-[60%] z-10 text-white"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row items-center gap-4">
            <Image width={40} height={10} src="/line.png" alt="linija" />
            <h1 className="text-[12px] md:text-[18px]">
              DOBRODOŠLI U HEDONIST
            </h1>
            <Image width={40} height={10} src="/line.png" alt="linija" />
          </div>

          <h1 className="text-[24px] md:text-[32px] lg:text-[42px]">
            Pravi gastro užitak na Vrbasu!
          </h1>
          <button className="uppercase text-[15px] lg:text-[18px] px-12 py-2 bg-[#c55a4b] hover:bg-[#833b32] text-white">
            POGLEDAJ MENI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
