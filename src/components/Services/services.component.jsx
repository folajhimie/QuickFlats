import React from "react";
import Wave from "../../assets/images/wave.svg";
import CustomButton from "../button/button.component";
import "./services.styles.css";

const Services = () => {
  return (
    <div className="services-section">
      <img
        src={Wave}
        alt="wave svg"
        style={{ width: "100%" }}
        className="desktop"
      />

      <div className="container">
        <h3 className="services-title">Our Services</h3>
        <p>Join our community of quick flats users</p>

        <div className="row mt-4">
          <div className="col-sm-6">
            <h5 className="services-heading">Need a flat?</h5>
            <p className="services-text">
              Looking for flexible, uniquely designed, fit for purpose, plug &
              play spaces where you can pay monthly, quarterly or however you
              want? The magic of Muster means you pay less as a subscriber than
              anywhere else for an even better experience. Welcome home!
            </p>
            <CustomButton label="Find flat" size="80px" invertedButton />
          </div>
          <div className="col-sm-6">
            <h5 className="services-heading">List a flat</h5>
            <p className="services-text">
              Looking for flexible, uniquely designed, fit for purpose, plug &
              play spaces where you can pay monthly, quarterly or however you
              want? The magic of Muster means you pay less as a subscriber than
              anywhere else for an even better experience. Welcome home!
            </p>
            <CustomButton label="List flat" size="80px" invertedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
