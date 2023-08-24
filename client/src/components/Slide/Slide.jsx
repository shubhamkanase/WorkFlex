import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';


const Slide = ({children,slidesToShow,arrowsSrcoll}) => {
  return (
    <div className='slide'>
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsSrcoll={arrowsSrcoll}>
          {children}
        </Slider>

      </div>
    </div>
  )
}

export default Slide