import React from "react";

const Kitchen = () => {
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
                  src={require("../../assets/bad.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/bad1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/bad2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/bad3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              The Sleep Company SmartGRID Luxe Mattress 8 inch Soft King Size
            </h5>
            <p className="card-text">
              <tr>
                <td>Size</td>
                <td>8 Inch</td>
              </tr>
              <tr>
                <td>Special Feature</td>
                <td>Plush, Air vent, Hypoallergenic</td>
              </tr>
              <tr>
                <td>Item Firmness Description</td>
                <td>Plush</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>The Sleep Company </td>
              </tr>
              <tr>
                <td>Model Name</td>
                <td>SmartGRID Luxe 8 Inch</td>
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
                  src={require("../../assets/sofa.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/sofa1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/sofa2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/sofa3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Amaniya Brand - Solimo Alen 6 Seater Fabric RHS L Shape Sofa Set
              (Blue)
            </h5>
            <p className="card-text">
              <tr>
                <td>Colour</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Amaniya Brand - Solimo</td>
              </tr>
              <tr>
                <td>Special Feature</td>
                <td>Space Saving</td>
              </tr>
              <tr>
                <td>Room Type</td>
                <td>Living Room</td>
              </tr>

              <tr>
                <td>Seating Capacity</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹34999/-</td>
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
                  src={require("../../assets/daining.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/daining1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/daining2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/daining3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/daining4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Amaniya Brand - Solimo Alen 6 Seater Fabric RHS L Shape Sofa Set
              (Blue)
            </h5>
            <p className="card-text">
              <tr>
                <td>Colour</td>
                <td>Honey Finish (4 Seater)</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Furinno</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>4 Seater</td>
              </tr>
              <tr>
                <td>Item Weight</td>
                <td>82000 Grams</td>
              </tr>
              <br />
              <tr>
                <td>Style</td>
                <td>Contemporary</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹15999/-</td>
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
                  src={require("../../assets/water.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/water1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/water2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/water3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              AO Smith RO |100%RO+ SCMT (Silver Charged Membrane Tech.)|
              suitable for more than 200 TDS
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>AO Smith</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>Black</td>
              </tr>
              <tr>
                <td>Special Feature</td>
                <td>500-1999ppm, RO</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Plastic</td>
              </tr>

              <tr>
                <td>Capacity</td>
                <td>10 litres</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹21999/-</td>
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

export default Kitchen;
