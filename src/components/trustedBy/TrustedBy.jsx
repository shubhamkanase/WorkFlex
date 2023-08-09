import React from 'react'
import "./TrustedBy.scss"

const TrustedBy = () => {
    return (
        <div className='trustedBy'>
            <div>
                <span className='trustspan'>TRUSTED BY LEADING BRANDS AND STARTUPS</span>
            </div>

            <div className="trustContainer">
                <img className='googleicon' src="./img/googleicon.png" alt="" />
                <img src="./img/amazonicon.png" alt="" />
                <img src="./img/paypalicon.png" alt="" />
                <img className='netflixicon'src="./img/netflixicon.png" alt="" />
                <img src="./img/facebookicon.png" alt="" />
                
                
            </div>
        </div>
    )
}

export default TrustedBy