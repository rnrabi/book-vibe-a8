import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLs } from "../../Utilites";
import CardBook from "../CardBook/CardBook";

const ReadBookList = () => {
const [readedBook , setReadedBook] =useState([]);
const readBookList = useLoaderData();

console.log(readBookList , readedBook);

useEffect(()=>{
    const lsId = getLs();
    const readingBook = readBookList.filter(readBook =>lsId.includes(readBook.bookId));
    setReadedBook(readingBook);
},[])



  return (
    <div>
      <h2>Read book list</h2>
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
