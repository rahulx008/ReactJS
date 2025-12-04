import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

import Route from './route';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';


const route = createBrowserRouter([
    { 
      path: '/',
      element: <Route />,
      children: [
        {
          path: '/',
          element: <Home />,  
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contacts />,
        }
      ]
    }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={route}/>
  </StrictMode>
)
