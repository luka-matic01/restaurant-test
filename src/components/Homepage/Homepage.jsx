import React from "react";

const Homepage = () => {
  const bgImage = "/restaurant-photo.jpg"; // URL to your background image

  const containerStyle = {
    position: "relative",
    background: `url(${bgImage})`,
    backgroundSize: "cover",
    textAlign: "center",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="relative" style={containerStyle}>
      {/* Increase z-index for image container */}
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="flex justify-center lg:justify-around z-20 w-full items-center">
        <h1 className="text-[24px] lg:text-[48px] text-white font-light lg:mt-12 mt-6">
          Pravi gastro užitak na Vrbasu!
        </h1>
        <div className="hidden lg:block" />
      </div>
    </div>
  );
};

export default Homepage;
