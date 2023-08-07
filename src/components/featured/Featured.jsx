import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='Featured'>
        <div className="Container">
            <div />
            <div className="left">
                <h1>Find the perfect Freelancing service for your Bussiness</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/searchicon.png" alt="" />
                        <input type="text" placeholder='try your bussiness ' />

                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button> 
                    <button>Wordpress</button> 
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>

            </div>
            <div />
            <div className="right">
                <img className='homePic' src="./img/homeimg1.png" alt="" />
                <img className='homepic2'src="./img/homeimg2.svg" alt="" />

            </div>

        </div>
    </div>
  )
}

export default Featured