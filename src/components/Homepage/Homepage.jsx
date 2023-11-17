"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Homepage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative max-h-[700px]" style={{ textAlign: "center" }}>
      {/* Increase z-index for image container */}
      <div
        className="w-full relative"
        style={{ height: "600px", position: "relative" }}
      >
        <Image
          alt="Fotografija restorana"
          src="/restaurant-photo.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          transform: "translate(-50%, -50%)",
        }}
        className="absolute left-[50%] top-[60%] z-10 text-white"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row items-center gap-4">
            <Image width={40} height={10} src="/line.png" alt="linija" />
            <motion.div
              ref={ref}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
              className="w-full flex items-center gap-4"
            >
              <h1 className="text-[12px] md:text-[18px]">
                DOBRODOŠLI U HEDONIST
              </h1>
            </motion.div>
            <Image width={40} height={10} src="/line.png" alt="linija" />
          </div>
          <motion.div
            ref={ref}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            className="w-full flex items-center gap-4"
          >
            <h1 className="text-[24px] md:text-[32px] lg:text-[42px]">
              Pravi gastro užitak na Vrbasu!
            </h1>
          </motion.div>

          <Link
            href="/menu"
            className="uppercase rounded-md text-[15px] lg:text-[18px] px-12 py-2 bg-[#c55a4b] hover:bg-[#833b32] cursor-pointer text-white"
          >
            POGLEDAJTE MENI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
