import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HOME from './Components/Home/HOME.jsx';
import WhyUsPage from './Components/WhyUsPage/WhyUsPage.jsx';
import Services from './Components/ServicesPage/Services.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <HOME></HOME>
      },
      {
        path:"/why-us",
        element:<WhyUsPage></WhyUsPage>
      },
      {
        path:"/services",
        element:<Services></Services>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
