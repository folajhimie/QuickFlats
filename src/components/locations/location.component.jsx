import React from "react";
import CustomButton from "../button/button.component";
import Carousel from "../carousel/carousel.component";
import "./location.styles.css";

const Locations = () => {
  return (
    <div className="locations-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="location-intro">
              <h3 className="location-title animate_animated animate_bounce ">
                Top-rated Locations
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                sequi. Reprehenderit tempora aperiam odio voluptates dicta
                cumque esse fugit similique. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. A veniam tempora ea modi ipsam
                repellat consequatur minus eius reiciendis excepturi.
              </p>
              <CustomButton label="Search locations" size="250px" />
            </div>
          </div>
          <div className="col-sm-6">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
