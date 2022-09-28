import styles from "./ReceivedComment.module.css";

const ReceivedComment = (props) => {
  return (
    <li className={styles["postedd_comment"]}>
      <div className={styles["postedd_name_surname"]}>
        {props.name} {`   `}
        {props.surname}
      </div>
      <div className={styles["bodyy_comment"]}>
        <p>{props.userComment}</p>
      </div>
    </li>
  );
};

export default ReceivedComment;
