import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './modules/dashboard/page/Dashboard.jsx';
import './main.css';
import { Complaints } from './modules/complaints/page/Complaints.jsx';
import Login from './modules/login/page/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path:"dashboard/complaints",
        element: <Complaints />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
