import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Login from './componentes/Login/Login';
import ErrorPage from './componentes/PageError';
import Inicio from './pages/inicio';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,  
  RouterProvider} from 'react-router-dom';

const route=createBrowserRouter([
  {
    path:"/",
    element:<Login />,
    errorElement:<ErrorPage />,
  },
  {
    path:"pages/inicio",
    element:<Inicio />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
