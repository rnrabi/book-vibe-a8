import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import SingleBook from "../SingleBook/SingleBook";
const Books = () => {
  const books = useLoaderData();
  // console.log(books)
  return (
    <div>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="w-full md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Books to freshen up your bookshelf{" "}
            </h1>
            <Link to='/listedBook'><button className="btn bg-green-500">View the list</button></Link>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-extrabold my-5">Books</h2>
      <div className="md:grid md:grid-cols-3 gap-4">
        {books.map((book) => (
          <SingleBook key={book.bookId} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Books;
