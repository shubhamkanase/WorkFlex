import React from 'react'
import "./Featured.scss"
import { Home, SearchOutlined, SearchSharp } from '@mui/icons-material'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="Container">
            <div className="left">
                <h1>Find The Perfect <i>Freelancing</i> Service For Your Bussiness</h1>
                <div className="search">
                    <div className="searchInput">
                        <SearchSharp fontSize='medium' className='SearchSharp'/>
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
                {/* <img className='homepic2'src="./img/homeimg2.svg" alt="" /> */}
                <img className='homepic2' src="./img/homeimg3.svg" alt="" />
                {/* <Home color="primary"/> */}
                {/* <SearchOutlined color="primary" /> */}
            </div>

        </div>
    </div>
  )
}

export default Featured