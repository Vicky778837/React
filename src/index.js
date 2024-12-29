import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import LogIn from './component/LogIn/LogIn';
// import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Layout from './Layout';
import User from './component/Uesr/User';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Header />,
//   },
//   {
//     path: 'vicky',
//     element: <LogIn />,
//   },

//   {
//     path: 'about',
//     element: <About />,
//   },

//   {
//     path: 'contact',
//     element: <Contact/>,
//   },
// ])




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="vicky" element={<LogIn />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
