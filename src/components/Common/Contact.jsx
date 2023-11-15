"use client";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      className="w-full flex flex-col 
     text-[#36394c]"
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
        <h1 className="text-white uppercase">since 2020</h1>
        <h1 className="uppercase text-[48px] lg:text-[64px] font-bold text-white">
          O nama
        </h1>
        <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
          Otkrijte neodoljive ukuse u našem jelovniku koji spaja vrhunsku
          kulinarsku vještinu s pažljivo odabranim sastojcima.
        </h2>
      </div>

      <div className="flex items-center lg:items-start flex-col gap-6 w-full p-2 lg:px-20 pt-12 lg:justify-center justify-start">
        <h1 className="text-center lg:text-start lg:text-[24px] flex justify-center items-center text-[17px]">
          Dobrodošli u naš restoran! Za sve dodatne informacije, rezervacije ili
          upite, molimo Vas koristite sljedeće kontakt informacije:
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-5 items-center">
            <h1 className=" bg-[rgb(242,130,116)] p-4 rounded-full">
              <FaHome size={25} className="text-white" />
            </h1>
            <h1 className="text-[18px] lg:text-[20px] font-semibold">
              Prote Todora Srdića BB, Banja Luka 78000
            </h1>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <h1 className=" bg-[#f28274] p-4 rounded-full">
              <AiFillPhone size={25} className="text-white" />
            </h1>
            <h1 className="text-[18px] lg:text-[20px] font-semibold">
              +387 65 459 901
            </h1>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <h1 className=" bg-[#f28274] p-4 rounded-full">
              <MdEmail size={25} className="text-white" />
            </h1>
            <h1 className="text-[18px] lg:text-[20px] font-semibold">
              info@restoranmarcopolo.com{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
