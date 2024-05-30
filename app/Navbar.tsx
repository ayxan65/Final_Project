"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import email from '../public/logo/email.svg';
import language from '../public/language.svg';
import Wplogo from '../public/logo/wplogo.svg';
import social from '../public/logo/social.svg';
import Location from '../public/logo/location.svg';
import Accordion from '../public/Accordion.svg';

const Navbar = () => {
  return (
  <>
    <div className='navbar flex items-center '>

<div  className='px-10 text-white flex justify-between w-full  items-center '>
 
<div className='flex'>
  <Image src={Location} alt='location' className='mr-2'></Image>
  <div>Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025</div>
  </div>
  <div className='flex'>
  <Image src={Wplogo} alt='Wp logo'></Image>
  <div className='mr-4 ml-2'>+99450 5754080</div>
  <div>+99450 5754070</div>
  </div>
  <div className="flex"><Image src={email} alt='email logo'></Image>
  <div className='ml-2'>info@netprogroup.az</div>
  </div>
   <div className="flex">
    <Image src={social} alt='social'></Image>
    
   </div>
   <div className='flex items-center'>
   <div className='font-bold mr-2'>
   24.01.2022:
   </div>
   <Image src={Accordion} alt='currency'></Image>
   </div>
  <Image src={language} alt='AZ'></Image>
 </div>  

 </div>
  </>
  )
}

export default Navbar