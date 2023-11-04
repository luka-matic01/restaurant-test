"use client";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="flex flex-col my-6 w-full justify-center items-center">
      <div className="justify-center items-center flex w-full">
        <h1>Kontaktirajte nas</h1>
      </div>
      <div className="flex items-center lg:items-start flex-col gap-6 w-full p-2 lg:p-20 lg:justify-center justify-start">
        <h1>Kontaktirajte nas</h1>
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
      </div>
    </div>
  );
};

export default Contact;
