import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full min-h-[222px]  bg-[#36394c] text-white ">
      <div className="flex flex-col gap-4 items-center justify-center pt-4 mb-3">
        <Image
          src="/restaurant-logo.png"
          alt="Hedonist logo"
          width={400}
          height={100}
        />
        <div className="flex text-center justify-center items-center gap-3">
          <h1>Prote Todora Srdića BB</h1>|<h1>Banja Luka</h1>|
          <h1>+387 65 459 90</h1>
        </div>
      </div>
      <div className="pb-4 flex flex-col gap-4 lg:gap-0 justify-center lg:flex-row lg:justify-between items-center p-3 w-full ">
        <h1 className="text-center">
          Restoran Hedonist © 2023 / Sva Prava zadržana
        </h1>
        <div className="flex items-center justify-center gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/restoranhedonist/"
            className=" bg-[#f28274] cursor-pointer p-3 rounded-full"
          >
            <AiFillInstagram size={25} className="text-white" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/restoranhedonist"
            className=" bg-[#f28274] cursor-pointer p-3 rounded-full"
          >
            <AiFillFacebook size={25} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
