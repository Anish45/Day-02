import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center">Contact Us</h3>
        </div>
      </div>
      <form>
        <div class="row mb-3 pt-4">
          <div class="col-md-6">
            <label for="firstname">First Name</label>
            <input type="name" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label for="lastname">Last Name</label>
            <input type="name" class="form-control" required />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1">Phone</label>
            <input type="number" class="form-control" required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12">
            <label for="validationTextarea">Message</label>
            <textarea class="box form-control"></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Link to="/">
              <button type="button" class="btn btn-warning">
                Back to home page
              </button>
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className='btn btn-warning' type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
