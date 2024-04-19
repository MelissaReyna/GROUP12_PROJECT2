import React from 'react'
import logo01 from "../../img/logo01.png";
import logo02 from "../../img/logo02.png";
import logo03 from "../../img/logo03.png";
import logo04 from "../../img/logo04.png";

class Logos extends React.Component {
    render() {
        return (
            <main className="main">
                {/* <!-- ==================== LOGOS ==================== --> */}
                < section className="logos section" >
                    <div className="logos_container container grid">
                        <img src={logo01} alt="" className="logos_img" />
                        <img src={logo02} alt="" className="logos_img" />
                        <img src={logo03} alt="" className="logos_img" />
                        <img src={logo04} alt="" className="logos_img" />
                    </div>
                </section >
            </main>
        )
    }
}

export default Logos
