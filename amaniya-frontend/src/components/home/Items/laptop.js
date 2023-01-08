import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Laptop = () => {
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
                  src={require("../../assets/acer.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/acer1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/acer2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/acer3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
            
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Acer Extensa 15 Lightweight Laptop 11th Gen
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Acer</td>
              </tr>
              <tr>
                <td>Model Name</td>
                <td>Extensa</td>
              </tr>
              <tr>
                <td>Screen Size </td>
                <td>15.6 Inches</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>Black</td>
              </tr>
              <tr>
                <td>CPU Model</td>
                <td>Core i3</td>
              </tr>
              <tr>
                <td>RAM Memory Installed Size</td>
                <td>8GB</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹32990/-</td>
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
                  src={require("../../assets/apple1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/apple2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/apple3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/apple4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
            
          </div>
          <div className="card-body">
            <h5 className="card-title">
              2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Apple</td>
              </tr>
              <tr>
                <td>Series </td>
                <td>MacBook Pro</td>
              </tr>
              <tr>
                <td>Screen Size </td>
                <td>41.05 Centimetres</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>Space Grey</td>
              </tr>
              <tr>
                <td>CPU Model</td>
                <td>Apple M1</td>
              </tr>
              <tr>
                <td>RAM Memory Installed Size</td>
                <td>16GB</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹232990/-</td>
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
                  src={require("../../assets/asus5.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/asus.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/asus1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/asus2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/asus3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
            
          </div>
          <div className="card-body">
            <h5 className="card-title">
              ASUS TUF Gaming F15 (2021), 15.6" (39.62 cms) FHD 144Hz, Intel
              Core i5
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>ASUS</td>
              </tr>
              <tr>
                <td>Model Name</td>
                <td>TUF Gaming F15 (2021)</td>
              </tr>
              <tr>
                <td>Screen Size </td>
                <td>15.6 Inches</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>Black</td>
              </tr>
              <tr>
                <td>CPU Model</td>
                <td>Core i5</td>
              </tr>
              <tr>
                <td>RAM Memory Installed Size</td>
                <td>8GB</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹57490/-</td>
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
                  src={require("../../assets/lenovo.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/lenovo1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/lenovo2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/lenovo3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/lenovo4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
           
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Lenovo ThinkBook 14S Yoga Intel Core i5 11th Gen
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Lenovo</td>
              </tr>
              <tr>
                <td>Series</td>
                <td>20WEA01CIN</td>
              </tr>
              <tr>
                <td>Screen Size </td>
                <td>14 Inches</td>
              </tr>
              <tr>
                <td>CPU Speed</td>
                <td>2.4 GHz</td>
              </tr>
              <tr>
                <td>CPU Model</td>
                <td>Intel Core i5</td>
              </tr>
              <tr>
                <td>RAM Memory Installed Size</td>
                <td>16GB</td>
              </tr>
              <tr>
                <td>Hard Disk</td>
                <td>SSD</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹104999/-</td>
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

export default Laptop;
