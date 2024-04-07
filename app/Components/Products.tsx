"use client"

import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import Cards from "./Cards"

interface Product {
  id: number;
  name: string;
  category: string;
  // Add more properties if needed
}


function Products() {

  const [product, setProduct] = useState([]);
  const [filterItems, setFilterItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOption, setSortOption] = useState("default")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('product.json');
        const data = await res.json();
        setProduct(data);
        setFilterItems(data);
      } catch (error) {
        console.log("Getting some error...", error)
      }
    }
    fetchData()
  }, [])
  //Filtering Function

  const filteredItems = (category) => {
    const filtered = category === "all" ? (product) : product.filter((items) => items.category === category)
    setFilterItems(filtered)
    setSelectedCategory(category)
  }
  //show all product
  const showAll = () => {
    setFilterItems(product);
    setSelectedCategory("all");

  }

  //shorting all products
 const handleSortChange=(option)=>{
  setSortOption(option);

  let sortedItems =[...filterItems]

  switch(option){
  case "A-Z":
  sortedItems.sort((a,b)=>a.name.localeCompare(b.name));
  break;
  case "Z-A":
  sortedItems.sort((a,b)=>b.name.localeCompare(a.name));
  break;
  case "low to high":
  sortedItems.sort((a,b)=>a.new_price - b.new_price);
  break;
  case "high to low":
  sortedItems.sort((a,b)=>b.new_price - a.new_price);
  break;
  }
  setFilterItems(sortedItems);
 }
  return (
    <div className="max-w-screen-2xl container mx-auto lg: px:28 px-4 mb-12">
      <h2 className="text-center font-semibold uppercase tracking-[0.2rem] lg:tracking-[1rem] text-blue-500 pb-5"> Collections</h2>
      {/*Product card */}
      <div>
        {/*All Button*/}
        <div className="flex flex-row items-center justify-start gap-4 md:items-start md:gap-10 flex-wrap ">
          <button onClick={showAll}>All Products</button>
          <button onClick={()=>filteredItems("women")}>Womens</button>
          <button onClick={()=>filteredItems("men")}>Mens</button>
          <button onClick={()=>filteredItems("kid")}>Kids</button>
        </div>
        {/*Shorting Option*/}
        <div className="flex justify-end mb-2 rounded-sm">
          <div className="lg:bg-black p-2">
            <FaFilter className="text-white h-4 w-4" />
          </div>
          <select 
          id="sort"
          onChange={(e)=>handleSortChange(e.target.value)}
          value={sortOption}
          className="bg-black text-white lg:bg-black lg:text-white px-2 py-1 rounded-sm cursor-pointer">
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="A-Z">Z-A</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
          </select>
        </div>
        <Cards filterItems={filterItems} />
      </div>
    </div>
  );
}


export default Products
