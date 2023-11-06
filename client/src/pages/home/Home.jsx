import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
// import { Slide } from '@mui/material'
import Slide from '../../components/Slide/Slide'
import { cards } from "../../data"
import CatCard from '../../components/catCard/CatCard'
import { projects } from '../../data'
import ProjectCard from '../../components/projectCard copy/ProjectCard'
import { CheckCircleOutline } from '@mui/icons-material'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsSrcoll={5}>
        {cards.map(card => (
          <CatCard key={card.id} card={card} />
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
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/checkicon.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/checkicon.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/checkicon.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./videos/feacturesvideo.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>WorkFlex <strong>Bussiness</strong> </h1>
            <p> Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses</p>

            <div className="title">
              <CheckCircleOutline className='checkicon' sx={{ fontSize: 30 }}/>
              Connect to freelancers with proven business experience 
            </div>
            <div className="title">
            <CheckCircleOutline className='checkicon' sx={{ fontSize: 30 }}/>
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
            <CheckCircleOutline className='checkicon' sx={{ fontSize: 30 }}/>
              Manage teamwork work and boost productivity with one powerful workspace
            </div>
            <button className='btnexplore'>Explore WorkFlex Bussiness</button>

            {/* <h1> A Bussiness Solution Desinged For Teams</h1>
            <p> WorkFlex is an innovative freelancing platform designed to connect skilled professionals with employers seeking their expertise. This web-based application serves as a marketplace where individuals and businesses can collaborate on various projects and services. WorkFlex utilizes HTML, CSS, JavaScript, ReactJS, NodeJS, and MongoDB to provide an intuitive and efficient user experience. The platform facilitates secure communications, streamlined project management, and seamless payments, enhancing productivity and
              accessibility for both freelancers and employers.
              
              </p> */}

          </div>
          <div className="item">
            {/* <img src="./img/feactureBusiness.png" alt="" /> */}
            <img className='imgitem' src="./img/man.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsSrcoll={4}>
        {projects.map(card => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>


    </div>
  )
}

export default Home