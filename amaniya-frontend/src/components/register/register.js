import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Logo from "../assets/amaiya-3.png";
import "./register.css";
import videoBg from "../assets/GEOMETRICANIMATION.mp4";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registerd = () => {
  const Navigate = useNavigate();

  const [userNameReg, setuserNameReg] = useState("");
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [cPasswordReg, setcPasswordReg] = useState("");

  const Register = () => {
    if (
      userNameReg &&
      emailReg &&
      passwordReg &&
      passwordReg === cPasswordReg
    ) {
      axios
        .post("http://localhost:8080/register", {
          userName: userNameReg,
          email: emailReg,
          password: passwordReg,
        })
        .then((res) => {
          console.log(res);
        });
      alert("Data Registerd");
      window.location.href = "/login";
    } else {
      alert("incorrect input");
      window.location.href = "/register";
    }
  };

  return (
    <div>
      <div>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            position: "fixed",
            marginTop: "-50px",
            objectFit: "contain",
          }}
        ></video>
      </div>

      <MDBContainer fluid>
        <MDBCard
          className="text-black m-5"
          style={{ borderRadius: "25px", opacity: "0.9" }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <img
                  src={Logo}
                  className="logoOfWeb"
                  style={{ opacity: "0.8" }}
                />

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <em class="bi bi-person"></em>
                  </span>
                  <input
                    type="big-int"
                    name="username"
                    className="form-control"
                    placeholder="username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      setuserNameReg(e.target.value);
                    }}
                  ></input>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <em class="bi bi-envelope"></em>
                  </span>
                  <input
                    type="big-int"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      setemailReg(e.target.value);
                    }}
                  ></input>
                </div>

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
                      setpasswordReg(e.target.value);
                    }}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <em class="bi bi-lock"></em>
                  </span>
                  <input
                    type="password"
                    name="cPassword"
                    className="form-control"
                    placeholder="Repeat your password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      setcPasswordReg(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember Me"
                  />
                </div>

                <button
                  className="btn btn-primary "
                  id="btn"
                  onClick={Register}
                >
                  Register <em class="bi bi-box-arrow-right"></em>
                </button>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  style={{ opacity: "0.9" }}
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Registerd;
