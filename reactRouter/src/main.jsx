import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css'

import Layout from './Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import User from './Components/User/User';
import Github, { githubLoader } from './Components/Github/Github';

//Method 1
// const router = createBrowserRouter([
//     { 
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: '',
//           element: <Home />,  
//         },
//         {
//           path: '/about',
//           element: <About />,
//         },
//         {
//           path: '/contact',
//           element: <Contacts />,
//         }
//       ]
//     }
//   ]);

//Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contacts />} />

      {/* Newly added route for User with URL parameters */}
      <Route path='user/:userId/:UserName?' element={<User />} />
      <Route 
        path='github' 
        element={<Github />}a
        loader={githubLoader} />
       
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>
)
