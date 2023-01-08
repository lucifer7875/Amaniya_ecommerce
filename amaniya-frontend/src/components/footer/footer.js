import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-2 item">
                <h3>My Account</h3>
                <ul>
                  <li>
                    <a href="#">Portfolio Tool</a>
                  </li>
                  <li>
                    <a href="#">Market Alerts</a>
                  </li>
                  <li>
                    <a href="#">Price Alerts</a>
                  </li>
                  <li>
                    <a href="#">Product Reviews</a>
                  </li>
                  <li>
                    <a href="#">Account Settings</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 item">
                <h3>Customer Care</h3>
                <ul>
                  <li>
                    <a href="#">Where is my order?</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Shipping & Delivery</a>
                  </li>
                  <li>
                    <a href="#">Return & Exchange</a>
                  </li>
                  <li>
                    <a href="#">Payment FAQs</a>
                  </li>
                  <li>
                    <a href="#">State SalesTex information</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 item text">
                <img
                  src={require("../assets/amaniya34.png")}
                  className="footerAmniyaLogo"
                />
              </div>
              <div className="col-md-3 item">
                <p className="footerItemName"> Supported Payment System </p>
                <div className="paymentDivFlex">
                  <img
                    src={require("../assets/visa-logo.com.png")}
                    className="paymentLogo Visa"
                  />

                  <img
                    src={require("../assets/paypal.png")}
                    className="paymentLogo Visa"
                  />
                  <img
                    src={require("../assets/masterpass.png")}
                    className="paymentLogo Visa"
                    style={{ backgroundColor: "white" }}
                  />
                  <img
                    src={require("../assets/american.png")}
                    className="paymentLogo Visa"
                  />
                  <img
                    src={require("../assets/gpay.png")}
                    className="paymentLogo Visa"
                  />
                  <img
                    src={require("../assets/ppay.png")}
                    className="paymentLogo Visa"
                  />
                </div>
              </div>
              <div className="col item social">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
            <p className="copyright">amaniya.com &copy; 2022</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
