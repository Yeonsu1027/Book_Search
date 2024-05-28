"use client";
import { getNaverBooks } from "@/api/naver_api";
import { useEffect, useState } from "react";
const BookDetail_des = ({ isbn }) => {
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
    <div className="expla">
        <p>저자: {book.author}</p>
        <p>출판사: {book.publisher}</p>
        <p>할인가 : {book.discount} 원</p>
    <div className="des_block">
      <p>{book.description}</p>
    </div>
  </div>

  );
};
export default BookDetail_des;
