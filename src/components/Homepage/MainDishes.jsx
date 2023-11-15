import React from "react";

const MainDishes = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row  justify-around  my-12">
      <div className="flex flex-col items-center p-5">
        <h1>Ime jela</h1>
        <h2>opis</h2>
        <h1>Fotografija</h1>
      </div>
      <div className="flex flex-col items-center p-5">
        <h1>Ime jela</h1>
        <h2>opis</h2>
        <h1>Fotografija</h1>
      </div>
      <div className="flex flex-col items-center p-5">
        <h1>Ime jela</h1>
        <h2>opis</h2>
        <h1>Fotografija</h1>
      </div>
    </div>
  );
};

export default MainDishes;
