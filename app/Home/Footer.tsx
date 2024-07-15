import React from 'react';
import Image from 'next/image';
import NetPro from '../../public/Net2.svg';
import Social from '../../public/logo/social.svg'
import Link from 'next/link';
import Border from '../../public/border.svg';
import phone from '../../public/phone.svg';
import email from '../../public/email.svg';
import borderbottom from '../../public/footer/borderbottom.svg';
import location from '../../public/logo/location.svg';
import Map from '../../components/Map';


const Footer = () => {
  return (
    <div className='footer '>
     <div className='p-12 flex footer-border '>
     <div className='p-6'>
        <Image src={NetPro} alt='logo'></Image>
        <Image   width={180} height={90}  className='mt-24'  src={Social} alt='logo'></Image>
       </div>
       <div className='mx-32'>
        <div className='text-white text-[28px] font-semibold'>Saytın xəritəsi</div>
        <ul>
          <li><Link href={'/'}>Əsas səhifə</Link></li>
          <li><Link href={'/About'}>Haqqımızda</Link></li>
          <li><Link href={'/product'}>Məhsullar</Link></li>
          <li><Link href={'/ServicePage'}>Xidmətlər və Həllər</Link></li>
          <li><Link href={'/Blog'}>Qalereya və Bloq</Link></li>
          <li><Link href={'/Contact'}>Əlaqə</Link></li>
        </ul>

       </div>
       <Image src={Border} alt='border' ></Image>
         <div className='ml-10'>
          <div className='text-white text-[28px] font-semibold  '>
          Əlaqə
          </div>
          <div className='mt-5'><Image src={phone} alt='phone' ></Image></div>
          <div className='mt-5'><Image src={email} alt='email'></Image></div>
         </div>
         <div>
         <div className='flex'>
         <Image src={location} width={20} height={25} alt='location'></Image>
         <div className='ml-3 font-semibold text-white text-[18px]'>Ünvan</div>

         </div>
         <div className=' location text-white w-[300px] mt-5'>
         Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
         </div>

          <Map/>
         </div>
     </div>
      
       <Image className='ml-12 ' src={borderbottom} alt='br'></Image>
    </div>
  )
}

export default Footer