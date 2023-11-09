"use client";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col my-6 w-full justify-center items-center  max-h-[700px]">
      <div className="flex flex-col items-center justify-center gap-1 mb-16">
        <h1 className="uppercase text-[18px] lg:text-[32px] font-bold">
          Kontakt
        </h1>
        <Image
          alt="Kontakt"
          src="/extravagant-line.png"
          width={400}
          height={100}
        />
      </div>
      <div className="flex items-center lg:items-start flex-col gap-6 w-full p-2 lg:px-20 pt-6 lg:justify-center justify-start">
        <h1 className="font-bold text-[24px]">Kontaktirajte nas</h1>
        <h1 className="text-center lg:text-start">
          Dobrodošli u naš restoran! Za sve dodatne informacije, rezervacije ili
          upite, molimo Vas koristite sljedeće kontakt informacije:
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-3">
            <h1>
              <FaHome size={25} className="text-[#f28274]" />
            </h1>
            <h1>odgovor</h1>
          </div>
          <div className="flex flex-row gap-3">
            <h1>
              <AiFillPhone size={25} className="text-[#f28274]" />
            </h1>
            <h1>odgovor</h1>
          </div>
          <div className="flex flex-row gap-3">
            <h1>
              <MdEmail size={25} className="text-[#f28274]" />
            </h1>
            <h1>odgovor</h1>
          </div>
        </div>
        <h1 className="text-center lg:text-start">
          Stojimo Vam na raspolaganju za bilo kakve potrebe ili specifične
          zahtijeve. Radujemo se Vašem dolasku i prilici da Vas ugostimo u našem
          restoranu.
        </h1>
      </div>
    </div>
  );
};

export default Contact;
