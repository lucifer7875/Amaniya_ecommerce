import React from "react";
import back2 from "../assets/back.png";
import back3 from "../assets/back-3.png";
import back4 from "../assets/back-4.png";
import back6 from "../assets/back-6.png";
import back5 from "../assets/back-5.png";
import back7 from "../assets/back-2.png";

import videoSell from "../assets/Amaniya video.mp4";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  function Clicked() {
    alert("Login First");
  }

  return (
    <div>
      <div className="backGround">
        <video
          src={videoSell}
          autoPlay
          loop
          muted
          style={{
            width: "60%",
            objectFit: "contain",
            marginLeft: "300px",
            borderTopLeftRadius: "20%",
            borderBottomRightRadius: "20%",
          }}
        ></video>
      </div>

      {/* flex div 1 */}
      <div className="Flex Div1 ">
        {/* card1 */}
        <div className="card mb-3 contentCard">
          <img src={back3} className="card-img-top cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Clothing👕</strong>
            </h5>
            <p className="card-text">
              Minimum <strong>70% </strong>off buy any brand Cloth😍.
              <br />
              <strong>FREE DELIVERY</strong>
            </p>
            <button className="btn btn-primary" onClick={Clicked}>
              View Product
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className="card mb-3 contentCard">
          <img src={back2} className="card-img-top cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Electronics and Accessories💻</strong>
            </h5>
            <p className="card-text">
              Buy Any Electronics product and Accessories <br />
              under <strong>₹1999</strong>👍 & extra <b>10%</b> off via
              Coupon🎫.
              <br />
              <strong>FREE DELIVERY</strong>{" "}
            </p>
            <button className="btn btn-primary" onClick={Clicked}>
              View Product
            </button>
          </div>
        </div>

        {/* card 3 */}

        <div className="card mb-3 contentCard">
          <img src={back4} className="card-img-top cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <b>Kitchen & Home</b>
            </h5>
            <p className="card-text">
              Any Home & Kitchen Relate product starting at{" "}
              <strong>₹149</strong>.<br />
            </p>
            <button className="btn btn-primary" onClick={Clicked}>
              View Product
            </button>
          </div>
        </div>
      </div>

      {/* flex div 2 */}

      <div className="Flex Div2">
        {/* card1 */}
        <div className="card mb-3 contentCard">
          <img src={back5} className="card-img-top cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <b>Camrera Accessories📷</b>
            </h5>
            <p className="card-text">
              Buy Camrera Accessories under <strong>₹1499</strong>. <br />
              <strong>PAY ON DELIVERY</strong>🚚{" "}
            </p>
            <button className="btn btn-primary" onClick={Clicked}>
              View Product
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className="card mb-3 contentCard">
          <img src={back6} className="card-img-top cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <b>Mobiles Accessories📱</b>
            </h5>
            <p className="card-text">
              Buy Mobiles Accessories starting At only <strong>₹99</strong>.
              <br /> <b>COD IS AVAILABLE</b>
            </p>
            <button className="btn btn-primary" onClick={Clicked}>
              View Product
            </button>
          </div>
        </div>

        {/* card 3 */}

        <div className="card mb-3 contentCard">
          <img src={back7} className="card-img-top cardImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Fashion</h5>
            <p className="card-text">
              Buying any Fashion Item starting At only <strong>₹99</strong>.
              <b>FREE DELIVERY ON FIRST ORDER</b>
            </p>
            <button className="btn btn-primary" onClick={Clicked}>
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
