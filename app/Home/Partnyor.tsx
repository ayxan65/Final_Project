import React from 'react';
import Image from 'next/image';
import vertiv from '../../public/partnyor/vertiv.svg';
import glossel from '../../public/partnyor/glossel.svg';
import deo from '../../public/partnyor/dea.svg';
import delta from '../../public/partnyor/delta.svg';
import auto from '../../public/partnyor/auto.svg';
import dealom from '../../public/partnyor/dealom.svg';
const Partnyor = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-11/12  h-72 flex items-center justify-between '>
            <div className='w-[30%]  text-4xl font-bold text-primary'>
            Partnyorlar və
            Müştərilər
            </div>
            <div className='flex justify-between w-[70%] flex-wrap '>
                <Image className='mx-10' src={vertiv} alt='vertiv'></Image>
                <Image className='mx-10' src={glossel} alt='glossel'></Image>
                <Image className='mx-10' src={deo} alt='deo'></Image>
                <Image className='mx-10' src={delta} alt='delta'></Image>
                <Image className='mx-10 my-5' src={dealom} alt='auto'></Image>
                <Image className='mx-10 my-5' src={delta} alt='auto'></Image>
                <Image className='mx-10 my-5' src={auto} alt='auto'></Image>
                <Image src={glossel} alt='thing '  className='mx-10 my-5'></Image>
                
                {/* <Image src={auto} alt='auto'></Image>
                <Image src={auto} alt='auto'></Image>
                <Image src={auto} alt='auto'></Image>
                <Image src={auto} alt='auto'></Image> */}

                


            </div>
        </div>
    </div>
  )
}

export default Partnyor