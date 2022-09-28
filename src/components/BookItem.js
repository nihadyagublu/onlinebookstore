import React, { useState } from "react";
import styles from "./BookItem.module.css";
import SeparateBookPage from "./SeparateBookPage";
import ReactDOM from "react-dom";

const BookItem = (props) => {
  const [itemSelected, setItemSelected] = useState(false);

  const bookSelectHandler = (id) => {
    setItemSelected(true);
    // props.bookInfoPage(true);
  };

  return (
    <div>
      <li
        className={styles["book_item"]}
        key={props.id}
        onClick={bookSelectHandler}
      >
        <img src={props.image} />
        <div className={styles["info_book"]}>
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <button onClick={bookSelectHandler}>More info</button>
      </li>

      {itemSelected && (
        <SeparateBookPage
          closeModal={setItemSelected}
          title={props.title}
          image={props.image}
          author={props.author}
          id={props.id}
          ISBN={props.id}
          description={props.description}
          amazon_link={props.amazon_link}
          publisher={props.publisher}
        />
      )}
    </div>
  );
};

export default BookItem;

/* <React.Fragment>
<div className={styles["book_item"]}>
  {/* <div className={styles["book_icon"]}>{props.bookData.image}</div> */

//   <div className={styles["book_title"]}>{props.bookData.title}</div>
//   <div className={styles["author"]}>{props.bookData.author}</div>
//   <button>Click to buy</button>
// </div>
// </React.Fragment> */}
