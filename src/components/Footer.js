import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ContactForm from './ContactForm';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '', // State for user email input
            contactMessage: '', // State for contact form message
        };
    }

    handleInputChange = (event) => {
        this.setState({ userEmail: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', this.state.userEmail);
        this.setState({ contactMessage: 'Thank you for subscribing!' });
    };

    render() {
        return (
            <footer className="footer section" id="footer">
                <div className="footer_container container grid">
                    <div>
                        <Link to='/' className="footer_logo">
                            <img src={logo} alt=""/>
                        </Link>
                        <p className="footer_description">
                            Subscribe for company updates below.
                        </p>

                        <ContactForm />
                    </div>

                    <div className="footer_content">
                        <div>
                            <h3 className="footer_title">Services</h3>

                            <ul className="footer_links">
                                <li>
                                    <Link to='/' className="footer_link">Flex Muscle</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Cardio Exercises</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Basic Yoga</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Weight Lifting</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer_title">Pricing</h3>

                            <ul className="footer_links">
                                <li>
                                    <Link to='/' className="footer_link">Basic</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Standard</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Diamond</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer_title">COMPANY</h3>

                            <ul className="footer_links">
                                <li>
                                    <Link to='/' className="footer_link">About Us</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Careers</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Customers</Link>
                                </li>
                                <li>
                                    <Link to='/' className="footer_link">Partners</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="footer_group">
                        <ul className="footer_social">
                            <Link to='/' className="footer_social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </Link>
                            <Link to='/' className="footer_social-link">
                                <i className="ri-instagram-line"></i>
                            </Link>
                            <Link to='/' className="footer_social-link">
                                <i className="ri-youtube-line"></i>
                            </Link>
                        </ul>

                        <span className="footer_copy">
                            2024 &#169; Copyright B-Fit. All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer
