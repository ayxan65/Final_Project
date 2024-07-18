import React from 'react';
import About from '../../components/About/About';
import Section1 from '../../components/About/Section1';
import Section2 from '../../components/About/Section2';
import Footer from '../../components/home/Footer';

const page = () => {
  return (
    <div>
        <About ilk='Haqqımzda' basliq='Əsas Səhifə' desc='Haqqımızda' />
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}

export default page