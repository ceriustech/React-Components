import React from 'react'; 

import '../Styles/Header.scss'; 

const Header = () => {
    return (
        <div className="header">
            <p className="logo">CompanyLogo</p>
            <div className="header-right">
                <p className="active">Home</p>
                <p>Contact</p>
                <p>About</p>
            </div>
        </div>
    )
}

export default Header; 