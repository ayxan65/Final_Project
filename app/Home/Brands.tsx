import React from 'react';
import Image from 'next/image';
import Brand1 from '../../public/Brands/vertiv.svg';
import Brand2 from '../../public/Brands/makelsan.svg';
import Brand3 from '../../public/Brands/long.svg';

const Brands = () => {
  return (
    <div className='bg-brands flex items-center justify-around h-52'>
        <div className='text-3xl text-white font-bold'  >Brendlər</div>
       <Image src={Brand1} alt='photo'></Image>
       <Image src={Brand2} alt='photo'></Image>
      
     
       <Image src={Brand3} alt='photo'></Image>

    </div>
  )
}

export default Brands