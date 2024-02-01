import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Component/Root';
import Details from './Component/Details';
import Cart from './Component/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
      path: 'details',
      element: <Details></Details>,
    
  },
  {
      path: 'booking',
      element: <Cart></Cart>,
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
