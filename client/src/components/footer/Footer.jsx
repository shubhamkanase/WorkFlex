import React from 'react'
import "./Footer.scss"
import { AccessibilityNew, AttachMoney, Copyright, Facebook, Instagram, Language, LinkedIn, Twitter } from '@mui/icons-material'
import { Link, Navigate } from 'react-router-dom'

const Footer = () => {


  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <Link className="link" to={'/gigs?cat=design'}>
              <span>Graphics & Design</span>
            </Link>
            <Link className='links' to={`/gigs?cat=digimarketing`}>
              Digital & Marketing
            </Link>
            <Link className='links' to={`/gigs?cat=translation`}>
              Writing & Translation
            </Link>
            <Link className='links' to={`/gigs?cat=animation`}>
              Video & Animation
            </Link>
            <Link className='links' to={`/gigs?cat=music`}>
              Music & Audio
            </Link>
            <Link className='links' to={`/gigs?cat=design`}>
              Logo Maker
            </Link>
            <Link className='links' to={`/gigs?cat=technology`}>
              Programming & Tech
            </Link>
            <Link className='links' to={`/gigs?cat=ai`}>
              AI Services
            </Link>

          </div>

          <div className="item">
            <h2>About</h2>
            <Link className='link' to='/privacyPolicy'>
              Privacy Policy</Link>
            <Link className='link' to='/terms'>
              <span>Terms of Service</span>
            </Link>
          </div>

          <div className="item">
            <h2>Support and Education</h2>
            <Link className='link' to='/support'>
              <span>Help & Support</span>
            </Link>
            <Link className='link' to='/trust'>
              Trust & Safety
            </Link>
            <Link className='link' to='/info'>
              <span>
                WorkFlex Guides</span>
            </Link>

          </div>

          <div className="item">
            <h2>Community</h2>
            <Link className='link' to="https://github.com/">
            <span>Community Hub</span>
            </Link>
            <Link className="link" to="/register">
              <span>Become a Seller</span>
            </Link>
            <Link className='links' to={`/gigs?cat=lifestyle`}>
              Lifestyle
            </Link>
            <Link className='links' to={`/gigs?cat=business`}>
              Business
            </Link>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h1>WorkFlex</h1>
            <span> <Copyright fontSize='small' /> WorkFlex International Ltd. 2023</span>

          </div>
          <div className="right">
            <div className="social">
              <Twitter className='twitcolor' fontSize='large' />
              <Facebook className='facecolor' fontSize='large' />
              <LinkedIn className='linkcolor' fontSize='large' />
              <Instagram className='instacolor' fontSize='large' />
            </div>
            <div className="link">
              <Language className='langcolor' fontSize='large' />
              <span>English</span>
            </div>
            <div className="link">
              <AttachMoney className='attachcolor' fontSize='large' />
              <span>USD</span>
            </div>
            <div className="link">
              <AccessibilityNew className='access' fontSize='large' />
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Footer