import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const Navigate = useNavigate();
  function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-toggle")) {
      const dropdowns = document.getElementsByClassName("dropdown-menu");
      //   console.log(dropdowns);
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={require("../assets/amaniya33.png")}
              alt="Logo"
              className="logoImg"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  onClick={dropDownFunction}
                >
                  Product
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdown"
                  id="myDropdown"
                >
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/items")}
                  >
                    All
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/mobile")}
                  >
                    Mobiles
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/laptop")}
                  >
                    Laptop
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/Kitchen&Home")}
                  >
                    Kitchen&Home
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/fashion")}
                  >
                    Fashion
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/books")}
                  >
                    Books
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/electronics")}
                  >
                    Electronics
                  </a>
                  <hr className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/today's_Deals")}
                  >
                    Todays's Deals 😍
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    onClick={() => Navigate("/home/newReleases")}
                  >
                    New Releases
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart🛒
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Order & Return
                </a>
              </li>
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">
                Search
              </button>
              <button className="btn btn-danger" onClick={() => Navigate("/")}>
                LogOut
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
