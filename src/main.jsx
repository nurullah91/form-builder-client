import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import CreateForm from './pages/CreateForm/CreateForm.jsx';
import Forms from './pages/Forms/Forms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }, 
      {
        path:'create-forms',
        element:<CreateForm></CreateForm>
      },
      {
        path:'forms',
        element:<Forms></Forms>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
