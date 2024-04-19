import React from 'react'

import ProgramCard from '../ProgramCard'
import programs from '../ProgramsData'

class Program extends React.Component {
    render() {
        return (
            <main className="main">
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
                            {programs.map((program, index) => (
                                <ProgramCard key={index} program={program} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Program
