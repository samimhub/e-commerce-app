import Image from 'next/image'
import React from 'react'

interface propsType {
  img: string,
  title: string,
  mainTitle: string,
  discount: string,
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, discount }) => {

  return (
    <div
      className="outline-none border-none relative lg:h-[410px] lg:max-w-screen-xl mx-auto"
      style={{ textShadow: "0 0 5px white" }}>
      <div className="absolute left-2 lg:left-20 max-w-[350px] space-y-2 p-4 lg:space-y-3 lg:top-[25%]">
        <h3 className="text-black text-xl lg:text-2xl font-bold"> {title}</h3>
        <h2 className="text-black text-sm lg:text-2xl font-semibold">
          {mainTitle}
        </h2>
        <h3 className="text-2xl font-semibold">
          <b> {discount}</b> Off
        </h3>
        <div>
          <button className="bg-teal-700 p-3 rounded-md lg:text-xl font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <Image
        className="w-[100%] px-1.5 lg:h-[410px] lg:max-w-screen-xl rounded-2xl object-cover "
        src={img}
        alt="banner"
        width={2000}
        height={1000}
      />
    </div>
  );
}

export default Slide
