import React from 'react'
import "./Footer.scss"
import { AccessibilityNew, AttachMoney, Copyright, Facebook, Instagram, Language, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span> Graphics & Design  span </span>
            <span> Digital Marketing span </span>
            <span> Writing & Translation span </span>
            <span> Video & Animation span </span>
            <span> Music & Audio span </span>
            <span> Fiverr Logo Maker span </span>
            <span> Programming & Tech span </span>
            <span> Data span </span>
            <span> Business span </span>
            <span> Lifestyle span </span>
            <span> Photography span </span>
            <span> End-to-End Projects span </span>
            <span> Sitemap span </span>
          </div>

          <div className="item">
            <h2>About</h2>
            <span> Careers </span>
            <span> Press & News </span>
            <span> Partnerships </span>
            <span> Privacy Policy </span>
            <span> Terms of Service </span>
            <span> Intellectual Property Claims </span>
            <span> Investor Relations </span>
          </div>

          <div className="item">
            <h2>Support and Education</h2>
            <span> Help & Support </span>
            <span> Trust & Safety </span>
            <span> Selling on Fiverr </span>
            <span> Buying on Fiverr </span>
            <span> Fiverr Guides </span>
            <span>  </span>
          </div>

          <div className="item">
            <h2>Community</h2>
            <span> Customer Success Stories </span>
            <span> Community Hub </span>
            <span> Forum </span>
            <span> Events </span>
            <span> Blog </span>
            <span> Influencers </span>
            <span> Affiliates </span>
            <span> Podcast </span>
            <span> Invite a Friend </span>
            <span> Become a Seller </span>
            <span> Community Standards </span>
          </div>

          <div className="item">
            <h2>Business Solutions</h2>
            <span> About Business Solutions </span>
            <span> Fiverr Pro </span>
            <span> Fiverr Certified </span>
            <span> Fiverr Enterprise </span>
            <span> Working Not Working </span>
            <span> Contact Sales </span>
         </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h1>WorkFlex</h1>
            <span> <Copyright fontSize='small'/> WorkFlex International Ltd. 2023</span>

          </div>
          <div className="right">
            <div className="social">
              <Twitter className='twitcolor' fontSize='large' />
              <Facebook className='facecolor' fontSize='large'/>
              <LinkedIn className='linkcolor' fontSize='large'/>
              <Instagram className='instacolor' fontSize='large'/>
            </div>
            <div className="link">
              <Language className='langcolor' fontSize='large'/>
              <span>English</span>
            </div>
            <div className="link">
              <AttachMoney className='attachcolor'fontSize='large' />
              <span>USD</span>
            </div>
            <div className="link">
              <AccessibilityNew className='access' fontSize='large'/>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Footer