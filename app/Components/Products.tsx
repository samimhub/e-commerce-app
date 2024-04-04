"use client"

import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import Cards from "./Cards"

function Products() {

  const [product,setProduct]=useState([])

  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const res =await fetch('product.json');
            const data =await res.json();
            setProduct(data); 
        }catch(error){
          console.log("Getting some error...",error)
        }
    }
    fetchData()
  },[])
  console.log(product)
  return (
    <div className="max-w-screen-2xl container mx-auto lg: px:28 px-4 mb-12">
    <h2> Collection of Product</h2>
    {/*Product card */}
    <div>
      {/*All Button*/}
      <div className="flex flex-row items-center justify-center gap-4 md:items-center md:gap-10 flex-wrap ">
        <button>All Products</button>
        <button>Shirt</button>
        <button>Bag</button>
        <button>Jackets</button>
      </div>
      {/*Shorting Option*/}
      <div className="flex justify-end mb-2 rounded-sm">
        <div className="lg:bg-black p-2">
          <FaFilter className="text-white h-4 w-4"/>
        </div>
        <select className="bg-black text-white lg:bg-black lg:text-white px-2 py-1 rounded-sm cursor-pointer">
          <option value="default">Default</option>
          <option value="popularity">Popularity</option>
          <option value="newest first">Newest First</option>
          <option value="low to high">Low to High</option>
          <option value="high to low">High to Low</option>
        </select>
      </div>
      <Cards filterItems={product}/>
    </div>
    </div>
  )
}

export default Products
