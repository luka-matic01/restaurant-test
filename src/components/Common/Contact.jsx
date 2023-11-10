"use client";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col my-6 w-full justify-center items-center  max-h-[700px] text-[#36394c]">
      <div className="flex flex-col items-center justify-center gap-1 mb-16">
        <Image
          alt="Kontakt"
          src="/extravagant-line.png"
          width={400}
          height={100}
        />
        <h1 className="uppercase text-[18px] lg:text-[32px] font-bold">
          Kontakt
        </h1>
      </div>
      <div className="flex items-center lg:items-start flex-col gap-6 w-full p-2 lg:px-20 pt-6 lg:justify-center justify-start">
        <h1 className="font-bold text-[24px]">Kontaktirajte nas</h1>
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
        <h1 className="text-center lg:text-start lg:text-[24px] text-[17px]">
          Stojimo Vam na raspolaganju za bilo kakve potrebe ili specifične
          zahtijeve. Radujemo se Vašem dolasku i prilici da Vas ugostimo u našem
          restoranu.
        </h1>
      </div>
    </div>
  );
};

export default Contact;
