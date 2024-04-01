import Image from 'next/image'
import React from 'react'

interface propsType{
  img:string,
  title:string,
  mainTitle:string,
  discount:string,
}

const Slide:React.FC<propsType>=({img,title,mainTitle,discount})=> {
  
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[78px] max-w-[250px] sm:max-w-[350px] top- [50%] -translate-y-[50%] space-y-2 1g:space-y-4bg-(effffff] sm:bg-transparent p-4
          sm:p- rounded-1g sm:rounded-none">
            <h3 className="text-accent text-[24px] 1g:text-[28px]"> {title}</h3>
            <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading[1.2]">
              {mainTitle}
              </h2>
              <h3 className="text-[24px] text-gray-500">
                starting at {""}
              <b className="text-[20px] md:text-[24px] lg:text-[38px]"> {discount}</b>
              </h3>
              < div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer Chover:bg-blackish">
              Shop Now
              </div>
          </div>
      <Image className='w-screen h-screen md:h-auto rounded-x1 object-cover object-right md:object-left-bottom' src={img} alt='banner' width={2000} height={1000}/>
    </div>
  )
}

export default Slide
