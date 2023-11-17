import React, { useState } from 'react'
import "./Featured.scss"
import { Home, SearchOutlined, SearchSharp } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

function Featured() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className='featured'>
        <div className="Container">
            <div className="left">
                <h1>Find The Perfect <i>Freelancing</i> Service For Your Bussiness</h1>
                <div className="search">
                    <div className="searchInput">
                        <SearchSharp fontSize='medium' className='SearchSharp'/>
                        <input type="text" placeholder= 'try "building mobile app"'
                        onChange={(e) => setInput(e.target.value)}
                         />

                    </div>
                    <button onClick={handleSubmit}>Search</button>
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