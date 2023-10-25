import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home.jsx';
import AddCard from './Components/AddCard.jsx';
import Login from './Components/LogIn.jsx';
import Registration from './Components/Registration.jsx';
import MyCart from './Components/MyCart.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Products from './Components/Products.jsx';
import Product from './Components/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/brands`)
      },
      {
        path: "/addCard",
        element: <AddCard></AddCard>
      },
      {
        path: "/logIn",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/myCard",
        element: <MyCart></MyCart>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path:"/products",
        element: <Products></Products>
      },
      {
        path: "/brands/:_id",
        element: <Product></Product>,
        loader: () => fetch(`http://localhost:5000/products`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
