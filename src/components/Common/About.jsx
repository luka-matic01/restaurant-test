import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex bg-gray-100">
      <div className="flex items-center justify-around w-full flex-col lg:flex-row gap-6 lg:gap-0">
        <div className="flex w-full items-center flex-col">
          <h1>Png slika</h1>
          <h1>Koja hrana</h1>
          <h1>Opis</h1>
        </div>

        <div className="flex w-full items-center flex-col relative">
          <img alt="photo" src="/restaurant-photo.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
