import React from "react";
import "./index.css";

const AppBar = () => {
  return (
    <div className="barContent">
      <span className="all tab">All</span>
      <span className="mobile tab">Mobiles</span>
      <span className="laptop tab">Laptop</span>
      <span className="Kitchen&home tab">Kitchen&Home</span>
      <span className="fashion tab">Fashion</span>
      <span className="books tab">Books</span>
      <span className="elec tab">Electronics</span>
      <span className="today's deal tab">Todays's Deals</span>
      <span className="releases tab">New Releases</span>
    </div>
  );
};

export default AppBar;
