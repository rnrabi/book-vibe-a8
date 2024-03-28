import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { getLs } from "../../Utilites";
import CardBook from "../CardBook/CardBook";

const ReadBookList = () => {
const [readedBook , setReadedBook] =useState([]);
// const [sortRating , setSortRating] = useState([])
const readBookList = useLoaderData();


useEffect(()=>{
    const lsId = getLs();
    const readingBook = readBookList.filter(readBook =>lsId.includes(readBook.bookId));
    setReadedBook(readingBook);
    // location.state= [];
},[readBookList])

// This code for sorting. 
const location = useLocation();
console.log(location.state)


  return (
    <div className="">
      { location.state?.length > 0 && 
        location.state?.map(rbook =><CardBook
           key={rbook.bookId}
           rbook={rbook}
           ></CardBook>)
      }
       { location.state?.length === 0 && 
        readedBook.map(rbook =><CardBook
           key={rbook.bookId}
           rbook={rbook}
           ></CardBook>)
      }
     
    </div>
  );
};

export default ReadBookList;
