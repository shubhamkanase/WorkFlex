import React, { useEffect, useState } from 'react'
import "./Featured.scss"
import { Home, SearchOutlined, SearchSharp } from '@mui/icons-material'
import { Link, useNavigate } from "react-router-dom";

function Featured() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['AI', 'Freelancing', 'Flexibility',"Community",'Opportunities','Accessibility']; // Words to cycle through

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [words.length]);

    const handleSubmit = () => {
        navigate(`/gigs?cat=${input}`);
    };
    return (
        <div className='featured'>
            <div className="Container">
                <div className="left">
                    <h1>Find The Perfect <i>Freelancing</i> Service For Your Bussiness</h1>
                    <div className="search">
                        <div className="searchInput">
                            <SearchSharp fontSize='medium' className='SearchSharp' />
                            <input type="text" placeholder='try "building mobile app"'
                                onChange={(e) => setInput(e.target.value)}
                            />

                        </div>
                        <button onClick={handleSubmit}>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <Link className='links' to={`/gigs?cat=technology`}>
                            <button>Web Design</button>
                        </Link>

                        <Link className='links' to={`/gigs?cat=technology`}>
                            <button>Wordpress</button>
                        </Link>
                        <Link className='links' to={`/gigs?cat=design`}>
                            <button>Logo Design</button>
                        </Link>
                        <Link className='links' to={`/gigs?cat=ai`}>
                            <button>AI Services</button>
                        </Link>

                    </div>

                    <div id="dynamicText">
                        <h1>Loved by Freelancers.</h1>
                        <div className='flexText'>
                            <h1>Build for</h1>
                            <h3 id="changingText">
                                {words[currentWordIndex]}
                            </h3>
                        </div>
                    </div>

                </div>
                {/* <div /> */}
                <div className="right">
                    {/* <img className='homepic2'src="./img/homeimg2.svg" alt="" /> */}
                    {/* <img className='homepic2' src="./img/homeimg3.svg" alt="" /> */}
                    {/* <img className='homepic2' src="./img/hii1.png" alt="" /> */}
                    {/* <Home color="primary"/> */}
                    {/* <SearchOutlined color="primary" /> */}
                </div>

            </div>
        </div>
    )
}

export default Featured