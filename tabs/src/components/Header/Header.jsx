import React from 'react'; 

import { Link } from "react-router-dom";

import '../Styles/Header.scss'; 

const Header = () => {
    return (
        <div className="header">
            <Link className="logo">CompanyLogo</Link>
            <div className="header-right">
                <Link className="active" to='/'>Home</Link>
                <Link to='contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Header; 