import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className ="app" >
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div >
    )
  };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    
  },
]);

return (
  <div>
    <RouterProvider router={router} />
  </div>
);
}

export default App
