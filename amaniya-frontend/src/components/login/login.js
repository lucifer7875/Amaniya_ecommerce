import React, { useEffect, useState } from "react";
import "./login.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import shop from "../assets/shopkeeper.png";
import VideoBG from "../assets/amaniya.mp4";
import Footer from "../footer/footer";
import axios from "axios";

const Login = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert("login Successfull 👍");
        Navigate("/home/items");
      });
  };

  return (
    <div>
      <div>
        <video
          src={VideoBG}
          autoPlay
          loop
          muted
          style={{ width: "100%", marginTop: "-130px", opacity: "0.4" }}
        ></video>
      </div>
      <div className="flexDiv">
        <div>
          {" "}
          <img
            src={shop}
            style={{
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
          />
        </div>
        <div className="Login">
          <h1 style={{ fontWeight: "bold", color: "#6788e2" }}>
            Welcome to Amaniya
          </h1>
          <hr />
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <em class="bi bi-envelope"></em>
            </span>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="username or email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <br />
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <em class="bi bi-lock"></em>
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br />
          <button className="btn btn-primary " id="btn" onClick={Login}>
            Login <em class="bi bi-box-arrow-right"></em>
          </button>
          <br />
          New User ?
          <a
            style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}
            onClick={() => Navigate("/register")}
          >
            {" "}
            Register First{" "}
          </a>
        </div>
      </div>
      <div className="footerDiv2">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
