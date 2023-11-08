import React from "react";

const About = () => {
  return (
    <div className="w-full flex bg-gray-100 py-8 lg:py-20 px-6">
      <div className="flex items-center justify-center w-full flex-col lg:flex-row gap-6 lg:gap-0">
        <div className="flex w-full items-center flex-col">
          <div className="py-8">
            <div class="flex items-center">
              <hr class="flex-grow w-[200px] max-w-[80px] lg:max-w-[200px]  text-white border-t border-black" />
              <span class="px-3 text-black text-[18px] lg:text-[36px]">
                O NAMA
              </span>
              <hr class="flex-grow w-[200px] max-w-[80px] lg:max-w-[200px] test-white border-t border-black" />
            </div>
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
