import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
               Ipsa reprehenderit delectus quaerat! Rerum,sit quas est amet iure eius explicabo nihil laboriosam sunt! Similique, consequuntur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.  delectus quaerat! Rerum, omnis quis. sit quas est amet iure eius explicabo nihil laboriosam sunt! Similique, consequuntur!
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit, Ipsa reprehenderit delectus Cumque nostrum suscipit, sit quas est amet iure eius explicabo nihil laboriosam sunt! Similique, consequuntur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.nihil laboriosam sunt! Similique, consequuntur!
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur sit quas est amet iure eius explicabo nihil laboriosam sunt! Similique, consequuntur!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              L amet consectetur adipisicing elit. Ipsa reprehenderit Cumque nostrum suscipit, sit quas est amet iure eius explicabo nihil 
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nostrum suscipit, unt! Similique, consequuntur!
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              . Ipsa reprehenderit  Cumque nostrum suscipit, sit quas est amet iure eius explicabo nihil
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit, ostrum suscipit, sit quas est amet iure eius explicabo nihil laboriosam sunt! Similique, consequuntur!
            </p>
          </div>

          <hr />


          <div className="write">
            <textarea name="" placeholder='write a messsge' id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message