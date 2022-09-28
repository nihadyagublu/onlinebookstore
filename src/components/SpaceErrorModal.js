import styles from "./SpaceErrorModal.module.css";

const SpaceErrorModal = (props) => {
  return (
    <div className={styles["backdrop_errorModal"]}>
      <div className={styles["errorModal_unit"]}>
        <header className={styles["error_title"]}>Error occured</header>
        <div className={styles["error_message_body"]}>
          Please make sure you filled in blanks
        </div>
        <footer>
          <button
            className={styles["button_confirm"]}
            onClick={() => {
              props.onConfirm(false);
            }}
          >
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SpaceErrorModal;
