import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 
{ 
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom'
import AllCountrys from './components/AllCountrys/AllCountrys.jsx'
import Users from './components/Users/Users.jsx'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/all',
        loader: () => fetch('https://restcountries.com/v3.1/all'),
        element: <AllCountrys></AllCountrys>
      },
     
    ]
  },
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
