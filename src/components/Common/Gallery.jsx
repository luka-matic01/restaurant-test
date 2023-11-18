"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="w-full flex flex-col 
     bg-slate-100 text-black "
    >
      <div
        style={{
          backgroundImage: 'url("/gallery-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
          justifyContent: "center", // Center vertically
        }}
        className="w-full  h-[600px] relative px-6"
      >
        <motion.div
          ref={ref}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          <h1 className="uppercase flex w-full items-center justify-center text-[48px] lg:text-[64px] font-bold text-white">
            galerija
          </h1>
          <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
            Otkrijte harmoniju ukusa i sofisticiranog ambijenta kroz vizuelni
            prikaz naših jedinstvenih jela i prostora, dok istražujete Hedonist
            kroz našu pažljivo kuriranu galeriju slika.
          </h2>
        </motion.div>
      </div>
      <div className="flex items-center justify-center bg-[#c1a6a633] py-8 lg:py-24 px-6 w-full flex-col lg:flex-row gap-12 lg:gap-0">
        <div>
          <h1 className="text-center text-[18px] flex text-[#36394c] font-semibold max-w-[1200px]">
            U Hedonistu, naša galerija oživljava duh našeg restorana u
            Banjaluci, pružajući uvid u sofisticirani ambijent, toplu atmosferu
            i jedinstveni karakter koji definiše naš prostor. Kroz vizuelno
            putovanje kroz naše elegantno uređene prostorije, prelepe detalje
            enterijera i osvežavajuće trenutke okupljanja, otkrijte zašto je
            Hedonist ne samo destinacija za izvanredne ukuse, već i za
            nezaboravna iskustva.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
