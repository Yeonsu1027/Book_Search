"use client";
import { useState } from "react";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";
import BookDetail_des from "./BookDetail_des";

const BookMain = () => {
  const [search, setSearch] = useState("");
  const [isbn, setIsbn] = useState("");
  return (
    <>
      <div className="title_box">
        <h1 className="project_title">Book Search</h1>
      </div>
      <article className="book main">
        <aside className="book detail">
          {isbn && <BookDetail isbn={isbn} />}
        </aside>
        <aside className="book list">
          <div className="search_list">
            <BookSearch search={search} setSearch={setSearch} />
            <BookList search={search} setIsbn={setIsbn} />
          </div>
          {isbn && <BookDetail_des isbn={isbn} />}
        </aside>
      </article>
      <footer className="footer">
        <address>CopyRight &copy; rito1205@naver.com</address>
      </footer>
    </>
  );
};

export default BookMain;
