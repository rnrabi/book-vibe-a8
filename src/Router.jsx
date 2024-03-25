import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PageToRead from "./Pages/PageToRead";
import Books from "./component/Books/Books";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/',
            element:<Books></Books>
        },
        {
            path:'/listedBook',
            element:<ListedBooks></ListedBooks>
        },
        {
            path:'pageToRead',
            element:<PageToRead></PageToRead>
        }
      ]
    }
   
  ]);
