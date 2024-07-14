import React from 'react'
import Vertiv from './Vertiv'
import Footer from '@/app/Home/Footer'

const Category = () => {
  return (
<>
<div className='flex'>
<div className='ml-20 my-10 border border-grey rounded-lg h-[410px] w-[280px] bg-stone '>
     <div className='bg-primary h-[50px] rounded-t-lg text-white font-bold text-xl pl-5 py-2 '>Category</div> 
     <div className='text-primary font-bold px-5 py-3'>Uninterruptible Power Supplies 
     (UPS)</div>
     <div className='bg-grey h-[1px] w-[240px] m-auto'></div>
     <div className='text-gray my-3 px-5'>
     DC Power Systems

     </div>
     <div className='bg-grey h-[1px] w-[240px] m-auto'></div>
     <div className='text-gray my-3 px-5'>
     Power Distribution

     </div>
     <div className='bg-grey h-[1px] w-[240px] m-auto'></div>
     <div className='text-gray my-3 px-5'>
     Industrial AC and DC Systems

     </div>
     <div className='bg-grey h-[1px] w-[240px] m-auto'></div>
     <div className='text-gray my-3 px-5'>Static Transfer Switches</div>
     <div className='bg-grey h-[1px] w-[240px] m-auto'></div>
     <div className='text-gray my-3 px-5'>
     Power Control and Monitoring
     </div>

    </div>
<div>  <div className='mt-10 mx-8 text-xl text-primary font-bold'>Uninterruptible Power Supplies (UPS)</div>
<div className='text-gray mt-5 mx-8 w-[88%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac, massa nec pulvinar nunc, nulla a sed. Sapien massa lacus, mi, egestas metus, vitae non metus. Cras lorem quisque in iaculis tortor pharetra est dolor. Enim ipsum hac pulvinar dolor. Congue ut viverra id sagittis vulputate sed posuere.</div>
<div className='my-8'>
<Vertiv/>
</div>
</div>

</div>
<Footer/>
</>

  )
}

export default Category