import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCountrys from '../components/AllCountrys/AllCountrys'
import Asia from '../components/Asia/Asia'
import Europ from '../components/Europ/Europ'
import Africa from '../components/Africa/Africa.jsx'
const MainRout = createBrowserRouter([
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

export default MainRout;