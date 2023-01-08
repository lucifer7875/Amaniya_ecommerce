import React from "react";

const Fashion = () => {
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
                  src={require("../../assets/ear.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/ear1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/ear2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              10K Yellow Gold Green Tsavorite Garnet Gemstone And Diamond
            </h5>
            <p className="card-text">
              <tr>
                <td>Back Finding</td>
                <td>Hinge with notched post</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Jewelry Bliss</td>
              </tr>
              <tr>
                <td>Stone</td>
                <td>Tsavorite</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Gemstone</td>
              </tr>
              <tr>
                <td>Metal Stamp</td>
                <td>10K</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹121389/-</td>
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
                  src={require("../../assets/Sneaker.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Sneaker1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Sneaker2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Sneaker3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Skechers Men's Bounder-mirkle</h5>
            <p className="card-text">
              <tr>
                <td>Closure</td>
                <td>Pull On</td>
              </tr>
              <tr>
                <td>Fit Type</td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>Shoe Width</td>
                <td> Medium</td>
              </tr>
              <tr>
                <td>Outer Material</td>
                <td>Synthetic</td>
              </tr>
              <tr>
                <td>Closure Type</td>
                <td>Slip On</td>
              </tr>

              <tr>
                <td>Country of Origin</td>
                <td>China, Viet Nam, Cambodia</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹2989/-</td>
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
                  src={require("../../assets/Skybags.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Skybags1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Skybags2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Skybags3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Skybags4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Skybags Trooper 55 Cms Polycarbonate Blue Hardsided
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>Skybags</td>
              </tr>
              <tr>
                <td>Casing</td>
                <td>Hard</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Blue & White</td>
              </tr>
              <tr>
                <td>Outer Material</td>
                <td>Polycarbonate</td>
              </tr>
              <tr>
                <td>Capacity</td>
                <td>28 liters</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>2360 grams</td>
              </tr>
              <tr>
                <td>Lock Type</td>
                <td>Number Lock</td>
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
                  src={require("../../assets/Titan.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Titan1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Titan2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Titan3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Titan Neo Analog Blue Dial Men's</h5>
            <p className="card-text">
              <tr>
                <td>Brand Name</td>
                <td>Titan</td>
              </tr>
              <tr>
                <td>Dial Color</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Case Shape</td>
                <td>Round</td>
              </tr>
              <tr>
                <td>Dial Glass Material</td>
                <td>Mineral</td>
              </tr>
              <tr>
                <td>Band Color</td>
                <td>Brown</td>
              </tr>
              <tr>
                <td>Band Material</td>
                <td>Leather</td>
              </tr>
              <tr>
                <td>Movement Type</td>
                <td>Quartz</td>
              </tr>
              <tr>
                <td>Display Type</td>
                <td>Analog</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹5595/-</td>
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

export default Fashion;
