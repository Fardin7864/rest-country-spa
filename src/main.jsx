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
import Asia from './components/Asia/Asia.jsx'
import Europ from './components/Europ/Europ.jsx'
import Africa from './components/Africa/Africa.jsx'
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
      {
        path: '/asia',
        loader: () => fetch(`https://restcountries.com/v3.1/region/asia`),
        element: <Asia></Asia>
      },
      {
        path: '/europ',
        loader: () => fetch(`https://restcountries.com/v3.1/region/europ`),
        element: <Europ></Europ>
      },
      {
        path: '/africa',
        loader: () => fetch(`https://restcountries.com/v3.1/region/africa`),
        element: <Africa></Africa>
      }
     
    ]
  },
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
