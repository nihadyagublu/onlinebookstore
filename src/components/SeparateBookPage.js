import React from "react";
import IntroSection from "./IntroSection";
import styles from "./SeparateBookPage.module.css";
const SeparateBookPage = (props) => {
  const dissolveHandler = () => {
    return;
  };

  return (
    <React.Fragment>
      <div
        onClick={() => props.closeModal(false)}
        className={styles["backdrop"]}
      >
        <div className={styles["modal"]}>
          <h1>{props.title}</h1>
          <h2>by {props.author}</h2>
          <img src={props.image} />
          <p>
            <b>Description: </b>
            {props.description}
          </p>
          <p>
            <b>ISBN: </b>
            {props.id}
          </p>
          <p>
            <b>Publisher: </b>
            {props.publisher}
          </p>
          <button>
            {" "}
            <a href={props.amazon_link}> Buy from Amazon </a>{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SeparateBookPage;
