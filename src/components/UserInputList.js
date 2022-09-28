import React from "react";
import styles from "./UserInputList.module.css";
import ReceivedComment from "./ReceivedComment";

const UserInputList = (props) => {
  return (
    <div className={styles["posted_comments"]}>
      <div className={styles["posted_header"]}>Posted comments</div>
      <ul>
        {props.userData.map((eachUserInfo) => (
          <ReceivedComment
            key={eachUserInfo.id}
            name={eachUserInfo.name}
            surname={eachUserInfo.surname}
            userComment={eachUserInfo.userComment}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserInputList;

/* <div className={styles["posted_comments"]}>
  
      <div className={styles["posted_comment"]}> {props.userData.map(userInfo) =>
              <div>
        <section className={styles["posted_name_surname"]}>
          {props.userInfo.name}
        </section>
        <section className={styles["body_comment"]}>
          {props.userInfo.userComment}
        </section>
        </div>
      </div>
    </div> */
{
  /* <div className={styles["posted_header"]}>
          
        </div> */
}
