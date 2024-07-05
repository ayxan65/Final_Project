import { Nerko_One } from 'next/font/google'
import React from 'react'
import { BiRightArrow } from 'react-icons/bi'

const Form = () => {
  return (
    <div className='bg-form'>
        <div className='flex justify-center '>
           <div className='flex flex-col items-center'>
           <div className='text-primary font-bold text-4xl mt-10'>Suallarınız var?</div>
           <div className='text-primary mt-5 '>Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.</div>
           </div>
        </div>
          <div className='flex justify-center w-full mt-16'>
       <div className='flex flex-col'>
       <input  placeholder='Adınız və Soyadınız' className=' p-3 form-input h-14 w-96 rounded-lg  ' type="text" />
       <input  placeholder='Email ünvanı' className='p-3 form-input h-14 w-96 rounded-lg  mt-7' type="text" />
       <input  placeholder='Əlaqə nömrəsi' className='p-3 form-input h-14 w-96 rounded-lg  mt-7' type="text" />
       </div>
       <textarea placeholder='Mesajınız' className='rounded-lg mx-7 p-3'   name="a" id="a"></textarea>
          </div>
       <div className='flex justify-center mt-8  mr-2'>
        <button className='h-12 w-52 bg-primary text-white rounded-lg'>Göndər
         
        </button>

       </div>
    </div>
  )
}

export default Form