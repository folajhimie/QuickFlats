import React from "react";
import "./carousel.styles.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Lekki from "../../assets/images/lagos.jfif";
import Yaba from "../../assets/images/yaba.jpg";
import VI from "../../assets/images/vi.png";
import Ikeja from "../../assets/images/ikeja.jpg";

const Carousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      loop={true}
      margin={10}
      nav
      items={2}
      center={true}
      style={{ marginTop: "180px" }}
      autoplay={true}
      autoplayTimeout={2000}
    >
      <div className="item">
        <Link to="#">
          <div
            className="carousel-card"
            style={{ backgroundImage: `url(${Lekki})` }}
          >
            <div className="carousel-card-overlay">
              <h3 className="text-capitalize carousel-title">Lekki</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="item">
        <Link to="#">
          <div
            className="carousel-card"
            style={{ backgroundImage: `url(${Yaba})` }}
          >
            <div className="carousel-card-overlay">
              <h3 className="text-capitalize carousel-title">Yaba</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="item">
        <Link to="#">
          <div
            className="carousel-card"
            style={{ backgroundImage: `url(${VI})` }}
          >
            <div className="carousel-card-overlay">
              <h3 className="text-capitalize carousel-title">
                Victoria Island
              </h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="item">
        <Link to="#">
          <div
            className="carousel-card"
            style={{ backgroundImage: `url(${Ikeja})` }}
          >
            <div className="carousel-card-overlay">
              <h3 className="text-capitalize carousel-title">Ikeja</h3>
            </div>
          </div>
        </Link>
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
