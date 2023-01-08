import React from "react";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const NewReleases = () => {
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

      {/* flex div 2 start */}

      <div className="flexDiv12">
        {/* card5 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/new3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Umbrella - UZQIC Umbrella for Men, Umberallas for Rain Big Size
              Men, Winproof Umberall Large for Man,Women,Kids,Girls,Boys - 3
              Fold with Auto Open and Close (Blue)
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand</td>
                <td>UZQIC</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Polyester</td>
              </tr>

              <tr>
                <td>Colour</td>
                <td>Blue</td>
              </tr>

              <tr>
                <td>Price</td>
                <td>₹690/-</td>
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

        {/* card6 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/new2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              uppercase Medium Check - in JFK Trolley 7100EST1RED, Dust
              Resistant Travel Bag Made of Premium Sustainable Material, 2500
              Days Warranty
            </h5>
            <p className="card-text">
              <tr>
                <td>Brand Name</td>
                <td>JFK Trolley</td>
              </tr>

              <tr>
                <td>Material</td>
                <td>Plastic,cotton</td>
              </tr>
              <tr>
                <td>Model Name</td>
                <td>Travel Bag</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹4999/-</td>
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

        {/* card7 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/new1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Toiletry Bag, Travel Kit, Toiletry Bag for Women, Travel Kit for
              Women, Travel Essentials for Women, Travel Toiletry Bag,
              Travelling Kit, Makeup Pouch
            </h5>
            <p className="card-text">
              <tr>
                <td>Colour</td>
                <td>Bluish</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Ladiosa</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>Medium</td>
              </tr>

              <tr>
                <td>Style</td>
                <td>Women Bag</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹999/-</td>
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

        {/* card8 */}
        <div className="card flexCard" style={{ width: "20rem" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../../assets/new4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              God Of War Ragnarok | Launch Edition | PS4 Game (PlayStation 4)
            </h5>
            <p className="card-text">
              <tr>
                <td>Price</td>
                <td>₹3999/-</td>
              </tr>
              Weapons of war : The Leviathan Axe, Blades of Chaos and Guardian
              Shield return alongside a host of new abilities for both Kratos
              and Atreus. As they take on gods and monsters from across the Nine
              Realms, Kratos's deadly Spartan skills will be tested.
            </p>
            <a href="#" className="btn btn-primary">
              <i class="bi bi-cart4"></i>
            </a>{" "}
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>

        {/* flexDiv2 end */}
      </div>
    </div>
  );
};

export default NewReleases;
