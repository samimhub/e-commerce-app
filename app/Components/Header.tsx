import Image from 'next/image'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function Header() {
    return (
      <nav className="border-b border-gray-200 py-3">
        <div className="sm:flex items-center justify-between ">
          <div className="flex items-center justify-center pb-3 cursor-pointer pl-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <span className="font-bold pt-1">Commerce</span>
          </div>
          <div className="px-3 w-screen sm:w-[300px] md:w-[70%] relative">
            <input
              className="bg-sky-100 p-2 px-2 w-full rounded-md focus:outline-none text-gray-700 shadow-sm"
              type="text"
              placeholder="Type the product"
            />
            <BsSearch
              className="absolute right-0 top-0 mr-6 mt-2.5 text-gray-400 cursor-pointer hover:text-black"
              size={20}
            />
          </div>
          <div className="hidden md:flex items-center justify-center gap-6 text-gray-500 pr-5">
            <div className="relative cursor-pointer flex flex-col items-center">
              <FiHeart />
              <p className=" text-sm font-semibold">Wishlist</p>
            </div>
            <div className="relative cursor-pointer flex flex-col items-center">
              <HiOutlineShoppingBag />
              <p className="text-sm font-semibold">Bag</p>
            </div>
            <div className=" flex flex-col items-center">
              <BiUser className="relative cursor-pointer" />
              <p className="text-sm font-semibold">Profile</p>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Header
