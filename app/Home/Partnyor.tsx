import React from 'react';
import Image from 'next/image';
import vertiv from '../../public/partnyor/vertiv.svg';
import glossel from '../../public/partnyor/glossel.svg';
import deo from '../../public/partnyor/dea.svg';
import delta from '../../public/partnyor/delta.svg';
import auto from '../../public/partnyor/auto.svg';
const Partnyor = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-11/12  h-72 flex items-center justify-between '>
            <div className='w-[30%]  text-4xl font-bold text-primary'>
            Partnyorlar və
            Müştərilər
            </div>
            <div>
               <div className='flex justify-between  '> <Image src={vertiv} alt='vertiv'></Image>
                <Image src={glossel} alt='glossel'></Image>
                <Image src={deo} alt='deo'></Image>
                <Image src={delta} alt='delta'></Image></div>
                <div className='flex justify-between '>
                <Image src={auto} alt='auto'></Image>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Partnyor