import React from 'react'
import { footerItems, footerSection } from '../SlideData'

function Footer() {
  return (
    <>
      <div className='w-full mt-24 bg-slate-900 text-gray-300 px-5 py-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 border-b-2 border-gray-600 py-5'>
          {
            footerSection.map((section, index) => (
              <div key={index}>
                <h6 className='flex items-center justify-between font-bold uppercase pt-2'>{section.title}</h6>
                <ul>
                  {
                    section.items.map((item, i) => (
                      <li key={i}
                        className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div className='col-span-2 pt-7 lg:pt-2'>
            <p className=' font-bold uppercase'>Subscribe to our page</p>
            <p className='py-4'>Sent your feedbacks to your Inbox </p>
            <form className='flex flex-col sm:flex-row'>
              <input type="Email"
                placeholder='Enter email ...'
                className='w-full p-2 mr-4 rounded-md mb-4 text-gray-500 font-semibold' />
              <button className='p-2 mb-4 border rounded-md hover:bg-slate-500'>Subscribe</button>
            </form>
          </div>
        </div>
        {/*Social Icons */}
        <div className='flex flex-col max-w-[1240px px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500
          
      ]'>
          <p className=' py-4'>2024 E-Commerce Service Provider LLC@ All rights reserves</p>
          <div className=' flex justify-between sm:w-[300px] text-2xl mt-3'>
            {
              footerItems.map((x, index) => {
                return <x.icons key={index} className='hover:text-white cursor-pointer ' />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
