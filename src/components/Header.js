import React from "react";

class Header extends React.Component {
  render() {
    return (
      // < !-- ==================== HEADER ==================== -->
      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav_logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div class="nav_menu" id="nav-menu">
            <ul class="nav_list">
              <li class="nav_item">
                <a href="#home" class="nav_link">Home</a>
              </li>
              <li class="nav_item">
                <a href="#program" class="nav_link">Program</a>
              </li>
              <li class="nav_item">
                <a href="#choose" class="nav_link">Choose Us</a>
              </li>
              <li class="nav_item">
                <a href="#pricing" class="nav_link">Pricing</a>
              </li>

              <div class="nav_link">
                <a href="#footer" class="button nav_button">
                  Register Now
                </a>
              </div>
            </ul>

            {/* <!-- Close button --> */}
            <div class="nav_close" id="nav-close">
              <i class="ri-close-line"></i>
            </div>
          </div>

          {/* <!-- Toggle button --> */}
          <div class="nav_toggle" id="nav-toggle">
            <i class="ri-menu-3-line"></i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
