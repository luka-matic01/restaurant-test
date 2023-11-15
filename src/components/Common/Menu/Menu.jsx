import Footer from "@/components/Nav/Footer";
import Image from "next/image";
import React from "react";

const Menu = () => {
  const mainCourse = [
    {
      id: 1,
      name: "Pileći medaljoni u kari sosu",
      description: "pileći file, miks povrća, kari, arborio riža",
      price: "17,00 KM",
    },
    {
      id: 2,
      name: "Chicken & cheese",
      description:
        "dimljeni otkošteni pileći batak u sosu sa 4 vrste sira, mladi krompir sa slaninom, salata sa šeri paradajzom i feta sirom",
      price: "18,00 KM",
    },
    {
      id: 3,
      name: "Hedonist piletina",
      description:
        "rolovana piletina sa čedar sirom i slaninom, podloga od rukole i miks povrća iz voka, krem sos od sira",
      price: "19,00 KM",
    },
    {
      id: 4,
      name: "Svinjska rebarca Hedonist (500 g)",
      description:
        "svinjska rebarca glazirana BBQ sosom, pomfrit od batat krompira, krema od majoneze",
      price: "19,00 KM",
    },
    {
      id: 5,
      name: "Svinjski medaljoni u florentin sosu",
      description: "svinjski file, miks povrća, riža",
      price: "19,00 KM",
    },
    {
      id: 6,
      name: "Punjena vješalica",
      description: "las kare, mocarela, krompirići",
      price: "19,00 KM",
    },
    { id: 7, name: "Karađorđeva šnicla", description: "", price: "22,00 KM" },
    {
      id: 8,
      name: "Teletina Hedonist (250 g)",
      description: "teletina sa mladim krompirom u kajmaku",
      price: "24,00 KM",
    },
    {
      id: 9,
      name: "Dimljena ćuretina sa mlincima (250 g)",
      description: "dimljeni ćureći file, mocarela, mlinci",
      price: "22,00 KM",
    },
    {
      id: 10,
      name: "Biftek na žaru (250 g)",
      description: "tradicionalno mariniran, poslužen uz povrće iz voka",
      price: "40,00 KM",
    },
    {
      id: 11,
      name: "Peper biftek",
      description:
        "stek u sosu na bazi zelenog bibera i crvenog vina, poslužen uz povrće iz voka",
      price: "43,00 KM",
    },
    {
      id: 12,
      name: "Biftek u maslinovom ulju (250 g)",
      description: "biftek, povrće iz voka",
      price: "45,00 KM",
    },
    {
      id: 13,
      name: "Ramstek Rio (250g)",
      description: "ramstek, mladi krompir, kajmak",
      price: "27,00 KM",
    },
    {
      id: 14,
      name: "Beef burger (200 g)",
      description:
        "junetina, paradajz, kiseli krastavci, ajsberg salata, krompirići, čedar sir, BBQ sos",
      price: "14,00 KM",
    },
  ];

  const mainCourseFish = [
    {
      id: 1,
      name: "Punjene lignje (300 g)",
      description:
        "lignje sa žara punjene kozicama i šeri paradajzom, dalmatinska garnitura",
      price: "24,00 KM",
    },
    {
      id: 2,
      name: "Lignje sa žara",
      description: "",
      price: "20,00 KM",
    },
    {
      id: 3,
      name: "Losos stek (250 g)",
      description: "grilovani losos na podlozi od povrća i posnih taljatela",
      price: "34,00 KM",
    },
    {
      id: 4,
      name: "Domaća pastrmka (400 g)",
      description: "pastrmka sa žara, dalmatinska garnitura",
      price: "19,50 KM",
    },
    {
      id: 5,
      name: "Orada (100 g)",
      description: "orada, dalmatinska garnitura",
      price: "8,00 KM",
    },
  ];

  const pastaFood = [
    {
      id: 1,
      name: "Pikant taljatele sa biftekom",
      description: "mocarela, čili, rukola, paradajz sos, masline",
      price: "18,50 KM",
    },
    {
      id: 2,
      name: "Taljatele sa piletinom i maskarpone sirom",
      description: "piletina, maskarpone, domaći pesto, rendani orasi",
      price: "15,50 KM",
    },
    {
      id: 3,
      name: "Njoke sa piletinom i vrganjima",
      description: "pileći file, vrganji, maslac, parmezan, njoke",
      price: "17,00 KM",
    },
    {
      id: 4,
      name: "Rižoto sa dimljenim lososom",
      description:
        "dimljeni losos, šampinjoni, praziluk, špinat, sjemenke bundeve",
      price: "17,00 KM",
    },
    {
      id: 5,
      name: "Rižoto sa piletinom",
      description: "piletina, šampinjoni, praziluk, maslac",
      price: "15,00 KM",
    },
    {
      id: 6,
      name: "Rižoto sa morskim plodovima",
      description: "morski plodovi, arborio riža, paradajz sos",
      price: "15,00 KM",
    },
    {
      id: 7,
      name: "Taljatele sa biftekom i tartufima",
      description: "taljatele, biftek, tartufat",
      price: "15,00 KM",
    },
  ];

  const courses = [
    "Glavna jela",
    "Glavna jela (riba)",
    "Pasta i rižoto",
    "Vege kutak",
    "Doručak",
    "Predjela",
    "Supe",
    "Obrok salate",
    "Dječiji kutak",
    "Deserti",
  ];

  return (
    <div className=" text-[#36394c] flex flex-col items-center justify-center">
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
        <h1 className="uppercase text-[48px] lg:text-[64px] font-bold text-white">
          MENI
        </h1>
        <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
          Otkrijte neodoljive ukuse u našem jelovniku koji spaja vrhunsku
          kulinarsku vještinu s pažljivo odabranim sastojcima.
        </h2>
      </div>
      <div className="px-6 w-full max-w-[1400px]">
        <div className="flex flex-col items-center justify-center gap-1 my-8">
          {/* <Image
          alt="O nama"
          src="/extravagant-line.png"
          width={400}
          height={100}
        /> */}
        </div>
        {/* <div className="flex items-center justify-center">
          <h1 className="text-center text-[18px] md:text-[18px] max-w-[700px]">
            Okusite naše jedinstvene i pažljivo pripremljene specijalitete dok
            uživate u sofisticiranom i ugodnom ambijentu Hedonista.
            <br /> Spremni smo zadovoljiti sva Vaša čula i pružiti Vam
            gastronomsko iskustvo koje ćete dugo pamtiti.
            <br /> Dobrodošli u Hedonist!
          </h1>
        </div> */}

        <div className="flex items-center justify-center my-4 mx-4">
          <div className="flex items-center gap-5 text-[18px] max-w-[1200px] lg:text-[24px] overflow-x-scroll my-4">
            {courses?.map((c) => (
              <div
                key={c}
                className="px-4 py-1 border-2 rounded-xl text-center whitespace-nowrap bg-[#f28274] text-white"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            GLAVNA JELA (MESO)
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12 text-[18px] lg:text-[24px]">
          {mainCourse?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col  bg-[#ADD8E6] p-3 rounded-md justify-center w-full"
            >
              <div className="flex textShadow flex-col gap-3 ">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1 className="text-shadow-xl">{food?.name}</h1>
                  </div>
                  <div className="px-2 lg:text-[18px] text-[14px] md:text-[16px] text-center flex items-center rounded-sm  justify-center py-0.5 bg-[#36394c] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
                <h2 className="text-[14px]">{food.description}</h2>
              </div>

              <h1 className="opacity-30">
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            GLAVNA JELA (RIBA)
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12 text-[18px] lg:text-[24px]">
          {mainCourseFish?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-orange-100 p-3 rounded-md  w-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="px-2 lg:text-[18px] text-[14px] md:text-[16px] text-center flex items-center rounded-sm  justify-center py-0.5 bg-[#f28274] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
                <h2 className="text-[14px]">{food.description}</h2>
              </div>

              <h1 className="opacity-30">
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:mb-12 mt-12 lg:mt-24 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            PASTA I RIŽOTO
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12 text-[18px] lg:text-[24px]">
          {pastaFood?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-green-100 p-3 rounded-md w-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="px-2 lg:text-[18px] text-[14px] md:text-[16px] text-center flex items-center rounded-sm  justify-center py-0.5 bg-[#2ebea5] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
                <h2 className="text-[14px]">{food.description}</h2>
              </div>

              <h1 className="opacity-30">
                _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
              </h1>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
