import Footer from '@/app/Home/Footer'
import ServiceMock from '@/app/Mock/ServiceMock'
import React from 'react'

const Section1 = () => {
  return (
    <div>
        <div className='w-[92%] m-auto'>
       <div className='text-primary font-semibold text-2xl my-6'> Xidmətlər və Həllərin növləri</div>
       <div className='flex flex-wrap '>
       
       <ServiceMock/>
      
       </div>
        </div>
        <div className='mt-10'><Footer/></div>
    </div>
  )
}

export default Section1