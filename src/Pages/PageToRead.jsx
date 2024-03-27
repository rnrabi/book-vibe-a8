import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getLs } from "../Utilites";

const PageToRead = () => {
  const [data, setReadedBook] = useState([]);
  const readBookList = useLoaderData();

  console.log(data);

  useEffect(() => {
    const lsId = getLs();
    const readingBook = readBookList.filter((readBook) =>
      lsId.includes(readBook.bookId)
    );
    setReadedBook(readingBook);
  }, [readBookList]);

  return (
    <div className="flex justify-center mt-5">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis dataKey="totalPages" />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default PageToRead;
