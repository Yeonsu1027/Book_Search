"use client";
import { getNaverBooks } from "@/api/naver_api";
import { useEffect, useState } from "react";
const BookDetail = ({ isbn }) => {
  const [book, setBook] = useState("");
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getNaverBooks(isbn);
      const book = result[0];
      setBook(book);
    };
    fetchBook();
  }, [isbn]); // isbn 이 전달되면 fetch를 통해 도서정보를 가져와라
  return (
    <>
      <div className="book_title">
        <h1>{book.title}</h1>
        <img src={book.image} width="500px" className="book_img"></img>
      </div>
    </>
  );
};
export default BookDetail;
