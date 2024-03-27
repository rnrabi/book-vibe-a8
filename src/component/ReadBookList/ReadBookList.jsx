import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { getLs } from "../../Utilites";
import CardBook from "../CardBook/CardBook";

const ReadBookList = () => {
const [readedBook , setReadedBook] =useState([]);
const readBookList = useLoaderData();

// console.log(readBookList , readedBook);

useEffect(()=>{
    const lsId = getLs();
    const readingBook = readBookList.filter(readBook =>lsId.includes(readBook.bookId));
    setReadedBook(readingBook);
},[readBookList])

// This code for sorting. 
const location = useLocation();
console.log(location.state)


  return (
    <div className="">
      {
        readedBook.map(rbook =><CardBook
           key={rbook.bookId}
           rbook={rbook}
           ></CardBook>)
      }
     
    </div>
  );
};

export default ReadBookList;
