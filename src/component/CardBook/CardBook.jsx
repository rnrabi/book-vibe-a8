import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';
const CardBook = ({rbook}) => {
  console.log(rbook)
const { bookName , image , author , category , rating,tags, yearOfPublishing , totalPages , publisher} = rbook;



  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={image}
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                     {bookName}
                    </h3>
                    <p className="text-sm dark:text-gray-600">By:{author}</p>
                    <p className="flex items-center gap-4">Tag : {tags.map((tag,idx) =><span className="ml-4" key={idx}>{tag}</span>)} <CiLocationOn /> year of purshing : {yearOfPublishing}</p>
                    <p>publisher:{publisher} Page: {totalPages}</p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button>Category:{category}</button>
                  <button className="mx-4">Rating:{rating}</button>
                  <button>View Detail</button>
                </div>

              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

CardBook.propTypes = {
  rbook:PropTypes.object.isRequired,
}
export default CardBook;
