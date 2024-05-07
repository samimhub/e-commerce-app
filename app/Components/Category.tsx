"use client"

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MdArrowForwardIos } from "react-icons/md";

export const brandLogo = [
    {
        id: 0,
        img: "/cloth.png"
    },
    {
        id: 1,
        img: "/shoe.png"
    },
    {
        id: 2,
        img: "/technology.png"
    },
    {
        id: 3,
        img: "/store.png"
    },
    {
        id: 4,
        img: "/cloth.png"
    },
    {
        id: 5,
        img: "/shoe.png"
    },
]


function Category() {
    return (
        <div className="max-w-screen-2xl mx-auto container lg:px-28 px-4 py-14">
            {/*Brand Logo */}
            <div className="text-center font-semibold uppercase tracking-[0.2rem] lg:tracking-[1rem] text-blue-500 pb-5"> Collection of Brand</div>
            <Marquee speed={120} className="flex items-center justify-start gap-4 py-5">
                {
                    brandLogo.map(({ id, img }) => (
                        <div key={id}>
                            <Image
                                src={img}
                                alt="brand"
                                width={180}
                                height={70}
                                className="h-[120px] w-[120] lg:h-[180px] lg:w-[180]"
                            />
                        </div>
                    ))
                }
            </Marquee>
            <div className="mt-6 flex flex-col  md:flex-row items-center gap-4">
                <button className="w-[30%] flex font-semibold md:-rotate-90 uppercase tracking-[0.2rem] md:tracking-[0.5rem] text-blue-500 md:text-white pb-5 md:bg-gray-600 p-2 rounded-sm">
                    Explpor now
                    <MdArrowForwardIos className="text-2xl mt-1" />
                </button>
                <div>
                <Link href="/">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/fashion.jpeg"
                                    alt="fashion"
                                    height={100}
                               width={200}
                                    className="hover:scale-105 transition-all duration-200"
                                />
                            </div>
                        </Link>
                </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/fashion.jpg"
                                    alt="fashion"
                                    height={100}
                               width={200}
                                    className="hover:scale-105 transition-all duration-200"
                                />
                            </div>
                        </Link>
                        <div>
                <Link href="/">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/girl.jpeg"
                                    alt="fashion"
                                    height={100}
                               width={200}
                                    className="hover:scale-105 transition-all duration-200"
                                />
                            </div>
                        </Link>
                </div>
                    </div>
                </div>

            </div>

    )
}

export default Category
