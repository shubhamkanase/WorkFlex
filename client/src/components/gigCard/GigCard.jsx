import React from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'
import { Favorite, Star } from '@mui/icons-material'

const GigCard = ({ item }) => {
    return (
        <Link to="/gig/123" className='link'>
            <div className='gigCard'>
                <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className="star">
                        <Star className='staricon' />
                        <span>{item.Star}5</span>
                    </div>
                </div>
                <hr />
                <div className="details">
                    <Favorite className='hearticon' />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;