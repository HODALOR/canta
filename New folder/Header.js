import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { SearchIcon } from '@material-ui/icons';
function Header() {
  const [goal, setgoal] = useState(false);

  return (
    <div>
      <div className="headerWrapper">
        <div className="header__logo">
          {/* <h2>AMAZONES</h2> */}
         <img src="logo192.png" alt="AMAZON" />
        </div>

        <div className="header__search">
          <input className="header__input"></input>
          <SearchIcon className="find"/>
          {/* <button className="find">Search</button> */}
        </div>

        <div className="header__nav"> 

        <div className="header__option">
          <span className="header__option1">Hello Geust </span>
          <span className="header__optiont2">Sing In</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Returns </span>
          <span className="header__option2">Order</span>

        </div>
        <div className="header__option">
          <span className="header__option1">Your</span>
          <span className="header__option6">Prime</span>
          </div>   
        </div>
        <div className="header__optioncat">
        <ShoppingBasketIcon />
          {/* <h3>CAT</h3> */}
          <span className="header__optiont2 header__optioncat1">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
