import React from 'react'
import { footerItems, footerSection } from '../SlideData'

function Footer() {
  return (
    <div className='w-full bg-slate-900 text-gray-300 py- px-2'>
      <div>
        {
            footerSection.map((section,index)=>(
                <div key={index}>
                    <h6>{section.title}</h6>
                </div>
                <ul>
                    {
                        section.items.map((item,i=>(
                            <li key={i}>
                              {item}
                            </li>
                        )))
                    }
                </ul>
            ))
        }
      </div>
    </div>
  )
}

export default Footer
