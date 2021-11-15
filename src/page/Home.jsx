
import Slider from '../components/Slider'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'


function Home() {
    return (
        <>

            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newletter/>
            <Footer/>
        </>
    )
}

export default Home
