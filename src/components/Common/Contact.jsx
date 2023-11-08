"use client";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="flex flex-col my-6 w-full justify-center items-center  max-h-[400px]">
      <div className="py-8">
        <div class="flex items-center">
          <hr class="flex-grow w-[200px] max-w-[80px] lg:max-w-[200px]  text-white border-t border-black" />
          <span class="px-3 text-black text-[18px] lg:text-[36px]">
            KONTAKT
          </span>
          <hr class="flex-grow w-[200px] max-w-[80px] lg:max-w-[200px] test-white border-t border-black" />
        </div>
      </div>
      <div className="flex items-center lg:items-start flex-col gap-6 w-full p-2 lg:px-20 pt-6 lg:justify-center justify-start">
        <h1 className="font-bold text-[24px]">Kontaktirajte nas</h1>
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
