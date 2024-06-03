import React from 'react';
import Image from 'next/image';
import netpro from '../../public/Netprowhite.svg';
import arrow from '../../public/icons/Aboutarrow.svg';


const About = () => {
  return (
    <div className="bg-2 ">
  <div className='flex justify-center '>
  <div className='mt-20'>  <Image  src={netpro} alt='logo'>

</Image></div>
  </div>
  <div className='flex flex-col items-center  justify-around h-96'>
    <div className='text-white font-bold text-4xl my-7'>“NetPro Group” şirkəti haqqında</div>
  
  <div className='text-white  w-4/5  text-xl  flex justify-center leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum. Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum. Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at.</div>

  <button className='w-36 h-12 bg-white rounded-lg text-primary flex justify-center items-center mt-5  '>Ətraflı
  <Image className='ml-4' src={arrow} alt='arrow'></Image>
  </button>
  </div>
    </div>
  )
}

export default About