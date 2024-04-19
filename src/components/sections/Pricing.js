import React from "react"

import PricingCard from "../PricingCard";
import plans from "../PlansData";

class Pricing extends React.Component {
    render() {
        return (
            <main className="main">
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
                            {/* Render pricing cards using state */}
                            {plans.map((plan, index) => (
                                <PricingCard key={index} plan={plan} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Pricing
