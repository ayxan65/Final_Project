import React from "react";
import Image from "next/image";
import Brand1 from "../../public/Brands/vertiv.svg";
import Brand2 from "../../public/Brands/makelsan.svg";
import Brand3 from "../../public/Brands/long.svg";

const Brands = () => {
  return (
    <div className="bg-brands flex items-center justify-around h-52">
      <div className="text-3xl text-white font-bold">Brendlər</div>
      <div className="bg-white w-[280px] h-[90px] rounded-lg shadow-2xl -mt-2">
        <Image
          src="/brands/vertiv2.svg"
          alt="photo"
          width={300}
          height={300} className=" p-3"
        />
      </div>
      <div className="bg-white w-[280px] h-[90px] rounded-lg shadow-2xl -mt-2">
        <Image
          src="/brands/brendsekil.svg"
          alt="photo"
          width={300}
          height={300} className="my-3 p-3"
        />
      </div>
      <div className="bg-white w-[280px] h-[90px] rounded-lg shadow-2xl -mt-2">
        <Image
          src="/brands/Frame.svg"
          alt="photo"
          width={300}
          height={300} className=" p-3"
        />
      </div>


      
    </div>
  );
};

export default Brands;
