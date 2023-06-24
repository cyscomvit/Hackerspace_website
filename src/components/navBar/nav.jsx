import React from 'react';
import './navbar.css'; 
import backwardIcon from './Vector 522.png'; // Replace with the actual path to your backward icon image
import forwardIcon from './Vector 521.png'; // Replace with the actual path to your forward icon image

const Navbar = (props) => {
  // const { currentPage } = props;

  return (
    <div>
    <div className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo">CY</span>
        <span className="navbar__slogo">S</span>
        <span className="navbar__logo">COM</span>
      </div>
      <div className="navbar__right">
        <span className={`navbar__index ${props.currentPage ? 'underline' : ''}`}>
          {props.currentPage.toString().padStart(2, '0')}
        </span>
        <span className="navbar__separator"> /</span>
        <span className={`navbar__total`}> 04</span>  
      </div>
    </div>

    
    </div>
  );
};

export default Navbar;

//Note:
//while importing: add 
//const currentPage = n; 
// Replace 'n' with the logic to determine the current page number

//<Navbar currentPage={currentPage} />

//add neccessary page links appropriately to the className="nav_backwardButton" and span className="nav_forwardButton" to navigate through the pages.
// and Replace the currentpage value in each page.  const currentPage = n;    <Navbar currentPage={currentPage} />