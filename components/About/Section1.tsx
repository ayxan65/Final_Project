import React from 'react';
import Image from 'next/image';
import photo1 from '../../public/AboutPage/Photo1.svg'

const Section1 = () => {
  return (
    <div>
<div className='flex justify-between mt-10 mx-10 w-[1300px]'>
<Image  alt='photo' src={photo1} width={470} height={470}></Image>
        <div className=''>
            <div className='text-primary font-bold text-4xl '>“NetPro Group MMC” şirkəti 
            haqqında</div>
            <div className='text-gray mt-10 w-[650px]'><div className='mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum. 
            </div>

<div className='mt-10'>
Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at.</div> 

<div className='mt-10'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</div></div>
        </div>
</div>
    </div>
  )
}

export default Section1