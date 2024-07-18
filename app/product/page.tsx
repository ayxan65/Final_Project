import React from 'react'
import About from '../../components/About/About';
import Category from '../../components/product/Category.tsx';


const page = () => {
  return (
    <>
    <About ilk = 'Məhsullar' basliq='Əsas Səhifə' desc='Məhsullar'/>
    <Category/>
    
    </>

  )
}

export default page