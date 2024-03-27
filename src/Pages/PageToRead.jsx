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

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];

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
