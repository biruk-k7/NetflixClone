import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import info from '../../assets/info_icon.png'
import hero from '../../assets/oppenheimer_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner-img' />
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>Oppenheimer is a 2023 biographical movie about J. Robert Oppenheimer, a prominent American physicist. The film focuses on his life and the significant role he played in creating the atomic bomb</p>
            <div className="hero-btns">
                <button className='btn'><img src={play} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
            </div>
           <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
