import React from 'react'
import "./Orders.scss"
<<<<<<< HEAD
import { Message } from '@mui/icons-material'
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
=======
import { Delete, Message } from '@mui/icons-material'
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
import { useNavigate } from 'react-router-dom';

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
<<<<<<< HEAD
  const { isLoading, error, data } = useQuery({
=======
  const queryClient = useQueryClient();

  const { isLoading, error, data ,refetch } = useQuery({
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
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

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
<<<<<<< HEAD
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
=======
    const participants = [sellerId, buyerId].sort();
    const conversationId = participants.join('_');

    try {
      const res = await newRequest.get(`/conversations/single/${conversationId}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

<<<<<<< HEAD
=======
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/orders/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["orders"]);
      refetch();
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7

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
<<<<<<< HEAD
            {/* <th>{currentUser?.isSeller? "buyer": "seller"}</th> */}
=======
            <th>Delete</th>
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
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
<<<<<<< HEAD
            <td> <Message className='message' onClick={() => handleContact(order)}/></td>
          </tr>))}

          

=======
            <td>
            <Delete className='delete' onClick={()=>handleDelete(order._id)}/>
            </td>
            <td> <Message className='message' onClick={() => handleContact(order)}/></td>
          </tr>))}
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
        </table>
      </div> )}
    </div>
  )
}
  
export default Orders