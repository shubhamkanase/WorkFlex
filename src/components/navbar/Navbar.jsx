import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
         <img className="logo" src="./img/WorkFlexlogo.png" alt="" />
        </div>
        <div className="link">
          <spna>WorkFlex Bussiness</spna>
          <spna>Explore</spna>
          <spna>English</spna>
          <spna>Sign in</spna>
          <spna>Become a Seller</spna>
          <button>Join</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar