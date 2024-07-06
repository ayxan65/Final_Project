import React from 'react';
import Link from 'next/link';
import Avadanliq from './Avadanliq';
import About from './About';
import Partnyor from './Partnyor';
import HomeSlider from './HomeSlider';
import WhatWeDo from './WhatWeDo';
import Brands from './Brands';
import Galery from './Galery';
import Form from './Form';
import Footer from './Footer';



const page = () => {
  return (
    <>
    <Avadanliq/>
    <About/>
    <Partnyor/>
    <HomeSlider/>
    <WhatWeDo/>
    <Brands/>
    <Galery/>
    <Form/>
    <Footer/>
  
    
     
    </>
  )
}

export default page