import React, { useCallback, useEffect, useState } from "react";
import UserInputList from "./UserInputList";
import AddComment from "./AddComment";
import styles from "./SendYourReview.module.css";
import axios from "axios";
import results from "./results";

const SendYourReview = () => {
  const [userInput, setUserInput] = useState([]);

  async function addedCommentHandler(comment) {
    const response = await fetch(
      "https://last-before-default-rtdb.firebaseio.com/books.json",
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    console.log(data);
  }

  const getUserComment = async () => {
    const response = await fetch(
      "https://last-before-default-rtdb.firebaseio.com/books.json"
    );
    const data = await response.json();

    const loadedComments = [];

    for (const key in data) {
      loadedComments.push({
        id: key,
        name: data[key].name,
        surname: data[key].surname,
        userComment: data[key].userComment,
      });
    }
    setUserInput(loadedComments);
  };

  useEffect(() => {
    getUserComment();
  }, [getUserComment]);

  return (
    <React.Fragment>
      <div className={styles["comment_page_structure"]}>
        <section>
          <AddComment addedComment={addedCommentHandler} />
        </section>
        <section>
          <UserInputList userData={userInput} />
        </section>
      </div>
    </React.Fragment>
  );
};

export default SendYourReview;
