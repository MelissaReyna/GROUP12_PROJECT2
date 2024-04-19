import React from "react";

class Header extends React.Component {
  render() {
    return (
      // < !-- ==================== HEADER ==================== -->
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">Home</a>
              </li>
              <li className="nav_item">
                <a href="#program" className="nav_link">Program</a>
              </li>
              <li className="nav_item">
                <a href="#choose" className="nav_link">Choose Us</a>
              </li>
              <li className="nav_item">
                <a href="#pricing" className="nav_link">Pricing</a>
              </li>

              <div className="nav_link">
                <a href="#footer" className="button nav_button">
                  Register Now
                </a>
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
