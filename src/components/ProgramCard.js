import React from 'react';
import { Link } from 'react-router-dom';

class ProgramCard extends React.Component {
    render() {
        const { program } = this.props;
        return (
            <article className="program_card">
                <div className="program_shape">
                    <img src={program.imgSrc} alt="" className="program_img" />
                </div>
                <h3 className="program_title">{program.title}</h3>
                <p className="program_description">{program.description}</p>
                <Link to="/" className="program_button">
                    <i className="ri-arrow-right-line"></i>
                </Link>
            </article>
        );
    }
}

export default ProgramCard;
