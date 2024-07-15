import React from 'react'
import About from '../About/About'
import Section from '@/components/Contact/Section'
import Footer from '../Home/Footer'

const page = () => {
  return (
    <>
      <About ilk='Əlaqə' basliq="Əsas səhifə" desc='Əlaqə'/>  
      <Section/>
      <Footer/>
    </>
  )
}

export default page