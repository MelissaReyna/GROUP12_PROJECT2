import React from "react"
import chooseImg from "../../img/choose-img.png";

class Choose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalMembers: 100,
            trainers: 50,
            programs: 25,
            awards: 60
        };
    }

    render() {
        const { totalMembers, trainers, programs, awards } = this.state;

        return (
            <main className="main">
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
                                    At B-FIT, we are dedicated to helping individuals achieve
                                    their fitness goals and lead healthier, happier lives.
                                </p>

                                <div className="choose_data">
                                    <div className="choose_group">
                                        <h3 className="choose_number">{totalMembers}+</h3>
                                        <p className="choose_subtitle">Total Members</p>
                                    </div>
                                    <div className="choose_group">
                                        <h3 className="choose_number">{trainers}+</h3>
                                        <p className="choose_subtitle">Best Trainers</p>
                                    </div>
                                    <div className="choose_group">
                                        <h3 className="choose_number">{programs}+</h3>
                                        <p className="choose_subtitle">Programs</p>
                                    </div>
                                    <div className="choose_group">
                                        <h3 className="choose_number">{awards}+</h3>
                                        <p className="choose_subtitle">Awards</p>
                                    </div>
                                </div>
                            </div>

                            <div className="choose_images">
                                <img src={chooseImg} alt="" className="choose_img" />

                                <div className="choose_triangle choose_triangle-1"></div>
                                <div className="choose_triangle choose_triangle-2"></div>
                                <div className="choose_triangle choose_triangle-3"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Choose
