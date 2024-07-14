import React from 'react';
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
<Image alt='photo' src={photo1}></Image>

    </div>
  )
}

export default Section