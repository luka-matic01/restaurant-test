"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";

const Card = ({ imgSrc, price, title, description, bgColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={`flex flex-col items-center text-white card-container`}>
      <motion.div
        ref={ref}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        className="relative"
      >
        <div className="card-wrapper">
          <Image
            src={imgSrc}
            width={370}
            height={250}
            alt="Fotografija"
            className="rounded-t-xl"
          />
          <span
            className={`absolute top-0 right-0 px-6 py-2 text-bold rounded-md bg-${bgColor} text-white`}
          >
            {price}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex bg-${bgColor} rounded-b-xl w-[370px] flex-col items-center p-4 max-w-full`}
        >
          <h1 className="text-[17px] lg:text-[24px]">{title}</h1>
          <h1 className="text-[14px] text-center">{description}</h1>
        </motion.span>
      </motion.div>
    </div>
  );
};

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
        <Card
          imgSrc="/card-food.jpg"
          price="24,00 KM"
          title="Teletina Hedonist (250 g)"
          description="teletina sa mladim krompirom u kajmaku"
          bgColor="[#36394c]"
        />
        <Card
          imgSrc="/card-food.jpg"
          price="19,00 KM"
          title="Hedonist piletina"
          description="rolovana piletina sa čedar sirom i slaninom, podloga od rukole i miks povrća iz voka, krem sos od sira"
          bgColor="[#c55a4b]"
        />
        <Card
          imgSrc="/card-food.jpg"
          price="27,00 KM"
          title="Ramstek Rio (250g)"
          description="ramstek, mladi krompir, kajmak"
          bgColor="[#2ebea5]"
        />
      </div>
    </div>
  );
};

export default MainDishes;
