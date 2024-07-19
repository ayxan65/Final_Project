import React from 'react';
import Link from 'next/link';
import Avadanliq from '../../components/home/Avadanliq';
import About from '../../components/home/About';
import Partnyor from '../../components/home/Partnyor';
import HomeSlider from '../../components/home/HomeSlider';
import WhatWeDo from '../../components/home/WhatWeDoMock';
import Brands from '../../components/home/Brands';
import Galery from '../../components/home/Galery';
import Form from '../../components/home/Form';
import Footer from '../../components/home/Footer';



const page = () => {
  return (
    <div  >
    <Avadanliq/>
    <About/>
    <Partnyor/>
    <HomeSlider/>
    <WhatWeDo/>
    <Brands/>
    <Galery/>
    <Form/>
    <Footer/>
  
    
     
    </div >
  )
}

export default page