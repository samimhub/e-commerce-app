import React from 'react'
import Hero from './Components/Hero'
import Category from './Components/Category'
import Products from './Components/Products'
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import MobiNavBar from './Components/MobiNavBar'


function Home() {
  return (
    <div>
       <Header/>
        <NavBar/>
        <MobiNavBar/>
      <Hero />
      <Category />
      <Products />
      <Footer />
    </div>
  );
}

export default Home
