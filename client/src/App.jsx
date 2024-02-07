import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/gig/Gig"
import Orders from "./pages/orders/Orders"
import MyGigs from "./pages/myGigs/MyGigs"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import Add from "./pages/add/Add";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Success from "./pages/success/Success";
import Pay from "./pages/pay/Pay";
import Info from "./pages/info/Info";

import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import WhyFlex from "./pages/whyFlex/WhyFlex";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Terms from "./pages/terms/Terms";
import Trust from "./pages/trust/Trust";
import { Support } from "@mui/icons-material";



function App() {

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <div className="app" >
        <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
    </QueryClientProvider>
      </div >
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/info",
          element: <Info/>
        },
        {
          path: "/whyFlex",
          element: <WhyFlex/>
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/privacyPolicy",
          element: <PrivacyPolicy/>
        },
        {
          path: "/terms",
          element: <Terms/>
        },
        {
          path: "/trust",
          element: <Trust/>
        },
        {
          path: "/support",
          element: <Support/>
        }
      ]

    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
