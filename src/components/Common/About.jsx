import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="w-full flex flex-col 
     bg-slate-100 text-black "
    >
      <div
        style={{
          backgroundImage: 'url("/image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
          justifyContent: "center", // Center vertically
        }}
        className="w-full  h-[600px] relative px-6"
      >
        <div className="flex flex-row items-center gap-4">
          <Image width={40} height={10} src="/line.png" alt="linija" />
          <h1 className="text-white uppercase">since 2020</h1>
          <Image width={40} height={0} src="/line.png" alt="linija" />
        </div>

        <h1 className="uppercase text-[48px] lg:text-[64px] font-bold text-white">
          O nama
        </h1>
        <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
          Uživajte u gastronomskom užitku gdje strast prema hrani postaje
          nezaboravno iskustvo, prepletajući tradiciju i suvremeni pristup
          kulinarskoj umjetnosti.
        </h2>
      </div>
      <div className="flex items-center justify-between bg-[#c1a6a633] py-8 lg:py-24 px-6 w-full flex-col lg:flex-row gap-12 lg:gap-0">
        <div className="flex w-full items-center flex-col">
          <Image
            width={120}
            height={2}
            src="/restaurant-logo1.png"
            alt="Logo"
          />
          <Image width={200} height={20} src="/title-shape.png" alt="Linija" />
        </div>
        <div>
          <h1 className="text-center text-[18px] flex text-[#36394c]">
            Restoran Hedonist na Vrbasu je gastronomski dragulj otvoren 2020.
            godine u srcu Banjaluke. Svojom jedinstvenom kombinacijom ukusnih
            jela i predivnog ambijenta pored rijeke Vrbas, Hedonist nudi
            nezaboravno iskustvo za sve ljubitelje fine hrane i uživanja u
            opuštenoj atmosferi. Naša strast je stvaranje nezaboravnih trenutaka
            za naše goste, uz pažljivo pripremljena jela od vrhunskih lokalnih
            sastojaka, spoj modernih kulinarskih tehnika i autentičnih okusa.
          </h1>
        </div>
        <div className="hidden w-full items-center flex-col  lg:flex">
          <Image
            width={120}
            height={2}
            src="/restaurant-logo1.png"
            alt="Logo"
          />
          <Image width={200} height={20} src="/title-shape.png" alt="Linija" />
        </div>
      </div>
    </div>
  );
};

export default About;
