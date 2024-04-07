"use client"

import React from 'react'
import Slider from "react-slick";
import { SlideData } from '../SlideData';
import Slide from './Slide';

function Hero() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (

    <div className='pt-6 lg:pt-0'>
      <Slider {...settings}>
        {
          SlideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              discount={item.discount} />
          ))
        }
      </Slider>
    </div>

  )
};


export default Hero
