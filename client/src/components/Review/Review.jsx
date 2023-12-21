import React from 'react'
import "./Review.scss";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import {  Star, ThumbDown, ThumbUp } from '@mui/icons-material';


const Review = ({ review }) => {
    const { isLoading, error, data } = useQuery(
        {
            queryKey: [review.userId],
            queryFn: () =>
                newRequest.get(`/users/${review.userId}`).then((res) => {
                    return res.data;
                }),
        },
    );

    return (
        <div className="review">

            {isLoading ? (
                "loading"
            ) : error ? (
                "error"
            ) : (
                <div className="user">
                    <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
                    <div className="info">
                        <span>{data.username}</span>
                        <div className="country">
                            <span>{data.country}</span>
                        </div>
                    </div>
                </div>
            )}
              <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <Star className='staricon' alt="" key={i} />
        
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
    
        <ThumbUp/>
        <span>Yes</span>
       
        <ThumbDown/>
        <span>No</span>
      </div>
    </div>
  );
};

  export default Review;