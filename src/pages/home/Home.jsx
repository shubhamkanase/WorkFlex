import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
// import { Slide } from '@mui/material'
import Slide from '../../components/Slide/Slide'
import {cards} from "../../data"
import CatCard from '../../components/catCard/CatCard'

const Home= () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsSrcoll={5}>
        {cards.map(card =>(
          <CatCard key={card.id} item={card}/>
        ))}

      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1> A whole world of freelancing talent at your fingertips</h1>
            <div className="title">
              <img src="./img/checkicon.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No Hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/checkicon.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No Hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/checkicon.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality service at every price point. No Hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./videos/feacturesvideo.mp4" controls></video>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Home