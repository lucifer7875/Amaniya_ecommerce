import React from "react";
import Navigationbar from "./navbar";
import Content from "./content";
import AppBar from "./appbar";
import Footer from "../footer/footer";
import "./index.css";
import backGroundVd from "../assets/animation1.mp4";

const index = () => {
  return (
    <div>
      <div>
        <video
          src={backGroundVd}
          autoPlay
          loop
          muted
          style={{ position: "fixed", width: "100%" }}
        ></video>
      </div>

      <div className="PageContent">
        {/* navbar */}
        <Navigationbar />

        {/* items */}
        <AppBar />

        {/* content */}
        <Content />

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};
export default index;
