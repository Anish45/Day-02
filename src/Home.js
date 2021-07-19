import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <button className="btn">
        <Link to="/contact">Contact Page</Link>
      </button>
    </div>
  );
};

export default Home;
