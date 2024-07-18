import React from 'react'
import About from '../../components/About/About'
import Section from '@/components/Contact/Section'
import Footer from '../../components/home/Footer'

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