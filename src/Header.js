import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <nav className="header">

            {/* Logo */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            {/* Search Bar */}
            <div className="header__search">
                <input type="text" clasName="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* Links */}
            {/* Basket */}
            
        </nav>
    )
}

export default Header
