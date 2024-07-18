import React from 'react'
import Link from 'next/link'

const About = ({ilk,basliq,desc}:any) => {
  return (
   <div>
     <div className='bg-class h-36 flex flex-col items-center'>
       <div className='text-white text-3xl font-bold mt-8'>{ilk}
        </div>
        <div className='flex'>
            <div className='text-white mx-2 mt-4'><Link href='/'>{basliq} <span className='ml-1'>{'>'}</span> </Link>     </div>
            <div className='text-white mx-2 mt-4'><Link href='/About'>{desc}</Link></div>
            </div> 

    </div>
   </div>
  )
}

export default About