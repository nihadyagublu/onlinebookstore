import React, { useState } from "react";
import About from "./components/About";
import MainSection from "./components/MainSection";
import IntroSection from "./components/IntroSection";
import SeparateBookPage from "./components/SeparateBookPage";
import SendYourReview from "./components/SendYourReview";

function App() {
  const [aboutClicked, setAboutClicked] = useState(false);
  const [sendYourReviewPageClicked, setSendYourReviewPageClicked] =
    useState(false);

  const homeSectionHandler = () => {
    setSendYourReviewPageClicked(false);
    setAboutClicked(false);
  };

  const aboutSectionHandler = () => {
    setAboutClicked(true);
    setSendYourReviewPageClicked(false);
  };

  const sendReviewSectionHandler = () => {
    setAboutClicked(false);
    setSendYourReviewPageClicked(true);
  };

  return (
    <div>
      <IntroSection
        aboutSection={aboutSectionHandler}
        sendReviewSection={sendReviewSectionHandler}
        homeSection={homeSectionHandler}
      />
      {aboutClicked && !sendYourReviewPageClicked && <About />}
      {!aboutClicked && sendYourReviewPageClicked && <SendYourReview />}
      {!aboutClicked && !sendYourReviewPageClicked && <MainSection />}

      <footer style={{ color: "white", marginTop: "60px" }}>
        <hr />
        <h3>contact us: bookstore123@bks.com</h3>
      </footer>
    </div>
  );
}

export default App;
