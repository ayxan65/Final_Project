import React from 'react';
import Image from 'next/image';
import photo1 from '../../public/Blog/photo1.svg';
import photo2 from '../../public/Blog/photo2.svg';
import photo3 from '../../public/Blog/photo3.svg';
import photo4 from '../../public/Blog/photo4.svg';
import photo5 from '../../public/Blog/photo5.svg';
import photo6 from '../../public/Blog/photo6.svg';
import photo7 from '../../public/Blog/photot7.svg';
import photo8 from '../../public/Blog/photo8.svg';


const Section = () => {
  return (
    <div className='w-[92vw] m-auto flex flex-col items-center'>
    <div className=' my-6 font-bold text-primary text-3xl'>Qalereya</div>
  <div className='flex flex-wrap'>
  <Image alt='photo' src={photo1}></Image>
    <Image alt='photo' src={photo3}></Image>
    <Image alt='photo' src={photo4}></Image>
    <Image alt='photo' src={photo5}></Image>
    <Image alt='photo' src={photo6}></Image>
    <Image alt='photo' src={photo7}></Image>
    <Image alt='photo' src={photo8}></Image>
    <Image alt='photo' src={photo1}></Image>
  </div>
   

    </div>
  )
}

export default Section