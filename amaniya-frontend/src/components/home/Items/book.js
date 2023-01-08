import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../home.css";
import booksImg from "../../assets/shop_.gif";

const Books = () => {
  return (
    <div className="itemsOf">
      <img src={booksImg} className="gifImg" />
      
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
                  src={require("../../assets/book1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/book2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Vahana: Vehicles of the Gods </h5>
            <p className="card-text">
              <tr>
                <td>
                  <b>Author :- </b>
                </td>
                <td>
                  <b> Stuti Gupta</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Price :- </b>
                </td>
                <td>
                  <b>₹245</b>
                </td>
              </tr>
              The book is a collection of fifteen stories - some telling us how
              gods got their vahana - or vehicles; others narrating their fun
              and adventures together.
              <br />
              These are some interesting and hilarious stories about Shiva,
              Vishnu, Brahma, Lakshmi, Durga, Ganesha, Kartikeya, Indra, among
              others.
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
                  src={require("../../assets/joker.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Batman: Killing Joke (Deluxe)</h5>
            <p className="card-text">
              <tr>
                <td>
                  <b>Author :- </b>
                </td>
                <td>
                  <b>Alan Moore</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Price :- </b>
                </td>
                <td>
                  <b>₹1199</b>
                </td>
              </tr>
              Launched with stark, THE KILLING JOKE is Alan Moore's fantastic
              reflection on the razor-thin line amongst rational sanity and
              craziness, boldness and villainy, drama and tragedy.
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
                  src={require("../../assets/joker1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Joker Hardcover – 4 November 2008</h5>
            <p>
              <tr>
                <td>
                  <b>Author :- </b>
                </td>
                <td>
                  <b>Brian Azzarello</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Price :- </b>
                </td>
                <td>
                  <b>₹869</b>
                </td>
              </tr>
              An original hardcover graphic novel that tells the story of one
              very dark night in Gotham City—from the creative team behind the
              graphic novel Lex Luthor: Man of Steel. The Joker has been
              mysteriously released from Arkham Asylum, and he's none to happy
              about what's happened to
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
                  src={require("../../assets/Mahabharata.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Mahabharata1.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Mahabharata2.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Mahabharata3.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../../assets/Mahabharata4.png")}
                  className="d-block w-100 mySlides"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Mahabharata : Indian Epic in Hindi</h5>
            <p className="card-text">
              <tr>
                <td>
                  <b>Author :- </b>
                </td>
                <td>
                  <b>Om Books Editorial Team </b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Price :- </b>
                </td>
                <td>
                  <b>₹716</b>
                </td>
              </tr>
              Traditions, wisdom and the rich history of the Indian mythology
              are retold through this enriching collection of ancient texts of
              Bhagavad Gita, Ramayana and Mahabharata.
              <br /> Indian Epic in Hindi (Illustrated Mahabharata for Children)
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

export default Books;
