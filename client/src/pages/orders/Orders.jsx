import React from 'react'
import "./Orders.scss"
import { Message } from '@mui/icons-material'
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest
      .get(
        `/orders`
      )
      .then((res) => {
        console.log(res.data)
        return res.data;

      }),
  });


return (
    <div className='orders'>
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
        <div className="title">
          <h1>Orders</h1>
          
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {/* <th>{currentUser?.isSeller? "buyer": "seller"}</th> */}
            <th>Contact</th>
          </tr>
          {data.map((order) => (
            <tr key={order._id}>
            <td> 
              <img 
              className='image' 
              src={order.img}
               alt="" 
               />
               </td>
            <td>{order.title}</td>
            <td>{order.price}</td>
            {/* <td>13</td> */}
            <td> <Message className='message'/></td>
          </tr>))}

          

        </table>
      </div> )}
    </div>
  )
}
  
export default Orders