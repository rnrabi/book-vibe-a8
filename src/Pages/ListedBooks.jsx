import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getLs } from "../Utilites";

const ListedBooks = () => {
// This is sorting code bellow............

  const [sortBook , setSortBook] =useState([]);
  const forSort = useLoaderData();
  
  // console.log(sortBook);
  
  useEffect(()=>{
      const lsId = getLs();
      const readingBook = forSort.filter(book =>lsId.includes(book.bookId));
      setSortBook(readingBook);
  },[forSort])
  
  const ratingSort = sortBook.sort((a ,b)=>{
    let x = a.rating; 
    let y = b.rating;
    if(x<y){
      return -1;
    }
    if(x>y){
      return 1
    }
    else {return 0}
  })
// console.log(ratingSort)
const navigate = useNavigate();

  // const [rating , setRating] = useState([]);
  // const [pages , setPages] = useState([]);
  // const [year , setYears] = useState([]);

  const handleRating = ()=>{
    console.log('handle rating')
    navigate('/listedBook' , {state :ratingSort})
  }
  const handlePages = ()=>{
    console.log('handle pages')
  }
  const handleYears = ()=>{
    console.log('handle years')
  }

// This is sorting code above



  return (
    <div>
      <h2 className="text-center font-bold text-3xl">Books</h2>

      <div className="flex justify-center mx-auto mb-9">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-600">Sort By <RiArrowDropDownLine></RiArrowDropDownLine> </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={()=>handleRating()}>Rating</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Publish year</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden justify-center sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read books</span>
        </Link>

        <Link
          to="wishListBookList"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
