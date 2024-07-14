import React from 'react';
import Image from 'next/image';
import photo1 from '../../public/ServicePage/photo1.svg';
import photo2 from '../../public/ServicePage/photo2.svg';
import photo3 from '../../public/ServicePage/photo3.svg';
import photo4 from '../../public/ServicePage/photo4.svg';
import photo5 from '../../public/ServicePage/photo5.svg';
import photo6 from '../../public/ServicePage/photo6.svg';
import photo7 from '../../public/ServicePage/photo7.svg';

const ServiceMock = () => {
    interface T{
        title:string;
        desc:string;
        img:HTMLImageElement;

    }
    const Data:T[] = [
        {
            title:'Avadanlıqların quraşdırılması və konfiqurasiyası',
            
               desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
               img: photo1
            },
            {
                title:'Daimi nəzarət',
                
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
                img: photo2
            },
            {
                title:'Avadanlıqların vaxtında dəyişdirilməsi',
                
               desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
               img: photo3
            },
            {
                title:'İT xidmətlər',
                
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
                img: photo4
            },
            {
                title:'Helpdesk xidmətləri',
                
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
                img: photo5
            },
            {
             title:'Təhlükəsizlik xidmətləri',
             
                desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
                img: photo6
            },
           {
            title:'Ofis avadanlıqlarının təmiri və texniki xidməti',
            
               desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus scelerisque tempus faucibus non amet, habitant. Nam feugiat tellus condimentum quis.',
               img: photo7
           }

    ]
  return (
    <>
     {
        Data.map(({title, desc, img})=>{
            return(
        
                 <div className='w-[20vw] p-4 shadow-lg rounded-lg m-3 '>
                <Image alt='photo' src={img}></Image>
                <div className='p-2 font-semibold text-primary'>{title}</div>
                <div className='text-gray p-2'>{desc}</div>
              </div>
         
            )
        })
     }
    </>
  )
}

export default ServiceMock