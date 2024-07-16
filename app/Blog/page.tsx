import React from 'react'
import About from '../About/About'
import Section from '@/components/Blog/Section'
import Footer from '../../components/home/Footer'

const page = () => {
  return (
    <div>
        <About ilk='Qalereya və Bloq' basliq='Əsas səhifə' desc='Qalereya və Bloq' />
        <Section/>
        <div className='mt-10'>
        <Footer/>
        </div>
    </div>
  )
}

export default page
