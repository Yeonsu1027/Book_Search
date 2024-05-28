"use client";
import { getNaverBooks } from "@/api/naver_api";
import { useEffect, useState } from "react";

const BookList = ({ search, setIsbn }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNaverBooks(search);

      console.log(result);
      setBooks([...result]);
    };
    fetchData();
  }, [search]); // search 가 변경된게 감지가 되면

  const viewList = books.map((book) => {
    return (
      <li
        key={book.isbn}
        onClick={() => {
          setIsbn(book.isbn);
        }}
      >
        {book.title}
      </li>
    );
  });
  return <ul className="list_block">{viewList}</ul>;
};
export default BookList;
