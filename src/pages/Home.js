import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
        // <!-- ==================== MAIN ==================== -->
        <main className="main">
            {/* <!-- ==================== HOME ==================== --> */}
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_data">
                        <h2 className="home_subtitle">Welcome to</h2>
                        <h1 className="home_title">B-Fit</h1>
                        <p className="home_description">
                            We offer a variety of fitness programs tailored to meet your needs and goals.
                        </p>
                        <Link to='/' className="button button_flex">
                            Get Started <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>
    
                    <div className="home_images">
                        <img src="assets/img/home-img.png" alt="" className="home_img"/>
    
                        <div className="home_triangle home_triangle-3"></div>
                        <div className="home_triangle home_triangle-2"></div>
                        <div className="home_triangle home_triangle-1"></div>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== LOGOS ==================== --> */}
            <section className="logos section">
                <div className="logos_container container grid">
                    <img src="assets/img/logo01.png" alt="" className="logos_img"/>
                    <img src="assets/img/logo02.png" alt="" className="logos_img"/>
                    <img src="assets/img/logo03.png" alt="" className="logos_img"/>
                    <img src="assets/img/logo04.png" alt="" className="logos_img"/>
                </div>
            </section>
    
            {/* <!-- ==================== PROGRAM ==================== --> */}
            <section className="program section" id="program">
                <div className="container">
                    <div className="section_data">
                        <h2 className="section_subtitle">Our Programs</h2>
                        <div className="section_titles">
                            <h1 className="section_title-border">Ready for</h1>
                            <h1 className="section_title">Challenges?</h1>
                        </div>
                    </div>
    
                    <div className="program_container grid">
                        <article className="program_card">
                            <div className="program_shape">
                                <img src="assets/img/program1.png" alt="" className="program_img"/>
                            </div>
                            <h3 className="program_title">Weight Loss Challenge</h3>
                            <p className="program_description">
                                A structured program aimed at helping participants lose weight through a combination of
                                cardiovascular exercise, strength training, and nutrition guidance.
                            </p>
                            <Link to='/' className="program_button">
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
    
                        <article className="program_card">
                            <div className="program_shape">
                                <img src="assets/img/program2.png" alt="" className="program_img"/>
                            </div>
                            <h3 className="program_title">Muscle Building Program</h3>
                            <p className="program_description">
                                A workout plan designed to increase muscle mass and strength, incorporating resistance
                                training
                                exercises targeting major muscle groups.
                            </p>
                            <Link to='/' className="program_button">
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
    
                        <article className="program_card">
                            <div className="program_shape">
                                <img src="assets/img/program3.png" alt="" className="program_img"/>
                            </div>
                            <h3 className="program_title">Yoga and Meditation Series</h3>
                            <p className="program_description">
                                A series of yoga classNamees and guided meditation sessions focused on stress reduction,
                                relaxation,
                                and improving overall well-being.
                            </p>
                            <Link to='/' className="program_button">
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
    
                        <article className="program_card">
                            <div className="program_shape">
                                <img src="assets/img/program4.png" alt="" className="program_img"/>
                            </div>
                            <h3 className="program_title">Specialized Training Programs</h3>
                            <p className="program_description">
                                Programs tailored to specific fitness goals or interests, such as marathon training,
                                obstacle
                                course
                                preparation, or sports-specific conditioning.
                            </p>
                            <Link to='/' className="program_button">
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== CHOOSE US ==================== --> */}
            <section className="choose section" id="choose">
                <div className="choose_overflow">
                    <div className="choose_container container grid">
                        <div className="choose_content">
                            <div className="section_data">
                                <h2 className="section_subtitle">Your best option</h2>
                                <div className="section_titles">
                                    <h1 className="section_title-border">Why</h1>
                                    <h1 className="section_title">Choose Us?</h1>
                                </div>
                            </div>
    
                            <p className="choose_description">
                                At B-FIT, we are dedicated to helping individuals achieve their fitness goals and lead
                                healthier, happier lives.
                            </p>
    
                            <div className="choose_data">
                                <div className="choose_group">
                                    <h3 className="choose_number">100+</h3>
                                    <p className="choose_subtitle">Total Members</p>
                                </div>
                                <div className="choose_group">
                                    <h3 className="choose_number">50+</h3>
                                    <p className="choose_subtitle">Best Trainers</p>
                                </div>
                                <div className="choose_group">
                                    <h3 className="choose_number">25+</h3>
                                    <p className="choose_subtitle">Programs</p>
                                </div>
                                <div className="choose_group">
                                    <h3 className="choose_number">60+</h3>
                                    <p className="choose_subtitle">Awards</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="choose_images">
                            <img src="assets/img/choose-img.png" alt="" className="choose_img"/>
    
                            <div className="choose_triangle choose_triangle-1"></div>
                            <div className="choose_triangle choose_triangle-2"></div>
                            <div className="choose_triangle choose_triangle-3"></div>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== PRICING ==================== --> */}
            <section className="pricing section" id="pricing">
                <div className="container">
                    <div className="section_data">
                        <h2 className="section_subtitle">Pricing</h2>
                        <div className="section_titles">
                            <h1 className="section_title-border">Our</h1>
                            <h1 className="section_title">Special Plans</h1>
                        </div>
                    </div>
    
                    <div className="pricing_container grid">
                        <article className="pricing_card">
                            <header className="pricing_header">
                                <div className="pricing_shape">
                                    <img src="assets/img/pricing1.png" alt="" className="pricing_img"/>
                                </div>
    
                                <h1 className="pricing_title">BASIC PLAN</h1>
                                <h2 className="pricing_number">$299<span>/mo</span></h2>
                            </header>
    
                            <ul className="pricing_list">
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> 3 days in a week
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> 1 bottle of protein
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line pricing_item-opacity"></i> HIIT (High-Intensity
                                    Interval Training) Workouts
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line pricing_item-opacity"></i> Muscle stretching
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line pricing_item-opacity"></i> Pilates classNamees
                                </li>
                            </ul>
    
                            <Link to='/' className="button button_flex pricing_button">
                                Purchase Now <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
    
                        <article className="pricing_card pricing_card-active">
                            <header className="pricing_header">
                                <div className="pricing_shape">
                                    <img src="assets/img/pricing2.png" alt="" className="pricing_img"/>
                                </div>
    
                                <h1 className="pricing_title">STANDARD PLAN</h1>
                                <h2 className="pricing_number">$499<span>/mo</span></h2>
                            </header>
    
                            <ul className="pricing_list">
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> 5 days in a week
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> 1 bottle of protein
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> HIIT (High-Intensity Interval Training) Workouts
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line pricing_item-opacity"></i> Muscle stretching
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line pricing_item-opacity"></i> Pilates classNamees
                                </li>
                            </ul>
    
                            <Link to='/' className="button button_flex pricing_button">
                                Order Now <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
    
                        <article className="pricing_card">
                            <header className="pricing_header">
                                <div className="pricing_shape">
                                    <img src="assets/img/pricing3.png" alt="" className="pricing_img"/>
                                </div>
    
                                <h1 className="pricing_title">DIAMOND PACKAGE</h1>
                                <h2 className="pricing_number">$999<span>/mo</span></h2>
                            </header>
    
                            <ul className="pricing_list">
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> 7 days in a week
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> 1 bottle of protein
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> HIIT (High-Intensity Interval Training) Workouts
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> Muscle stretching
                                </li>
                                <li className="pricing_item">
                                    <i className="ri-checkbox-circle-line"></i> Pilates classNamees
                                </li>
                            </ul>
    
                            <Link to='/' className="button button_flex pricing_button">
                                Get Started <i className="ri-arrow-right-line"></i>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== CALCULATE ==================== --> */}
            <section className="calculate section">
                <div className="calculate_container container grid">
                    <div className="calculate_content">
                        <div className="section_titles">
                            <h1 className="section_title-border">Calculate</h1>
                            <h1 className="section_title">your BMI</h1>
                        </div>
                        <p className="calculate_description">
                            Estimate if your body weight is healthy or if you are underweight, overweight, or obese.
                        </p>
    
                        <form action="#" className="calculate_form" id="calculate-form">
                            <div className="calculate_box">
                                <input type="number" placeholder="Height" className="calculate_input" id="calculate-cm"/>
                                <label for="" className="calculate_label">cm</label>
                            </div>
                            <div className="calculate_box">
                                <input type="number" placeholder="Weight" className="calculate_input" id="calculate-kg"/>
                                <label for="" className="calculate_label">kg</label>
                            </div>
    
                            <button type="submit" className="button button_flex">
                                Calculate Now <i className="ri-arrow-right-line"></i>
                            </button>
                        </form>
    
                        <p className="calculate_message" id="calculate-message"></p>
                    </div>
    
                    <img src="assets/img/calculate-img.png" alt="" className="calculate_img"/>
                </div>
            </section>
        </main>
    );
  }
}

export default Home;
