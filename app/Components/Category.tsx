"use client"

import Link from "next/link";
import Marquee from "react-fast-marquee";

export const brandLogo=[
    {
        id:0,
        img:"cloth.png"
    },
    {
        id:1,
        img:"shoe.png"
    },
    {
        id:2,
        img:"technology.png"
    },
    {
        id:3,
        img:"store.png"
    },
    {
        id:4,
        img:"cloth.png"
    },
    {
        id:5,
        img:"shoe.png"
    },
]


function Category() {
  return (
    <div className="max-w-screen-2xl mx-auto container lg:px-28 px-4 py-14">
       {/*Brand Logo */}
        <div className="text-center font-semibold uppercase tracking-[0.2rem] lg:tracking-[1rem] text-blue-500 pb-5"> Collection of Brand</div>
        <Marquee speed={120} className="flex items-center justify-start gap-4 py-5">
        {
            brandLogo.map(({id,img})=>(
                <div key={id}>
                    <img className="h-[120px] w-[120] lg:h-[180px] lg:w-[180]" src={img} alt="brand"/>
                </div>
            ))
        }
        </Marquee>
        <div className="mt-6 flex flex-col  md:flex-row items-center gap-4">
            <p className="text-center  font-semibold md:-rotate-90 uppercase tracking-[0.2rem] md:tracking-[0.5rem] text-blue-500 md:text-white pb-5 md:bg-gray-600 p-2 rounded-sm">
                Explpor now 
            </p>
            <div>
                <Link href="/"><img src="/fashion (2).jpg" alt="fashion" className="w-full hover:scale-105 transition-all duration-200"/></Link>
            </div>
            <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-2">
                    <Link href="/"><img src="fashion.jpg" alt="fashion"/></Link>
                    <Link href="/"><img src="fashion.jpeg" alt="fashion"/></Link>
                    <Link href="/"><img src="girl.jpg" alt="fashion"/></Link>
                    <Link href="/"><img src="fashion_girl.jpg" alt="fashion"/></Link>
                </div>
            
            </div>
        </div>
    </div>

  )
}

export default Category
