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
                <Image  src={vertiv} alt='vertiv'></Image>
                <Image  src={glossel} alt='glossel'></Image>
                <Image  src={deo} alt='deo'></Image>
                <Image  src={delta} alt='delta'></Image>
                
             <div className='w-[100%] flex justify-between '>
             <Image className=' my-5' src={dealom} alt='auto'></Image>
                <Image className=' my-5 relative left-5 ' src={delta} alt='auto'></Image>
                <Image className=' my-5 relative left-5' src={auto} alt='auto'></Image>
                <Image src={glossel} alt='thing '  className=' my-5'></Image>
             </div>
               

                


            </div>
        </div>
    </div>
  )
}

export default Partnyor