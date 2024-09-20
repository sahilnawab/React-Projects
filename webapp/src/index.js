import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Project from './Components/projects/Project';


//   [
//   {path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"home",
//         element:<Home></Home>
//       }
//     ]
//   }
// ]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='project' element={<Project/>}>
        
      
      </Route>
    
    </Route>
  )
)












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
