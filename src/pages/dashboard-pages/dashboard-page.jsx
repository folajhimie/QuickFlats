import React from "react";
import "./dashboard-page.styles.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container mt-5">
      <div className="container">
        <h4>Hello, Tamilore</h4>
        <div className="row mt-4">
          <div className="col-sm-4 card-box">
            <p>Your next payment date is</p>
            <p>xxxx</p>
          </div>
          <div className="col-sm-4 card-box">
            <p>Your requests</p>
            <p>Accepted: 0, Pending: 0</p>
          </div>
          <div className="col-sm-4 card-box">
            <p>Your listings</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
