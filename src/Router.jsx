import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PageToRead from "./Pages/PageToRead";
import Books from "./component/Books/Books";
import BookDetails from "./Pages/BookDetails";
import ReadBookList from "./component/ReadBookList/ReadBookList";
import WishLIstBookLIst from "./component/WishLIstBookList/WishLIstBookLIst";
import FourOfour from "./Pages/FourOfour/FourOfour";
import Blogs from "./Pages/FourOfour/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<FourOfour></FourOfour>,
      children:[
        {
            path:'/',
            element:<Books></Books>,
            loader:()=>fetch(`../books.json`)
        },
        {
            path:'/listedBook',
            element:<ListedBooks></ListedBooks>,
            loader:()=>fetch(`../books.json`),
            children:[
              {
                index:true,
                element:<ReadBookList></ReadBookList>,
                loader:()=>fetch(`../books.json`)
              },
              {
                path:'wishListBookList',
                element:<WishLIstBookLIst></WishLIstBookLIst>,
                loader:()=>fetch(`../books.json`)
              }
            ]
        },
        {
            path:'/pageToRead',
            element:<PageToRead></PageToRead>,
            loader:()=>fetch(`../books.json`)
        },
        {
          path:'/bookDetails/:id',
          element:<BookDetails></BookDetails>,
          loader:()=>fetch(`../books.json`)
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    }
   
  ]);
