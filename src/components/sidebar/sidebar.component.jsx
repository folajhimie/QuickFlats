import React from "react";
import "./sidebar.styles.css";
import { Link } from "react-router-dom";
import User from "../../assets/images/tami.jpg";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-content">
          <div className="user-profile">
            <img src={User} alt="avatar" className="avatar" />
            <p className="username mt-3">Zaid Tamilore</p>
          </div>

          <div className="sidebar-nav mt-5">
            <ul className="list-unstyled">
              <li className="sidebar-nav-item">
                <Link>Dashboard</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link>Requests</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link>Flat listings</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link>Payments</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link>Messages</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
