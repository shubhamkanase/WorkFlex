import React from 'react'
import "./Review.scss";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
<<<<<<< HEAD
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
=======
import { Star, ThumbDown, ThumbUp } from '@mui/icons-material';


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
            <span>{data.username} </span>

            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <Star className='staricon' alt="" key={i} />
<<<<<<< HEAD
        
=======

>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
<<<<<<< HEAD
    
        <ThumbUp/>
        <span>Yes</span>
       
        <ThumbDown/>
=======

        <ThumbUp />
        <span>Yes</span>

        <ThumbDown />
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
        <span>No</span>
      </div>
    </div>
  );
};

<<<<<<< HEAD


            export default Review;
=======
export default Review;
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
