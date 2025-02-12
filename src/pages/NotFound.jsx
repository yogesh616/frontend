import React from "react";
// import "./NotFound.css";
import NotFounds from "../assets/img/not-found.svg";

const NotFound = () => {
  return (
    <div>
      <main>
        <div className="container">
          <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <a className="btn" href={"/"}>
              Back to home
            </a>
            <img
              src={`${NotFounds}`}
              className="img-fluid py-5"
              alt="Page Not Found"
            />
            <div className="credits"></div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
