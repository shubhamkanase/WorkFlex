import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";

<<<<<<< HEAD


=======
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
const Messages = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: () =>
      newRequest
<<<<<<< HEAD
      .get(
        `/conversations`
        )
      .then((res) => {
        console.log(res.data)
        return res.data;

      }),
=======
        .get(
          `/conversations`
        )
        .then((res) => {
          console.log(res.data)
          return res.data;

        }),
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
<<<<<<< HEAD
    onSuccess:()=>{
=======
    onSuccess: () => {
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
      queryClient.invalidateQueries(["conversations"])
    }
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
<<<<<<< HEAD
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {data && data.map((c) => (
              <tr
                className={
                  ((currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer)) &&
                  "active"
                }
                key={c.id}
              >
                <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                <td>
                  <Link to={`/message/${c.id}`} className="link">
                    {c?.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(c.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer)) && (
                    <button onClick={() => handleRead(c.id)}>
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
=======
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((c) => (

                <tr
                  className={
                    ((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) ?
                    "active" : undefined
                  }
                  key={c.id}
                >
                  <td>{c.userName}</td>
                  <td>
                    <Link to={`/message/${c.id}`} className="link">
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) && (
                        <button onClick={() => handleRead(c.id)}>
                          Mark as Read
                        </button>
                      )}
                  </td>
                </tr>

              ))}
            </tbody>
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
          </table>
        </div>
      )}
    </div>
<<<<<<< HEAD
  )}

export default Messages;
=======
  )
}

export default Messages;
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
