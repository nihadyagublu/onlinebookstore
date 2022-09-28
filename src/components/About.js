import React from "react";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <React.Fragment>
      <div className={styles["message"]}>
        {/* {props.children} */}
        <header className={styles["header_about"]}>
          {" "}
          <h1> About</h1>
        </header>{" "}
        <div className={styles["body_about"]}>
          <h3>
            This is a test web application developed by Nihad Yagublu. I've used
            New York Times Books API and axios to fetch the data. Besides,
            Firebase was used for small database related functions.{" "}
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
