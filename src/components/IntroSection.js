import React from "react";
//import BookLoaderButton from "./BookLoaderButton";
import "./IntroSection.css";
//import "bootstrap/dist/css/bootstrap.css";
import About from "./About";
//import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
//import cx from "classnames";

const IntroSection = (props) => {
  return (
    <React.Fragment>
      <div className="first_half_page">
        <div className="header">
          <div className="intro-name"> ONLINE BOOKSTORE</div>
          <div className="right-header">
            <span
              onClick={() => props.homeSection(true)}
              className="right_menu_icon home_page"
            >
              Home
            </span>
            <span
              onClick={() => props.aboutSection(true)}
              className="right_menu_icon about_page"
            >
              About
            </span>{" "}
            <span
              onClick={() => props.sendReviewSection(true)}
              className="right_menu_icon send_review_page"
            >
              Send your reviews & comments
            </span>
          </div>
        </div>

        <div className="intro-center"></div>
      </div>
    </React.Fragment>
  );
};
export default IntroSection;
