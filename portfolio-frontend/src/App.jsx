import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/layout";
import NoPages from "./pages/NoPages";


import './assets/style/app.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
  }, 
 
  {
    path: '*',
    element: <NoPages/>
  }
])

const App=() =>{

  return(
    
      <RouterProvider router = {router}/>
  )
}

export default App