import React from 'react'; 

import { Link } from "react-router-dom";

import '../Styles/Header.scss'; 

const Header = ({children}) => {
    return (
        <div className="header">
            <Link className="logo">CompanyLogo</Link>
            {children}
        </div>
    )
}

export default Header; 