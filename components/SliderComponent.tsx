"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// import './Slider.css';
import image1 from '../public/Galery/image1.svg';
import image2 from '../public/Galery/image2.svg';
import image3 from '../public/Galery/image3.svg';
import image4 from '../public/Galery/image4.svg';


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [image1, image2, image3, image4];
        
    const moveSlide = (n:number) => {
        let newIndex = slideIndex + n;
        if (newIndex >= images.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = images.length -1
        }
        setSlideIndex(newIndex);
    };

    return (
        <div className="slider">
            <div
                className="slider-container"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <Image src={image} alt={`Slide ${index}`} key={index}></Image>
                ))}
            </div>
            <button className="prev" onClick={() => moveSlide(-1)}>
                &#10094;
            </button>
            <button className="next" onClick={() => moveSlide(1)}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
