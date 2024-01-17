import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
<<<<<<< HEAD
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
=======
      if(user && url){
        await newRequest.post("/auth/register", {
          ...user,
          img: url,
        });
        toast.success("User Register Successfully!", {
          duration: 10000,
          position: 'top-center',
          icon: '👍',
          style: {
            border: '1px solid black',
            padding: '16px',
            borderRadius: '10px',
            color: 'black',
            backgroundColor: 'limegreen',
            fontWeight: 600
          },
          iconTheme: {
            fontSize: '20px',
            primary: '#000',
            secondary: '#fff',
          },
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
        navigate("/")
      }else{
        toast.error("please feild the details")
      }
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
<<<<<<< HEAD
=======
          <Toaster />
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;