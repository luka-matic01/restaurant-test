import React from "react";
import Image from "next/image";

const MainDishes = () => {
  return (
    <div className="flex w-full flex-col bg-slate-100 py-12">
      <div className="flex gap-3 w-full justify-center items-center mb-6 lg:mb-8">
        <Image src="/gold-line.png" width={40} height={2} alt="linija" />
        <h1 className="text-[#D1B000]">GASTRO UŽITAK</h1>
        <Image src="/gold-line.png" width={40} height={2} alt="linija" />
      </div>
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <Image src="/blue-line.png" width={560} height={2} alt="linija" />
        <h1 className="text-[#36394c] text-center font-bold text-[17px] lg:text-[28px]">
          ŠEF KUHINJE VAM PREPORUČUJE
        </h1>
        <Image src="/blue-line.png" width={560} height={2} alt="linija" />
      </div>
      <div className="flex w-full gap-6 lg:gap-16 px-6 flex-col md:flex-row justify-center  items-center my-6 ">
        <div className="flex flex-col items-center text-white card-container card-wrapper">
          <div className="relative card-wrapper">
            <Image
              src="/card-food.jpg"
              width={370}
              height={250}
              alt="Fotografija"
              className="rounded-t-xl"
            />
            <span className="absolute top-0 right-0 px-6 py-2 text-bold rounded-md bg-[#36394c] text-white">
              24,00 KM
            </span>
          </div>
          <span className="flex bg-[#36394c] rounded-b-xl w-[370px] flex-col items-center p-4 max-w-full">
            <h1 className="text-[17px] lg:text-[24px]">
              Teletina Hedonist (250 g)
            </h1>
            <h1 className="text-[14px] text-center">
              teletina sa mladim krompirom u kajmaku
            </h1>
          </span>
        </div>
        <div className="flex flex-col items-center text-white card-container card-wrapper">
          <div className="relative card-wrapper">
            <Image
              src="/card-food.jpg"
              width={370}
              height={250}
              alt="Fotografija"
              className="rounded-t-xl"
            />
            <span className="absolute top-0 right-0 px-6 py-2 text-bold rounded-md bg-[#c55a4b] text-white">
              19,00 KM
            </span>
          </div>
          <span className="flex bg-[#c55a4b] rounded-b-xl w-[370px] flex-col items-center p-4 max-w-full">
            <h1 className="text-[17px] lg:text-[24px]">Hedonist piletina</h1>
            <h1 className="text-[14px] text-center">
              rolovana piletina sa čedar sirom i slaninom, podloga od rukole i
              miks povrća iz voka, krem sos od sira
            </h1>
          </span>
        </div>
        <div className="flex flex-col items-center text-white card-container card-wrapper">
          <div className="relative card-wrapper">
            <Image
              src="/card-food.jpg"
              width={370}
              height={250}
              alt="Fotografija"
              className="rounded-t-xl"
            />
            <span className="absolute top-0 right-0 px-6 py-2 text-bold rounded-md bg-[#2ebea5] text-white">
              27,00 KM
            </span>
          </div>
          <span className="flex bg-[#2ebea5] rounded-b-xl w-[370px] flex-col items-center p-4 max-w-full">
            <h1 className="text-[17px] lg:text-[24px]">Ramstek Rio (250g)</h1>
            <h1 className="text-[14px] text-center">
              ramstek, mladi krompir, kajmak
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainDishes;
