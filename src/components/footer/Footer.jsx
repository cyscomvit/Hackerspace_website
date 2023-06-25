import React from 'react';
import './Footer.css';
import backwardIcon from './Vector 522.png'; // Replace with the actual path to your backward icon image
import forwardIcon from './Vector 521.png'; // Replace with the actual path to your forward icon image

const Footer = (props) => {

    return (
        <div className="container">
            <div className="nav_button">
                
                <a href={`${props.urlb}`} className="nav_backwardButton">
                
                    <img src={backwardIcon} alt="Backward Icon" className="navbar_buttonIconback" />
                
                </a>

                <a href={`${props.urlf}`} className="nav_forwardButton">
                
                    <img src={forwardIcon} alt="Forward Icon" className="navbar_buttonIconforward" />
                
                </a>

            </div>
        </div>
    )
}

export default Footer;
