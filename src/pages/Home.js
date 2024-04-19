import React from "react";

class Home extends React.Component {
  render() {
    return (
        // <!-- ==================== MAIN ==================== -->
        <main class="main">
            {/* <!-- ==================== HOME ==================== --> */}
            <section class="home section" id="home">
                <div class="home_container container grid">
                    <div class="home_data">
                        <h2 class="home_subtitle">Welcome to</h2>
                        <h1 class="home_title">B-Fit</h1>
                        <p class="home_description">
                            We offer a variety of fitness programs tailored to meet your needs and goals.
                        </p>
                        <a href="#program" class="button button_flex">
                            Get Started <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>
    
                    <div class="home_images">
                        <img src="assets/img/home-img.png" alt="" class="home_img"/>
    
                        <div class="home_triangle home_triangle-3"></div>
                        <div class="home_triangle home_triangle-2"></div>
                        <div class="home_triangle home_triangle-1"></div>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== LOGOS ==================== --> */}
            <section class="logos section">
                <div class="logos_container container grid">
                    <img src="assets/img/logo01.png" alt="" class="logos_img"/>
                    <img src="assets/img/logo02.png" alt="" class="logos_img"/>
                    <img src="assets/img/logo03.png" alt="" class="logos_img"/>
                    <img src="assets/img/logo04.png" alt="" class="logos_img"/>
                </div>
            </section>
    
            {/* <!-- ==================== PROGRAM ==================== --> */}
            <section class="program section" id="program">
                <div class="container">
                    <div class="section_data">
                        <h2 class="section_subtitle">Our Programs</h2>
                        <div class="section_titles">
                            <h1 class="section_title-border">Ready for</h1>
                            <h1 class="section_title">Challenges?</h1>
                        </div>
                    </div>
    
                    <div class="program_container grid">
                        <article class="program_card">
                            <div class="program_shape">
                                <img src="assets/img/program1.png" alt="" class="program_img"/>
                            </div>
                            <h3 class="program_title">Weight Loss Challenge</h3>
                            <p class="program_description">
                                A structured program aimed at helping participants lose weight through a combination of
                                cardiovascular exercise, strength training, and nutrition guidance.
                            </p>
                            <a href="#" class="program_button">
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
    
                        <article class="program_card">
                            <div class="program_shape">
                                <img src="assets/img/program2.png" alt="" class="program_img"/>
                            </div>
                            <h3 class="program_title">Muscle Building Program</h3>
                            <p class="program_description">
                                A workout plan designed to increase muscle mass and strength, incorporating resistance
                                training
                                exercises targeting major muscle groups.
                            </p>
                            <a href="#" class="program_button">
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
    
                        <article class="program_card">
                            <div class="program_shape">
                                <img src="assets/img/program3.png" alt="" class="program_img"/>
                            </div>
                            <h3 class="program_title">Yoga and Meditation Series</h3>
                            <p class="program_description">
                                A series of yoga classes and guided meditation sessions focused on stress reduction,
                                relaxation,
                                and improving overall well-being.
                            </p>
                            <a href="#" class="program_button">
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
    
                        <article class="program_card">
                            <div class="program_shape">
                                <img src="assets/img/program4.png" alt="" class="program_img"/>
                            </div>
                            <h3 class="program_title">Specialized Training Programs</h3>
                            <p class="program_description">
                                Programs tailored to specific fitness goals or interests, such as marathon training,
                                obstacle
                                course
                                preparation, or sports-specific conditioning.
                            </p>
                            <a href="#" class="program_button">
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== CHOOSE US ==================== --> */}
            <section class="choose section" id="choose">
                <div class="choose_overflow">
                    <div class="choose_container container grid">
                        <div class="choose_content">
                            <div class="section_data">
                                <h2 class="section_subtitle">Your best option</h2>
                                <div class="section_titles">
                                    <h1 class="section_title-border">Why</h1>
                                    <h1 class="section_title">Choose Us?</h1>
                                </div>
                            </div>
    
                            <p class="choose_description">
                                At B-FIT, we are dedicated to helping individuals achieve their fitness goals and lead
                                healthier, happier lives.
                            </p>
    
                            <div class="choose_data">
                                <div class="choose_group">
                                    <h3 class="choose_number">100+</h3>
                                    <p class="choose_subtitle">Total Members</p>
                                </div>
                                <div class="choose_group">
                                    <h3 class="choose_number">50+</h3>
                                    <p class="choose_subtitle">Best Trainers</p>
                                </div>
                                <div class="choose_group">
                                    <h3 class="choose_number">25+</h3>
                                    <p class="choose_subtitle">Programs</p>
                                </div>
                                <div class="choose_group">
                                    <h3 class="choose_number">60+</h3>
                                    <p class="choose_subtitle">Awards</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="choose_images">
                            <img src="assets/img/choose-img.png" alt="" class="choose_img"/>
    
