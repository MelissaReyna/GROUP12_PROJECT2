import React, { useState } from "react";
import calculateImg from "../../img/calculate-img.png";

function Calculate() {
    const [cm, setCm] = useState('');
    const [kg, setKg] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cm === '' || kg === '') {
            setMessage('Please, fill all the fields*');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        } else {
            const heightInMeters = cm / 100;
            const bmi = Math.round(kg / (heightInMeters * heightInMeters));

            let status;
            if (bmi < 18.5) {
                status = 'underweight';
            } else if (bmi < 25) {
                status = 'normal';
            } else {
                status = 'overweight';
            }

            setMessage(`Your BMI is ${bmi}, is ${status}`);
            setTimeout(() => {
                setMessage('');
            }, 4000);

            setCm('');
            setKg('');
        }
    };

    return (
        <main className="main">
            {/* <!-- ==================== CALCULATE ==================== --> */}
            <section className="calculate section">
                <div className="calculate_container container grid">
                    <div className="calculate_content">
                        <div className="section_titles">
                            <h1 className="section_title-border">Calculate</h1>
                            <h1 className="section_title">your BMI</h1>
                        </div>
                        <p className="calculate_description">
                            Estimate if your body weight is healthy or if you are
                            underweight, overweight, or obese.
                        </p>

                        <form onSubmit={handleSubmit} className="calculate_form" id="calculate-form">
                            <div className="calculate_box">
                                <input
                                    type="number"
                                    placeholder="Height"
                                    className="calculate_input"
                                    id="calculate-cm"
                                    value={cm}
                                    onChange={(e) => setCm(e.target.value)}
                                />
                                <label htmlFor="calculate-cm" className="calculate_label">
                                    cm
                                </label>
                            </div>
                            <div className="calculate_box">
                                <input
                                    type="number"
                                    placeholder="Weight"
                                    className="calculate_input"
                                    id="calculate-kg"
                                    value={kg}
                                    onChange={(e) => setKg(e.target.value)}
                                />
                                <label htmlFor="calculate-kg" className="calculate_label">
                                    kg
                                </label>
                            </div>

                            <button type="submit" className="button button_flex">
                                Calculate Now <i className="ri-arrow-right-line"></i>
                            </button>
                        </form>

                        <p className="calculate_message" id="calculate-message">
                            {message}
                        </p>
                    </div>
                    <img src={calculateImg} alt="" className="calculate_img" />
                </div>
            </section>
        </main>
    );
}

export default Calculate;















