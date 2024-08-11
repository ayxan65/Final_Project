import React from 'react';
import Netpro from '../public/Netpro.svg';
import Image from 'next/image';
import arrow from '../public/logo/arrow.svg';
import search from '../public/logo/search.svg';
import Link from 'next/link';
import Search from '../app/SearchBar'
const Navbar2 = () => {
  return (
    <div className='flex px-20  items-center justify-between w-full h-28   '>

       <Link href='/'> <Image src={Netpro} alt='logo'></Image></Link>
     <div className=' w  ml-20 flex justify-between items-center w-full font-bold'>
     <div className='flex'>
          <Image src={arrow} alt='arrow' className='mr-2'></Image>
          <div><Link href='/'>Əsas səhifə</Link></div>
          
        </div>
        <div className='flex'>
          <Image src={arrow} alt='arrow' className='mr-2'></Image>
          <div><Link href='/About'>Haqqımızda</Link></div>
          
        </div>
        <div className='flex'>
          <Image src={arrow} alt='arrow' className='mr-2'></Image>
          <div><Link href='product'>Məhsullar</Link></div>
          
        </div>
        <div className='flex'>
          <Image src={arrow} alt='arrow' className='mr-2'></Image>
          <div><Link href='ServicePage'>Xidmətlər və Həllər</Link></div>
          
        </div>
        <div className='flex'>
          <Image src={arrow} alt='arrow' className='mr-2'></Image>
          <div><Link href='/Blog'>Qalereya və Bloq</Link></div>
          
        </div>
        <div className='flex'>
          <Image src={arrow} alt='arrow' className='mr-2'></Image>
          <div><Link href='/Contact'>Əlaqə</Link></div>
          
        </div>
        <div className='mb-7 '><Search/></div>
        

        
     </div>

    </div>
  )
}

export default Navbar2