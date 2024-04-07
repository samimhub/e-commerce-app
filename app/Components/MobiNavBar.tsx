import Link from 'next/link'
import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMenuOutline } from 'react-icons/io5'

function MobiNavBar() {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] nav_bar px-8 '>
      <div className='flex justify-between py-2 text-[28px]'>
        <Link href="/" className='hover:bg-slate-200 rounded-2xl px-3 py-1'><IoMenuOutline /></Link>
        <div className='hover:bg-slate-200 rounded-2xl px-3 py-1'>
          <Link href="/"><HiOutlineShoppingBag /></Link>
        </div>
        <Link href="/" className='hover:bg-slate-200 rounded-2xl px-3 py-1'><BiHome /></Link>
        <div className='hover:bg-slate-200 rounded-2xl px-3 py-1'>
          <Link href="/"><FiHeart /></Link>
        </div>
      </div>
    </div>
  )
}

export default MobiNavBar
