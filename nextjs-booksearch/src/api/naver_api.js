"use server";

const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json"; 

  // 개발자도구 책 참고사항
export const getNaverBooks = async (search) => {
  const fetchOption = {
    method: "GET",
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };
  const response = await fetch(
    `${NAVER_BOOK_URL}?query=${search || "java"}`,
    fetchOption
  );
  const books = await response.json();
  console.log("뭐뭐들어있지",books);

  return books.items;
};

