import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
// import { Footer, Header } from "../../Components";

import "./pageNotFound.css";

const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;