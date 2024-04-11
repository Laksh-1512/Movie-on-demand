import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './login';
import Browser from './browser';


const Body = () => {
    
    const approuter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>,
        },
        {
            path:'/brower',
            element:<Browser/>,
        },
    ]);
    
    
  return (
    <div>
        <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body;
