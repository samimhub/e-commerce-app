import Link from 'next/link'
import React from 'react'
  
interface FilterItem {
    id: string;
    image: string;
    name: string;
    category: string;
    new_price: number;
    // Define more properties if needed
  }
  
interface CardsProps {
    filterItems: FilterItem[];
  }

function Cards({filterItems}:CardsProps) {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-center gap-10 shadow-sm'>
      {
      filterItems.map((items) =>(
        <div key={items.id}>
            <Link href={`/shop/${items.id}`}>
                <img src={items.image} alt="" className='mx-auto w-full drop-shadow-2xl border rounded-sm hover:scale-105 transition-all duration-200'/>
            </Link>
            <div className='mt-4 px-4'>
                <h4 className='text-base font-semibold mb-2'>{items.name}</h4>
                <div className='flex justify-between'>
                    <p className='text-black/70'>{items.category}</p>
                    <p className='font-semibold'>${items.new_price}</p>
                </div>
            </div>
        </div>
      ))
      }
    </div>
  )
}

export default Cards
