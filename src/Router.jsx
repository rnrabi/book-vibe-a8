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
            element:<ListedBooks></ListedBooks>,
            children:[
              {
                index:true,
                element:<ReadBookList></ReadBookList>,
                loader:()=>fetch(`./books.json`)
              },
              {
                path:'wishListBookList',
                element:<WishLIstBookLIst></WishLIstBookLIst>
              }
            ]
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
