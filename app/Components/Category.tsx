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
        <div className="text-center font-semibold uppercase tracking-[1rem] text-blue-500 pb-5"> Collection of Brand</div>
        <Marquee speed={120} className="flex items-center justify-start gap-4 py-5">
        {
            brandLogo.map(({id,img})=>(
                <div key={id}>
                    <img src={img} alt="brand" height={180} width={180}/>
                </div>
            ))
        }
        </Marquee>
        <div>
            <p className="text-center font-semibold uppercase tracking-[1rem] text-blue-500 pb-5">
                Explpor now your Fevarite Brand
            </p>
            <div>
                <Link href="/"><img src="" alt=""/></Link>
            </div>
            <div>
                <div>
                    <Link href="/"><img src="" alt=""/></Link>
                    <Link href="/"><img src="" alt=""/></Link>
                    <Link href="/"><img src="" alt=""/></Link>
                    <Link href="/"><img src="" alt=""/></Link>
                </div>
            
            </div>
        </div>
    </div>

  )
}

export default Category
