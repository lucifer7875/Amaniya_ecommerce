import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../home.css";
import offerGif from "../../assets/offer1.gif";

const Electronics = () => {
  return (
    <div className="itemsOf">
      <img src={offerGif} className="gifImg1" />
      <div className="flexDiv12">
        {/* card1 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/Driving.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Driving1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Driving2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Driving3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Logitech G29 Driving Force Racing Wheel and Floor Pedals, Real
              Force, Stainless Steel Paddle Shifters
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Logitech G</td>
              </tr>
              <tr>
                <td>Compatible Devices</td>
                <td>PC, Playstation 4, Playstation 5, Windows, Mac</td>
              </tr>
              <tr>
                <td>Controller Type</td>
                <td>Steering wheel, Pedals</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>Black</td>
              </tr>

              <tr>
                <td>Price</td>
                <td>₹29990/-</td>
              </tr>
            </p>
            <a href="#" className="btn btn-primary">
              <i class="bi bi-cart4"></i>
            </a>{" "}
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>

        {/* card2 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/keybord.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/keybord1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/keybord2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/keybord3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Redragon Kumara K552-RGB LED Backlit USB Mechanical Gaming
              Keyboard Without Numlock Keys, Black
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Redragon</td>
              </tr>
              <tr>
                <td>Compatible Devices</td>
                <td>Pc</td>
              </tr>
              <tr>
                <td>Connector Type</td>
                <td>USB</td>
              </tr>
              <tr>
                <td>Keyboard Description</td>
                <td>Gaming</td>
              </tr>
              <tr>
                <td>Special Feature</td>
                <td>Ergonomic, Backlit</td>
              </tr>

              <tr>
                <td>Price</td>
                <td>₹3179/-</td>
              </tr>
            </p>
            <a href="#" className="btn btn-primary">
              <i class="bi bi-cart4"></i>
            </a>{" "}
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>

        {/* card3 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/Cooling.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Cooling1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Cooling2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Cooling3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Basics Laptop Cooling Pad with 7-Cool RGB LED Lighting Effects
              |Quiet 6 Fans|Slim Chill Mat for 10 to 17-Inch Laptops Laptops
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Basics</td>
              </tr>
              <tr>
                <td>Item Weight</td>
                <td>1010 Grams</td>
              </tr>
              <tr>
                <td>Item Dimensions LxWxH</td>
                <td>41.6 x 28 x 3.6 Centimeters</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>Black</td>
              </tr>
              <tr>
                <td>Cooling Method</td>
                <td>Air</td>
              </tr>

              <tr>
                <td>Price</td>
                <td>₹1629/-</td>
              </tr>
            </p>
            <a href="#" className="btn btn-primary">
              <i class="bi bi-cart4"></i>
            </a>{" "}
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>

        {/* card4 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/Carvaan.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Carvaan1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Carvaan2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Carvaan3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Carvaan4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Saregama Carvaan Mini Hindi 2.0- Music Player with
              Bluetooth/FM/AM/AUX (Moonlight Black)
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Carvaan</td>
              </tr>
              <tr>
                <td>Model Name</td>
                <td>CARVAAN MINI</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>MOONLIGHT BLACK</td>
              </tr>
              <tr>
                <td>Speaker Type</td>
                <td>Normal</td>
              </tr>
              <tr>
                <td>Connector Type</td>
                <td>Bluetooth, USB</td>
              </tr>
              <tr>
                <td>Special Feature</td>
                <td>Auto Speaker Setup</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹2190/-</td>
              </tr>
              351 Pre-loaded evergreen songs
            </p>
            <a href="#" className="btn btn-primary">
              <i class="bi bi-cart4"></i>
            </a>{" "}
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>

        {/* flexDiv1 end */}
      </div>
    </div>
  );
};

export default Electronics;
