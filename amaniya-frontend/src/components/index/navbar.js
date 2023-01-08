import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/amaniya33.png";
import "./index.css";

const Navigationbar = () => {
  const Navigate = useNavigate();
  return (
    <div>
      {/* navbar */}
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <img src={Logo} style={{ width: "120px"}} />

          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ marginLeft: "5px" }}
            >
              Search
            </button>
          </form>
          <div className="cart">
            <button className="btn btn-primary">Returns & orders</button>
            <button className="btn btn-primary" style={{ marginLeft: "5px" }}>
              Cart
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => Navigate("/login")}
            >
              Sign In
            </button>
            <button
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
              onClick={() => Navigate("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigationbar;
