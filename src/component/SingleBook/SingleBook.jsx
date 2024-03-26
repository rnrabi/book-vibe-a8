import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SingleBook = ({ book }) => {
  // console.log(book);
  const {bookId , bookName , image , author , category , rating} = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-60 w-full"
            src={image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <hr />
          <div className="card-actions justify-between">
            <p>{category}</p>
            <p className="text-right flex items-center gap-2">{rating} <FaRegStar /> </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
