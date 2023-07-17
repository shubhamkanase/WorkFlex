import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [open,setOpen] = useState(false);
  
  const currentUser = {
    id: 1,
    username: "Shubham Kanase",
    isSeller: true
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          {/* <Link> */}
          <img className="logo" src="./img/WorkFlexlogo.png" alt="" />
          {/* </Link> */}
        </div>
        <div className="link">
          <spna>WorkFlex Bussiness</spna>
          <spna>Explore</spna>
          <spna>English</spna>
          <spna>Sign in</spna>
          {!currentUser?.isSeller && <spna>Become a Seller</spna>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={ ()=>setOpen(!open)}>
              <img src="./img/Photograph.jpg" alt="" />
              <span>{currentUser?.username}</span>
              {!open && <div className="options">
               {
                currentUser?.isSeller && (
                  <>
                  <span>Gigs</span>
                  <span>Add New Gig</span>
                  </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
            </div>}
          </div>
         )}
      </div>

    </div>
    </div >
  )
}

export default Navbar