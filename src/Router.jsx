import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PageToRead from "./Pages/PageToRead";
import Books from "./component/Books/Books";
import BookDetails from "./Pages/BookDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/',
            element:<Books></Books>,
            loader:()=>fetch(`books.json`)
        },
        {
            path:'/listedBook',
            element:<ListedBooks></ListedBooks>
        },
        {
            path:'pageToRead',
            element:<PageToRead></PageToRead>
        },
        {
          path:'/bookDetails/:id',
          element:<BookDetails></BookDetails>,
          loader:()=>fetch(`books.json`)
        }
      ]
    }
   
  ]);
