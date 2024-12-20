import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import DashBoard from './components/Dashboard/DashBoard.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/productDetials',
        element: <ProductDetails />
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
        loader: ()=>fetch('productsData.json')
      },
      {
        path: '/statistics',
        element: <Statistics />,
        loader: ()=> fetch('productsData.json')
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
