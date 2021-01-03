import React from 'react'
import NavBar from '../../components/home-details/navbar'
import Carousel from '../../components/home-details/carousel'
import MulCarousel from '../../components/home-details/multi_carousel'
import Profile from '../../pages/users_management/profile'
import MyCourse from '../../pages/users_management/my_course'
import "./styles.css"

export default function HomePage() {
    return (
        <div>
            <MyCourse></MyCourse>
            {/* <Profile></Profile> */}
            {/* <NavBar></NavBar>
            <div className='div_container'>
                <h4>Top courses of the weeks</h4>
                <Carousel></Carousel>
            </div>
            <div className='div_container'>
                <h4>Most views</h4>
                <MulCarousel></MulCarousel>
            </div> */}
        </div>
    )
}
