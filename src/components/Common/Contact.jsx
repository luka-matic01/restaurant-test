"use client";
import { FaHome } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import ContactForm from "../Contact/ContactForm";

const Contact = () => {
  return (
    <div
      className="w-full flex flex-col 
     text-[#36394c] mb-12"
    >
      <div
        style={{
          backgroundImage: 'url("/contact-image.jpg")',
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
          <h1 className="text-white uppercase">contact us</h1>
          <Image width={40} height={10} src="/line.png" alt="linija" />
        </div>
        <h1 className="uppercase text-[48px] lg:text-[64px] font-bold text-white">
          KONTAKT
        </h1>
        <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
          Dobrodošli u naš restoran! Za sve dodatne informacije ili upite,
          molimo Vas koristite sljedeće kontakt informacije
        </h2>
      </div>

      <div className="flex items-center lg:items-start flex-col gap-6 w-full p-2 lg:px-20 pt-12 lg:justify-center justify-start">
        <h1 className="text-center lg:text-start lg:text-[24px] flex justify-center items-center text-[17px]"></h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start justify-around w-full">
            <ContactForm />
            <div className="flex flex-col gap-4 justify-between min-h-[550px]">
              <h1 className="max-w-[500px] text-center lg:text-start text-[18px] font-semibold mb-6 lg:mb-12">
                Ako imate bilo kakva pitanja, prijedloge, sugestije ili želite
                podijeliti pohvale, slobodno nas kontaktirajte. Tu smo da
                odgovorimo na Vaše poruke i sa zadovoljstvom ćemo čuti Vaše
                mišljenje. Vaša povratna informacija je za nas veoma važna i
                doprinosi unaprijeđenju naših usluga. Hvala Vam što ste dio naše
                zajednice!
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-5 items-center">
                  <h1 className=" bg-[#2ebea5] hover:bg-[#36394c] p-4 rounded-full">
                    <FaHome size={25} className="text-white" />
                  </h1>
                  <h1 className="text-[18px] lg:text-[20px] font-semibold">
                    Prote Todora Srdića BB, Banja Luka 78000
                  </h1>
                </div>
                <div className="flex flex-row gap-5 items-center">
                  <h1 className=" bg-[#2ebea5] hover:bg-[#36394c] p-4 rounded-full">
                    <AiFillPhone size={25} className="text-white" />
                  </h1>
                  <h1 className="text-[18px] lg:text-[20px] font-semibold">
                    +387 65 459 901
                  </h1>
                </div>
                <div className="flex flex-row gap-5 items-center">
                  <h1 className=" bg-[#2ebea5] hover:bg-[#36394c] p-4 rounded-full">
                    <MdEmail size={25} className="text-white" />
                  </h1>
                  <h1 className="text-[18px] lg:text-[20px] font-semibold">
                    info@restoranmarcopolo.com{" "}
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <h1 className=" bg-[#2ebea5] hover:bg-[#36394c] p-3 rounded-full">
                  <AiFillInstagram size={35} className="text-white" />
                </h1>
                <h1 className=" bg-[#2ebea5] hover:bg-[#36394c] p-3 rounded-full">
                  <AiFillFacebook size={35} className="text-white" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
