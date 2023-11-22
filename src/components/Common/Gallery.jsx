"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GrClose, GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imageUrls = [
    "/food-menu.jpg",
    "/gallery-image.jpg",
    "/restaurant-photo.jpg",
    "/food-menu.jpg",
    "/gallery-image.jpg",
    "/restaurant-photo.jpg",
    // Add more image URLs as needed
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Close the lightbox on 'Escape' key
      if (e.key === "Escape") {
        closeLightbox();
      }
      // Navigate to the previous image on left arrow key
      else if (e.key === "ArrowLeft") {
        prevImage();
      }
      // Navigate to the next image on right arrow key
      else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    const closeLightboxOutside = (e) => {
      // Close the lightbox if the click is outside the image
      if (e.target.classList.contains("lightbox-overlay")) {
        closeLightbox();
      }
    };

    // Attach event listeners when the lightbox is open
    if (lightboxIndex !== null) {
      window.addEventListener("click", closeLightboxOutside);
      window.addEventListener("keydown", handleKeyDown);
    }

    // Detach event listeners when the lightbox is closed
    return () => {
      window.removeEventListener("click", closeLightboxOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <div className="w-full flex flex-col bg-slate-100 text-black">
      <div
        style={{
          backgroundImage: 'url("/gallery-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="w-full  h-[600px] relative px-6"
      >
        <motion.div
          ref={ref}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: isInView ? 0 : -80, opacity: isInView ? 1 : 0 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          <h1 className="uppercase flex w-full items-center justify-center text-[48px] lg:text-[64px] font-bold text-white">
            galerija
          </h1>
          <h2 className="text-[18px] text-white text-center lg:text-[24px] max-w-[600px] mt-6 lg:mt-12">
            Otkrijte harmoniju ukusa i sofisticiranog ambijenta kroz vizuelni
            prikaz naših jedinstvenih jela i prostora, dok istražujete Hedonist
            kroz našu pažljivo kuriranu galeriju slika.
          </h2>
        </motion.div>
      </div>

      <div className="flex items-center justify-center bg-[#c1a6a633] py-8 lg:py-24 px-6 w-full flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Display a list of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((imageUrl, index) => (
            <div
              className="relative max-w-[400px] min-h-[300px]"
              key={index}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="rounded-xl"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50">
          <button
            className="absolute top-4 right-4 rounded-md bg-[#f28274]"
            onClick={closeLightbox}
          >
            <GrClose
              style={{ color: "white" }}
              size={45}
              className=" text-white   p-2"
            />
          </button>

          <button className="absolute top-1/2 left-4" onClick={prevImage}>
            <GrLinkPrevious
              size={45}
              className=" text-white bg-white rounded-full p-2"
            />
          </button>

          <Image
            src={imageUrls[lightboxIndex]}
            alt={`Image ${lightboxIndex + 1}`}
            width={800}
            className="rounded-xl"
            height={600}
          />

          <button
            className="absolute top-1/2 right-4 text-white"
            onClick={nextImage}
          >
            <GrLinkNext
              size={45}
              className="text-white bg-white rounded-full p-2"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
