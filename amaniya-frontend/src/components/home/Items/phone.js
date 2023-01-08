import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../home.css";
// import "./javascript";

const Mobile = () => {
  return (
    <div className="itemsOf">
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
                  src={require("../../assets/iphone.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/iphone1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/iphone2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/iphone3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/iphone4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Apple iPhone 13 (128GB)</h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Apple</td>
              </tr>
              <tr>
                <td>Model Name</td>
                <td>IPhone</td>
              </tr>
              <tr>
                <td>Network Service Provider</td>
                <td>Unlocked for All Carriers</td>
              </tr>
              <tr>
                <td>Operating System</td>
                <td>IOS 14</td>
              </tr>
              <tr>
                <td>Cellular Technology</td>
                <td>5G</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹67000/-</td>
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
                  src={require("../../assets/lava.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/lava1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/lava2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Lava Agni 5G (8GB RAM/128 GB ROM)</h5>
            <p className="card-text">
              <tr>
                <td>Model Name</td>
                <td>Lava AGNI 5G</td>
              </tr>
              <tr>
                <td>Network Service Provider</td>
                <td>Unlocked for All Carriers</td>
              </tr>
              <tr>
                <td>Operating System</td>
                <td> Stock Android 11</td>
              </tr>
              <tr>
                <td>Cellular Technology</td>
                <td>5G</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹13499/-</td>
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
                  src={require("../../assets/OPPO.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OPPO1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OPPO2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OPPO3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OPPO4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              OPPO A15s (Rainbow Silver, 64GB Storage)
            </h5>
            <p className="card-text">
              <tr>
                <td>Model Name</td>
                <td>OPPO A15s</td>
              </tr>
              <tr>
                <td>Network Service Provider</td>
                <td>Unlocked for All Carriers</td>
              </tr>
              <tr>
                <td>Operating System</td>
                <td>Android 10.0</td>
              </tr>
              <tr>
                <td>Cellular Technology</td>
                <td>4G</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹14999/-</td>
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
                  src={require("../../assets/OnePlus.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OnePlus2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OnePlus3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/OnePlus4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              OnePlus Nord CE 2(8GB RAM, 128GB Storage)
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand Name</td>
                <td>OnePlus</td>
              </tr>
              <tr>
                <td>Network Service Provider</td>
                <td>Unlocked for All Carriers</td>
              </tr>
              <tr>
                <td>Operating System</td>
                <td>OxygenOS</td>
              </tr>
              <tr>
                <td>Cellular Technology</td>
                <td>5G, 4G LTE</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹24999/-</td>
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

        {/* flexDiv1 end */}
      </div>
    </div>
  );
};

export default Mobile;
