import React from 'react'
import Slider from "react-slick";
import { SlideData } from '../SlideData';
import Image from 'next/image';

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
              <productItems
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              discount={item.discount}
              />
            ))
          }
      </Slider>
     </div>
    </div>
  )
};

type productItems={
  img:string,
  title:string,
  mainTitle:string,
  discount:string,
}

const productItems=({img,title,mainTitle,discount}:productItems)=>{
  return(
    <div>
      <Image src={img} alt='banner'/>
      <h3>{title}</h3>
      <h1>{mainTitle}</h1>
      <p>{discount}</p>
    </div>
  )
}
export default Hero
