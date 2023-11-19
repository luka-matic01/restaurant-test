"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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

  const breakfastFood = [
    {
      id: 1,
      name: "Doručak Hedonist",
      description: "3 jaja, slanina, domaći sir, kobasica",
      price: "11,00 KM",
    },
    {
      id: 2,
      name: "Omlet pršut",
      description: "jaja, pršut, feta sir, rukola",
      price: "8,00 KM",
    },
    {
      id: 3,
      name: "Punjene prženice",
      description: "jaja, tost, šunka, sir",
      price: "8,00 KM",
    },
    {
      id: 4,
      name: "Tortilja sa piletinom",
      description: "piletina, paprika, kukuruz, pomfrit",
      price: "9,00 KM",
    },
    {
      id: 5,
      name: "Uštipci",
      description: "pršut, kajmak",
      price: "9,00 KM",
    },
    {
      id: 6,
      name: "Sendvič tunjevina",
      description: "tuna, paradajz, ajsberg, krompirići",
      price: "8,00 KM",
    },
  ];

  const deserts = [
    {
      id: 1,
      name: "Arija ukusa",
      description: "čokoladni biskvit, mliječna belgijska čokolada, narandža",
      price: "7,00 KM",
    },
    {
      id: 2,
      name: "Brownie sa sladoledom",
      description: "čokolada, kruška iz kompota, jaja",
      price: "8,00 KM",
    },
    {
      id: 3,
      name: "Cheesecake limun",
      description: "maskarpone sir, slatka pavlaka, plazma, limun",
      price: "7,00 KM",
    },
    {
      id: 4,
      name: "Baklava",
      description: "orasi, plazma",
      price: "5,00 KM",
    },
    {
      id: 5,
      name: "Tri leće",
      description: "biskvit, kondenzovano mlijeko, slatka pavlaka, karamel",
      price: "6,00 KM",
    },
    {
      id: 6,
      name: "Panna Cotta",
      description: "slatka pavlaka, šumsko voće",
      price: "7,00 KM",
    },
    {
      id: 7,
      name: "Kremšnita",
      description: "lisnato tijesto, vanila krem, slatka pavlaka",
      price: "6,00 KM",
    },
    {
      id: 8,
      name: "Sladoled fantazija",
      description: "",
      price: "8,00 KM",
    },
  ];

  const appetizers = [
    {
      id: 1,
      name: "Naša selekcija",
      description:
        "pršut, domaća peka, kajmak, gorgonzola, masline, dimljeni sir, livanjski sir",
      price: "40,00 KM",
    },
    {
      id: 2,
      name: "Tatar biftek",
      description: "",
      price: "50,00 KM",
    },
    {
      id: 3,
      name: "Pršut",
      description: "svinjski/goveđi",
      price: "12,00 KM",
    },
    {
      id: 4,
      name: "Plata sireva",
      description:
        "gorgonzola, kravlji sir, livanjski sir, dimljeni sir, rukola, cherry",
      price: "25,00 KM",
    },
    {
      id: 5,
      name: "Bruskete sa dimljenim lososom",
      description: "dimljeni losos, pesto, šeri paradajz, rukola",
      price: "13,50 KM",
    },
    {
      id: 6,
      name: "Bruskete sa mocarelom i pečenim paradajzom",
      description: "paradajz, mocarela, pesto sos",
      price: "9,00 KM",
    },
  ];
  const salads = [
    {
      id: 1,
      name: "Salata sa sočnom piletinom (gril/pohovana)",
      description:
        "miks salata, grilovana piletina, šeri paradajz, slanina, ajoli dresing",
      price: "15,00 KM",
    },
    {
      id: 2,
      name: "Salata lignje sa susamom",
      description:
        "miks salata, lignje, krastavac, susam, dresing od soka limete i posne majoneze",
      price: "16,50 KM",
    },
    {
      id: 3,
      name: "Salata sa biftekom",
      description:
        "miks salata, biftek, tamni dresing, susam, krastavac, šeri paradajz, Grana Pedano sir",
      price: "17,50 KM",
    },
  ];
  const vegan = [
    {
      id: 1,
      name: "Grilovano povrće",
      description: "",
      price: "10,00 KM",
    },
    {
      id: 2,
      name: "Rižoto sa povrćem",
      description: "",
      price: "14,50 KM",
    },
    {
      id: 3,
      name: "Vege pasta",
      description: "taljatele, šampinjoni, vrganji, mix povrća",
      price: "14,00 KM",
    },
  ];

  const soups = [
    {
      id: 1,
      name: "Pileća supa sa rezancima",
      description: "",
      price: "5,00 KM",
    },
    {
      id: 2,
      name: "Teleća čorba",
      description: "",
      price: "7,00 KM",
    },
    {
      id: 3,
      name: "Potaž od povrća",
      description: "",
      price: "6,00 KM",
    },
  ];

  const foodForKids = [
    {
      id: 1,
      name: "Chicken fingers",
      description: "panirani pileći file sa krompirićima",
      price: "10,00 KM",
    },
    {
      id: 2,
      name: "Mini pasta 4 vrste sira",
      description: "",
      price: "12,00 KM",
    },
  ];

  return (
    <div className=" text-[#36394c] flex flex-col items-center justify-center pb-6">
      <div
        style={{
          backgroundImage: 'url("/image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="w-full  h-[600px] relative px-6"
      >
        <div className="flex flex-row items-center gap-4">
          <Image width={40} height={10} src="/line.png" alt="linija" />
          <motion.div
            ref={ref}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          >
            <h1 className="text-white">OUR MENU</h1>
          </motion.div>
          <Image width={40} height={10} src="/line.png" alt="linija" />
        </div>
        <motion.div
          ref={ref}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          <h1 className="uppercase flex w-full justify-center text-[48px] lg:text-[64px] font-bold text-white">
            MENI
          </h1>
          <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
            Otkrijte neodoljive ukuse u našem jelovniku koji spaja vrhunsku
            kulinarsku vještinu s pažljivo odabranim sastojcima.
          </h2>
        </motion.div>
      </div>
      <div className="px-6 w-full max-w-[1400px]">
        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            GLAVNA JELA (MESO)
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {mainCourse?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-[#ADD8E6] gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#36394c] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            GLAVNA JELA (RIBA)
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {mainCourseFish?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-orange-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#f28274] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:mb-12 mt-12 lg:mt-24 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            PASTA I RIŽOTO
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {pastaFood?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-green-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#2ebea5] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold uppercase">
            DESERTI
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {deserts?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-[#ADD8E6] gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#36394c] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">DORUČAK</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {breakfastFood?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-orange-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#f28274] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-6 lg:mb-12 mt-12 lg:mt-24 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">PREDJELA</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {appetizers?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-green-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#2ebea5] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold uppercase">
            OBROK SALATE
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {salads?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-[#ADD8E6] gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#36394c] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
                {/* Description moved outside the flex container */}
              </div>
              <div className="mt-auto text-[14px]">{food.description}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-6 lg:my-12 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            DJEČIJI KUTAK
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {foodForKids?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-orange-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6 ">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#f28274] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:mb-12 mt-12 lg:mt-24 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">VEGE KUTAK</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {vegan?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-green-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#2ebea5] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-6 lg:mb-12 mt-12 lg:mt-24 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">SUPE</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {soups?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-[#ADD8E6] gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#36394c] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-6 lg:mb-12 mt-12 lg:mt-24 ">
          <h1 className="text-[20px] lg:text-[32px] font-bold">
            PRILOG SALATE
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-12 text-[18px] lg:text-[24px] flex flex-wrap">
          {soups?.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-orange-100 gap-3 p-3 rounded-md justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div>
                    <h1>{food?.name}</h1>
                  </div>
                  <div className="flex-shrink-0 lg:text-[18px] text-[14px] md:text-[16px] self-start text-center px-2 py-1 flex items-center rounded-sm justify-center bg-[#f28274] text-white">
                    <h1>{food?.price}</h1>
                  </div>
                </div>
              </div>

              <h2 className="mt-auto text-[14px]">{food.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
