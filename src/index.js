import React from 'react';
import ReactDOM from 'react-dom/client';
//css
import './css/index.css';
//pages
import ErrorPage from './componentes/PageError';
import Inicio from './pages/inicio';
import PaginaLogin from './pages/login';
import Caja from './pages/caja';
import Ventas from './pages/ventas';
import Productos from './pages/productos';
import Acerca from './pages/acerca';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,  
  RouterProvider} from 'react-router-dom';

const route=createBrowserRouter([
  {
    path:"/",
    element:<PaginaLogin />,
    errorElement:<ErrorPage />,
  },
  {
    path:"pages/inicio",
    element:<Inicio />,
  },
  {
    path:"pages/caja",
    element:<Caja />
  },
  {
    path:"pages/ventas",
    element:<Ventas />
  },
  {
    path:"pages/productos",
    element:<Productos />
  },
  {
    path:"pages/acerca",
    element:<Acerca />
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
