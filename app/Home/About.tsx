import React from 'react';
import Image from 'next/image';
import netpro from '../../public/Netprowhite.svg';


const About = () => {
  return (
    <div className="bg-2 ">
  <div className='flex justify-center '>
  <div className='mt-20'>  <Image  src={netpro} alt='logo'>

</Image></div>
  </div>
  <div>
    
  </div>

    </div>
  )
}

export default About