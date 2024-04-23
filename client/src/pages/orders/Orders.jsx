import React from 'react'
import "./Orders.scss"
import { Delete, Message } from '@mui/icons-material'
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, error, data ,refetch } = useQuery({
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
    const participants = [sellerId, buyerId].sort();
    const conversationId = participants.join('_');

    try {
      const res = await newRequest.get(`/conversations/single/${conversationId}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

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
            <th>Delete</th>
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
            <td>
            <Delete className='delete' onClick={()=>handleDelete(order._id)}/>
            </td>
            <td> <Message className='message' onClick={() => handleContact(order)}/></td>
          </tr>))}
        </table>
      </div> )}
    </div>
  )
}
  
export default Orders