                            <div class="choose_triangle choose_triangle-1"></div>
                            <div class="choose_triangle choose_triangle-2"></div>
                            <div class="choose_triangle choose_triangle-3"></div>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== PRICING ==================== --> */}
            <section class="pricing section" id="pricing">
                <div class="container">
                    <div class="section_data">
                        <h2 class="section_subtitle">Pricing</h2>
                        <div class="section_titles">
                            <h1 class="section_title-border">Our</h1>
                            <h1 class="section_title">Special Plans</h1>
                        </div>
                    </div>
    
                    <div class="pricing_container grid">
                        <article class="pricing_card">
                            <header class="pricing_header">
                                <div class="pricing_shape">
                                    <img src="assets/img/pricing1.png" alt="" class="pricing_img"/>
                                </div>
    
                                <h1 class="pricing_title">BASIC PLAN</h1>
                                <h2 class="pricing_number">$299<span>/mo</span></h2>
                            </header>
    
                            <ul class="pricing_list">
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> 3 days in a week
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> 1 bottle of protein
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line pricing_item-opacity"></i> HIIT (High-Intensity
                                    Interval Training) Workouts
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line pricing_item-opacity"></i> Muscle stretching
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line pricing_item-opacity"></i> Pilates Classes
                                </li>
                            </ul>
    
                            <a href="#" class="button button_flex pricing_button">
                                Purchase Now <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
    
                        <article class="pricing_card pricing_card-active">
                            <header class="pricing_header">
                                <div class="pricing_shape">
                                    <img src="assets/img/pricing2.png" alt="" class="pricing_img"/>
                                </div>
    
                                <h1 class="pricing_title">STANDARD PLAN</h1>
                                <h2 class="pricing_number">$499<span>/mo</span></h2>
                            </header>
    
                            <ul class="pricing_list">
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> 5 days in a week
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> 1 bottle of protein
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> HIIT (High-Intensity Interval Training) Workouts
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line pricing_item-opacity"></i> Muscle stretching
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line pricing_item-opacity"></i> Pilates Classes
                                </li>
                            </ul>
    
                            <a href="#" class="button button_flex pricing_button">
                                Order Now <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
    
                        <article class="pricing_card">
                            <header class="pricing_header">
                                <div class="pricing_shape">
                                    <img src="assets/img/pricing3.png" alt="" class="pricing_img"/>
                                </div>
    
                                <h1 class="pricing_title">DIAMOND PACKAGE</h1>
                                <h2 class="pricing_number">$999<span>/mo</span></h2>
                            </header>
    
                            <ul class="pricing_list">
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> 7 days in a week
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> 1 bottle of protein
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> HIIT (High-Intensity Interval Training) Workouts
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> Muscle stretching
                                </li>
                                <li class="pricing_item">
                                    <i class="ri-checkbox-circle-line"></i> Pilates Classes
                                </li>
                            </ul>
    
                            <a href="#" class="button button_flex pricing_button">
                                Get Started <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>
                    </div>
                </div>
            </section>
    
            {/* <!-- ==================== CALCULATE ==================== --> */}
            <section class="calculate section">
                <div class="calculate_container container grid">
                    <div class="calculate_content">
                        <div class="section_titles">
                            <h1 class="section_title-border">Calculate</h1>
                            <h1 class="section_title">your BMI</h1>
                        </div>
                        <p class="calculate_description">
                            Estimate if your body weight is healthy or if you are underweight, overweight, or obese.
                        </p>
    
                        <form action="#" class="calculate_form" id="calculate-form">
                            <div class="calculate_box">
                                <input type="number" placeholder="Height" class="calculate_input" id="calculate-cm"/>
                                <label for="" class="calculate_label">cm</label>
                            </div>
                            <div class="calculate_box">
                                <input type="number" placeholder="Weight" class="calculate_input" id="calculate-kg"/>
                                <label for="" class="calculate_label">kg</label>
                            </div>
    
                            <button type="submit" class="button button_flex">
                                Calculate Now <i class="ri-arrow-right-line"></i>
                            </button>
                        </form>
    
                        <p class="calculate_message" id="calculate-message"></p>
                    </div>
    
                    <img src="assets/img/calculate-img.png" alt="" class="calculate_img"/>
                </div>
            </section>
        </main>
    );
  }
}

export default Home;
