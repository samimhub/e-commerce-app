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
  };

  return (
    <div>
     <div>
      <Slider {...settings}>
          {
            SlideData.map((item)=>(
              <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              discount={item.discount}/>
            ))
          }
      </Slider>
     </div>
    </div>
  )
};


export default Hero
