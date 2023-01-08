import React from "react";
import Nav from "./nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <Outlet />
      <div className="homeFoot">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
