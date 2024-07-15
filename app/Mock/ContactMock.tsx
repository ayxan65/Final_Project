import React from 'react';
import Location from '../../public/Contact/Location.svg';
import gmail from '../../public/Contact/gmail.svg';
import phone from '../../public/Contact/phone.svg';
import Image from 'next/image';

const ContactMock = () => {
    interface T{
        title:string;
        desc:string;
        icon:HTMLImageElement;
    }
    const Data:T[] =[{
        title:'Ünvan',
        desc:'Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025',
        icon:Location
    },
    {
      title:'Telefon',
      desc:'+99450 5754080 ',
      icon:phone
  },
  {
    title:'Email',
    desc:'info@netprogroup.az ',
    icon:gmail
}
  
  ] 
  return (
    <div>
      {
        Data.map(({title, desc,icon})=>{
          return(
          
              <div className='bg-stone shadow-lg w-[24vw] h-[20vh] my-4 border border-grey rounded flex '>
              <div className='bg-primary h-10 w-10 rounded-full flex items-center justify-center m-4'>
                <Image width={22} height={22} alt='photo' src={icon}></Image>
              </div>
              <div className='w-[16vw] mt-4 ml-1'>
                <div className='font-semibold text-primary'>{title}</div>
                <div className='text-gray text-sm mt-2 '>{desc}</div>
              </div>

            </div>
         
          )
        })
      }
    </div>
  )
}

export default ContactMock