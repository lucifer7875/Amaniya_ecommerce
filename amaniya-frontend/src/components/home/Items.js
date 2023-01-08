import React from "react";
import Mobile from "./Items/phone";
import Laptop from "./Items/laptop";
import Kitchen from "./Items/Kitchen";
import Fashion from "./Items/Fashion";
import Books from "./Items/book";
import Electronics from "./Items/electronics";
import NewReleases from "./Items/newReleases";

const Items = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../assets/offer.png")}
                class="d-block w-100 Slider"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/offer1.png")}
                class="d-block w-100 Slider"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/offer2.png")}
                class="d-block w-100 Slider"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/offer3.png")}
                class="d-block w-100 Slider"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/offer4.png")}
                class="d-block w-100 Slider"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="itemsOfAll">
          <Mobile />
          <Laptop />
          <Kitchen />
          <Fashion />
          <Books />
          <Electronics />
          <NewReleases />
        </div>
      </div>
    </div>
  );
};
export default Items;
