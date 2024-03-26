import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
//   const [bookSingle, setBookSingle] = useState([]);
  const single = useLoaderData();
  const { id } = useParams();
//   console.log(single, id);

  const bookData = single.find((sing) =>sing.bookId===id);
  console.log(bookData);
  const {bookId , bookName , image , author , category , rating} = bookData;


  return (
    <div>
      <h2>This is book details page</h2>
    </div>
  );
};

export default BookDetails;
