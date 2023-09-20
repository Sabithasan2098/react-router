import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/HomePage/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contacts/Contact.jsx';
import Users from './components/users/Users.jsx';
import UserDetails from './components/userDatails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import Postdetails from './components/postDetails/Postdetails.jsx';
 
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"users",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
       {
        path: "/post",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
       },
       {
        path:"/post/:postId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postdetails></Postdetails>
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
