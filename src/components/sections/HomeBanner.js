import React from 'react'
import homeImg from "../../img/home-img.png";
import { Link } from 'react-router-dom';

class HomeBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome to',
            subtitle: 'B-Fit'
        };
    }

    render() {
        // Accessing state and props
        const { title } = this.state;
        const { subtitle } = this.state;

        return (
            <main className="main">
                {/* <!-- ==================== HOME ==================== --> */}
                <section className="home section" id="home">
                    <div className="home_container container grid">
                        <div className="home_data">
                            <h2 className="home_subtitle">{subtitle}</h2>
                            <h1 className="home_title">{title}</h1>
                            <p className="home_description">
                                We offer a variety of fitness programs tailored to meet your
                                needs and goals.
                            </p>
                            <Link to="/" className="button button_flex">
                                Get Started <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>

                        <div className="home_images">
                            <img src={homeImg} alt="" className="home_img" />

                            <div className="home_triangle home_triangle-3"></div>
                            <div className="home_triangle home_triangle-2"></div>
                            <div className="home_triangle home_triangle-1"></div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default HomeBanner
