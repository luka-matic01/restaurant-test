import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="w-full text-[#36394c]">
      <div className="flex flex-col items-center justify-center gap-1 my-8">
        <Image
          alt="O nama"
          src="/extravagant-line.png"
          width={400}
          height={100}
        />
        <h1 className="uppercase text-[18px] lg:text-[32px] font-bold">
          Jelovnik
        </h1>
      </div>
      <div className="flex items-center justify-center my-4 mx-4">
        <div className="flex items-center gap-5 text-[18px] max-w-[1200px] lg:text-[24px] overflow-x-scroll my-4">
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Glavna jela (meso)
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Glavna jela (riba)
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Pasta i rižoto
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Vege kutak
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Doručak
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Predjela
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Supe
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Obrok salate
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Dječiji kutak
          </div>
          <div className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap">
            Deserti
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
