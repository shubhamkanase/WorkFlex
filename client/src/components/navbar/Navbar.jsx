import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, json, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import Gigs from '../../pages/gigs/Gigs';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(true);

  const { pathname } = useLocation()


  const handleWorkFlexBusinessClick = () => {
    navigate('/info');
  };
  const handleWhyWorkflexclick = () => {
    navigate('/whyFlex');
  };


  const isActive = () => {
    Window.srollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser",null);
      navigate("/");
    } catch (err){
      console.log(err);
    }
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img className="logo" src="./img/WorkFlexlogo.png" alt="" />
          </Link>
        </div>
        <div className="link">
          <span onClick={handleWorkFlexBusinessClick}> 
            WorkFlex Bussiness    
            </span>
  
          <span>English</span> 
          <span onClick={handleWhyWorkflexclick}>
            Why WorkFlex</span>

          {!currentUser?.isSeller && 
           <Link className="link" to="/register">
          <span>Become a Seller</span>
          </Link>
          }
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
        <>
          <hr />
          <div className='menuItems'>
            <div className="menu">
              <Link className='links' to={`/gigs?cat=design`}>
                Graphic & Design
              </Link>
              <Link className='links'to={`/gigs?cat=animation`}>
                Video & Animation
              </Link>
              <Link className='links' to={`/gigs?cat=translation`}>
                Writing & Translation
              </Link>
              <Link className='links' to={`/gigs?cat=ai`}>
                AI Services
              </Link>
              <Link className='links' to={`/gigs?cat=digimarketing`}>
                Digital & Marketing
              </Link>
              <Link className='links' to={`/gigs?cat=music`}>
                Music & Audio
              </Link>
              <Link className='links'to={`/gigs?cat=technology`}>
                Programming & Tech
              </Link>
              <Link className='links' to={`/gigs?cat=business`}>
                Business
              </Link>
              <Link className='links' to={`/gigs?cat=lifestyle`}>
                Lifestyle
              </Link>
            </div>
          </div>
        </>
    </div >
  )
}


export default Navbar