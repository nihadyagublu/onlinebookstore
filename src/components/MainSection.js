import React, { useState, useEffect, useCallback } from "react";
// import BookLoaderButton from "./BookLoaderButton";
import styles from "./MainSection.module.css";
// import BookItem from "./BookItem";
import BookList from "./BookList";
import axios from "axios";
import SeparateBookPage from "./SeparateBookPage";

const MainSection = () => {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const fetchBooks = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Jqr3RjdwWIcfDDMFJubecq8qKiP79Awb`
    );
    setBookData(res.data.results.books);
    console.log(res.data.results.books);
  };

  // useEffect(() => {
  //   fetchBooks();
  // }, [fetchBooks]);

  return (
    <div className={styles["main_section"]}>
      <button className={styles["book_displayer_button"]} onClick={fetchBooks}>
        Click to see the latest bestsellers
      </button>
      {/* {!isLoading && <div>Nothing was chosen</div>} */}
      {isLoading && bookData.length === 0 && (
        <div className={styles["loading_message"]}>Loading...</div>
      )}
      {isLoading && (
        <div className={styles["books_loading_section"]}>
          <BookList bookData={bookData} />
        </div>
      )}

      <div className={styles["footer_section"]}></div>
    </div>
  );
};

export default MainSection;
