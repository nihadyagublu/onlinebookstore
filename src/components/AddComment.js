import React, { useRef, useState } from "react";
import styles from "./AddComment.module.css";
import SpaceErrorModal from "./SpaceErrorModal";

const AddComment = (props) => {
  const [errorOcurred, setErrorOcurred] = useState(false);

  const nameRef = useRef("");
  const surnameRef = useRef("");
  const commentRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const postedUserComment = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      userComment: commentRef.current.value,
    };

    if (
      postedUserComment.name.length === 0 ||
      postedUserComment.surname.length === 0 ||
      postedUserComment.userComment.length === 0
    ) {
      setErrorOcurred(true);
    }
    if (
      postedUserComment.name.length > 0 &&
      postedUserComment.surname.length > 0 &&
      postedUserComment.userComment.length > 0
    ) {
      props.addedComment(postedUserComment);
    }
    nameRef.current.value = "";
    surnameRef.current.value = "";
    commentRef.current.value = "";
  };

  return (
    <React.Fragment>
      <div className={styles["form-holder"]}>
        <form onSubmit={submitHandler}>
          <div className={styles["header_comment_section"]}>
            <h1>Send your reviews & comments</h1>
          </div>
          <div className={styles["name"]}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={nameRef} />
          </div>

          <div className={styles["surname"]}>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" ref={surnameRef} />
          </div>

          <div className={styles["comment"]}>
            <label htmlFor="comment">Your comment: </label>
            <textarea
              id="comment"
              placeholder="Enter what you think about our website..."
              ref={commentRef}
              maxLength={800}
            />
          </div>
          <button type="submit">Submit your comment</button>
        </form>
      </div>

      {errorOcurred && <SpaceErrorModal onConfirm={setErrorOcurred} />}
    </React.Fragment>
  );
};

export default AddComment;
