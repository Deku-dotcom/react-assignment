import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './components/Home'; // Import Header
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Github from './components/Github';

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path:"",
//       element: <Home />
//     },
//     {
//       path:"/about",
//       element: <About />
//     },
//     {
//       path:"/contact",
//       element: <Contact />
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} /> {/* Assuming you have a Home component */}
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:usersid" element={<User />} />
    <Route path="github" element={<Github />} />

  </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


