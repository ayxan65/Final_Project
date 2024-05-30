import React from "react";
import arrow from '../Home/infoarrow.svg';

import Image from "next/image";
const Avadanliq = () => {
  return (
    <div className="w-full  back">
      {" "}
      <div className="flex justify-end w-full pl-20">
        <div className="bg w-full ">
          <div className="text-primary mt-40 text-5xl font-bold w-1/2">
            Avadanlıqların Quraşdırılması və Konfiqurasiyası
          </div>
          <button className="h-12 w-40 border bg-white rounded-md mt-16 flex items-center  ">
            <p className="text-primary font-semibold ml-4">Daha Ətraflı</p>
            <Image className="ml-2 mt-0.5 bg-arrow" src={arrow} alt="arrow"></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avadanliq;
