import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishListLs } from "../../Utilites";
import CardWish from "../CardWish/CardWish";

const WishLIstBookLIst = () => {
  const [wishListBook, setWishListBook] = useState([]);
  const wishListBookList = useLoaderData();

  console.log(wishListBookList , wishListBook);

  useEffect(() => {
    const lsId = getWishListLs()
    const readingBook = wishListBookList.filter((readBook) =>
      lsId.includes(readBook.bookId)
    );
    console.log(readingBook)
    setWishListBook(readingBook);
  }, [wishListBookList]);

  return (
    <div>
      {
        wishListBook.map(wbook =><CardWish 
            key={wbook.bookId}
            wbook={wbook}
            ></CardWish>)
      }
    </div>
  );
};

export default WishLIstBookLIst;
