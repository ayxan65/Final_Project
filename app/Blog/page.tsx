import React from 'react'
import About from '../About/About'
import Section from '@/components/Blog/Section'

const page = () => {
  return (
    <div>
        <About ilk='Qalereya və Bloq' basliq='Əsas səhifə' desc='Qalereya və Bloq' />
        <Section/>
    </div>
  )
}

export default page
