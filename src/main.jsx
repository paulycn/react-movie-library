import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import './css/App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Layout from './layouts/Layout.jsx'
import MoviesNolan from './pages/MoviesNolan.jsx'


const router = createBrowserRouter([
  {
    element:<Layout/>,
    errorElement: <h1>Error!</h1>,
    
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/movies/:id",
        element:<MoviesNolan/>
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
