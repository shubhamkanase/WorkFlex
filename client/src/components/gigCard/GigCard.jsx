import React from 'react';
import './GigCard.scss';
import { Link } from 'react-router-dom';
import { Favorite, Star } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';


const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
      queryKey: ["user", item.userId], // Use a unique query key
      queryFn: async () => {
        try {
          const response = await newRequest.get(`/users/${item.userId}`);
          return response.data;
        } catch (error) {
          // Handle the error and return a fallback value or rethrow the error
          console.error("Error fetching data:", error);
          throw error; // Rethrow the error to propagate it
        }
      },
    });

  return (
    <Link to={`/gig/${item._id}`} className='link'>
      <div className='gigCard'>
        <img src={item.cover} alt='' />
        <div className='info'>
          {isLoading ? (
            "Loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className='user'>
              <img src={data.img || "/img/noavatar.jpg"} alt='' />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className='star'>
            <Star className='staricon' />
            <span>{! isNaN(item.totalStars / item.starNumber) && 
            Math.round(item.totalStars / item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className='details'>
          <Favorite className='hearticon' />
          <div className='price'>
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
