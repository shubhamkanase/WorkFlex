import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(true);

  const { pathname } = useLocation()

  const isActive = () => {
    Window.srollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, []);




  const currentUser = {
    id: 1,
    username: "Shubham Kanase",
    isSeller: true
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link>
            <img className="logo" src="./img/WorkFlexlogo.png" alt="" />
          </Link>
        </div>
        <div className="link">
          <span>WorkFlex Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>

          {!currentUser?.isSeller && <spna>Become a Seller</spna>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="./img/Photograph.jpg" alt="" />
              <span>{currentUser?.username}</span>
              {!open && <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs">Gigs</Link>
                      <Link to="/add">Add New Gig</Link>
                    </>
                  )}
                <Link to="/orders">Orders</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/">Logout</Link>
              </div>}
            </div>
          )}
        </div>

      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className='menuItems'>
            <div className="menu">
              <Link className='links' to="/">
                Graphic & Design
              </Link>
              <Link className='links' to="/">
                Video & Animation
              </Link>
              <Link className='links' to="/">
                Writing & Translation
              </Link>
              <Link className='links' to="/">
                AI Services
              </Link>
              <Link className='links' to="/">
                Digital & Marketing
              </Link>
              <Link className='links' to="/">
                Music & Audio
              </Link>
              <Link className='links' to="/">
                Programming & Tech
              </Link>
              <Link className='links' to="/">
                Business
              </Link>
              <Link className='links' to="/">
                Lifestyle
              </Link>
            </div>
          </div>
        </>
      )}
    </div >
  )
}


export default Navbar