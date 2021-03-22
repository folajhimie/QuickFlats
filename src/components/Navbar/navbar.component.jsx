import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";
import Logo from "../../assets/images/logo.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      navbarOpen: false,
    };
  }

  menu = () => {
    document.getElementById("overlay").classList.toggle("overlay");
    document.getElementById("mobile-menu").classList.toggle("show");
    document.getElementById("close").classList.toggle("m-close");
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  render() {
    return (
      <div className="Navbar" id="c-nav">
        <div className="container">
          <div className="mobile m-icon" id="close" onClick={this.menu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="row pt-4">
            <div className="col-sm-2">
              <Link to="/" className="logo hide" id="logo">
                <img style={{ width: "50px" }} src={Logo} alt="logo" />
                {/* QUICKFLATS */}
              </Link>
            </div>
            <div className="col-sm-10 " id="overlay">
              <ul className="c-menu desktop" id="mobile-menu">
                <li>
                  <Link to="#" className="nav-item" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-item">
                    List a flat
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-item">
                    Find a flat
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-item">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="nav-item" to="/signIn">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
