import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addLs, addWishListLs } from "../Utilites";

const BookDetails = () => {
  //   const [bookSingle, setBookSingle] = useState([]);
  const single = useLoaderData();
  const { id } = useParams();
  //   console.log(single, id);

  const bookData = single.find((sing) => sing.bookId === id);
  console.log(bookData);
  const { bookId, bookName, image, author, category, rating , review ,tags , yearOfPublishing, totalPages , publisher} = bookData;

const handleRead = (id)=>{
  console.log('read is clicked')
  addLs(id)
}
const handleWishList = (id)=>{
  console.log('wish list clicked')
  addWishListLs(id)
}





  return (
    <div>
      <h2>This is book details page</h2>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
             {bookName}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
             By: {author}
            </p>
            <p>{review}</p>
            <p>Tag: {tags.map((tag , index) =><span key={index} className="font-semibold ml-4 text-green-500">#{tag}</span>)} </p>
            <p>Number of page: {totalPages}</p>
            <p>Publisher : {publisher}</p>
            <p>Year of publishing : {yearOfPublishing} </p>
            <p>Rating : {rating} </p>


            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
              onClick={()=>handleRead(bookId)}
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Read
              </button>

              <button
                onClick={()=>handleWishList(bookId)}
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
               Wishlist
              </button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
