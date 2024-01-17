import React from 'react'
import "./Gig.scss"
import { AccessTime, Check, Recycling, Star, ThumbDown, ThumbUp } from '@mui/icons-material'
<<<<<<< HEAD
import { Slider } from 'infinite-react-carousel'
=======
import Slider from 'infinite-react-carousel'
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import Reviews from "../../components/reviews/Reviews";


<<<<<<< HEAD
function Gig () {
=======
function Gig() {
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest
        .get(`/gigs/single/${id}`).then((res) => {
          return res.data;
        }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className='gig'>
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">WORKFLEX  {">"} GRAPHICS & DESING {">"}</span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (

              <div className="user">
                <img className="pp" src={dataUser.img || "/img/noavatar.jpg"} alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
<<<<<<< HEAD
                        // <img src="/img/star.png" alt="" key={i} />
=======
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
                        <Star fontSize='medium' className='staricon' key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}

<<<<<<< HEAD
            <Slider slidesToShow={1} arrowsScroll={1} className="slider" >
              {data.images.map((img) => (
                <img key={img} src={img} alt='' />

              ))}
=======
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {Array.isArray(data.images) && data.images.length > 0 ? (
                data.images.map((img, index) => (
                  typeof img === 'string' && <img key={index} src={img} alt='' />
                ))
              ) : (
                <p>No images available</p> // Placeholder or message when data.images is empty or undefined
              )}
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
            </Slider>

            <h2>About This Gig</h2>
            <p>
              {data.desc}
            </p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (

              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                  <div className="info">

                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
<<<<<<< HEAD
                            //<img src="/img/star.png" alt="" key={i} />
=======
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
                            <Star className='staricon' key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>

                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />

                  <p>{dataUser.desc}</p>

                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>

          <div className="right">

            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>
              {data.shortDesc}
            </p>
            <div className="details">
              <div className="item">
                <AccessTime className='time' />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <Recycling className='recycle' />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <Check className='check' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
<<<<<<< HEAD
            <button>Continue</button>
=======
              <button>Continue</button>
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig