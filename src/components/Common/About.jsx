import Image from "next/image";
import React from "react";

const About = () => {
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
      <div className="flex items-center justify-center lg:bg-[#c1a6a633] py-8 lg:py-14 px-6 w-full flex-col lg:flex-row gap-6 lg:gap-0">
        <div className="flex w-full items-center flex-col">
          <div className="flex flex-col items-center justify-center gap-1 mb-16">
            {/* <Image
              alt="O nama"
              src="/extravagant-line.png"
              width={400}
              height={100}
            /> */}
            <h1 className="uppercase text-[18px] lg:text-[32px] font-bold">
              O nama
            </h1>
          </div>

          <h1 className="text-center text-[18px]">
            Naš restoran je mesto gde se hrana pretvara u osmehe. Sa svetlim
            ambijentom i atmosferom koja vas poziva da zaboravite na vreme, mi
            smo tu da pružimo gastronomsko iskustvo koje će vas ostaviti bez
            daha - i to doslovno! Naša kuhinja je poput simfonije ukusa koja će
            vas odvesti na putovanje koje nikada nećete zaboraviti. Mi verujemo
            u čaroliju hrane i njenu moć da spoji ljude, stoga je naša misija da
            stvorimo trenutke koje ćete deliti sa svojim najbližima, uz obroke
            koje će teže zaboraviti. Dođite kod nas i dozvolite nam da vas
            odvedemo na kulinarsko putovanje koje će oduševiti vaše čulo ukusa.
            Jer, u našem restoranu, hrana je više od obroka - to je priča koju
            delimo sa svakim zalogajem. Smestite se udobno i dozvolite nam da
            vas vodimo kroz gastronomski lavirint koji će probuditi vaše nepce.
            Dobrodošli u naš svet gurmanskih čarolija!
          </h1>
        </div>

        <div className="flex w-full items-center flex-col relative">
          <img
            alt="photo"
            src="/restaurant-food.jpg"
            style={{ maxWidth: "100%", height: "auto", width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
