import React from "react";

class Footer extends React.Component {
  render() {
    return (
      // < !-- ==================== FOOTER ==================== -->
      <footer className="footer section" id="footer">
        <div className="footer_container container grid">
          <div>
            <a href="#" className="footer_logo">
              <img src="assets/img/logo.png" alt=""/>
            </a>
            <p className="footer_description">
              Subscribe for company updates below.
            </p>

            <form action="" className="footer_form" id="contact-form">
              <input type="email" name="user_email" placeholder="Your Email" className="footer_input"
                id="contact-user"/>
                <button type="submit" className="button">
                  Subscribe
                </button>
            </form>

            <p className="footer_message" id="contact-message"></p>
          </div>

          <div className="footer_content">
            <div>
              <h3 className="footer_title">Services</h3>

              <ul className="footer_links">
                <li>
                  <a href="#" className="footer_link">Flex Muscle</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Cardio Exercises</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Basic Yoga</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Weight Lifting</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer_title">Pricing</h3>

              <ul className="footer_links">
                <li>
                  <a href="#" className="footer_link">Basic</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Standard</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Diamond</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer_title">COMPANY</h3>

              <ul className="footer_links">
                <li>
                  <a href="#" className="footer_link">About Us</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Careers</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Customers</a>
                </li>
                <li>
                  <a href="#" className="footer_link">Partners</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer_group">
            <ul className="footer_social">
              <a href="#" className="footer_social-link">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="#" className="footer_social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="footer_social-link">
                <i className="ri-youtube-line"></i>
              </a>
            </ul>

            <span className="footer_copy">
              2024 &#169; Copyright B-Fit. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;