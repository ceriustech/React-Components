import React from 'react';

import Header from '../Header/Header';


import { Link } from "react-router-dom";


const AboutPage = () => {
    return (
        <>
        <Header>
            <div className="header-right">     
                <Link to='/'>Home</Link>
                <Link to='/tabs'>Tabs</Link>
                <Link to='/about'>About</Link>
            </div>        
        </Header>
        <div className='home'>
            <h1>ABOUT PAGE</h1>
        </div>
        </>
    )
}

export default AboutPage; 