import React from 'react';
import Image from 'next/image';
import Slider from '@/components/SliderComponent';

const Galery = () => {
  return (
    <div className='m-10'>
      <div className='text-primary text-3xl font-bold'>Qalereya</div> 
      <Slider/>
    </div>
  )
}

export default Galery