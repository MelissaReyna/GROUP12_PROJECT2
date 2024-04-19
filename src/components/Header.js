import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      // < !-- ==================== HEADER ==================== -->
      <header className="header" id="header">
        <nav className="nav container">
          <Link to='/' className="nav_logo">
            <img src="assets/img/logo.png" alt="" />
          </Link>

          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list">
              <li className="nav_item">
                <Link to='/' className="nav_link">
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link to='/' className="nav_link">
                  Program
                </Link>
              </li>
              <li className="nav_item">
                <Link to='/' className="nav_link">
                  Choose Us
                </Link>
              </li>
              <li className="nav_item">
                <Link to='/' className="nav_link">
                  Pricing
                </Link>
              </li>

              <div className="nav_link">
                <Link to='' className="button nav_button">
                  Register Now
                </Link>
              </div>
            </ul>

            {/* <!-- Close button --> */}
            <div className="nav_close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          {/* <!-- Toggle button --> */}
          <div className="nav_toggle" id="nav-toggle">
            <i className="ri-menu-3-line"></i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
