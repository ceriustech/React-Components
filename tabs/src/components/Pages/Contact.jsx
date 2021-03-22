import React from 'react';

import Header from '../Header/Header';

import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <>
        <Header>
            <Link to='/'>Home</Link>
            <Link to='contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </Header>
        <div className='home'>
            <h1>CONTACT PAGE</h1>
        </div>
        </>
    )
}

export default Contact; 