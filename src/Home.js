import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <Link to="/contact">
        <button type="button" class="btn btn-warning">
          Contact Page
        </button>
      </Link>
    </div>
  );
};

export default Home;
