import React from 'react';

import Header from '../Header/Header';
import TabButtons from  '../Tabs/TabButtons'; 

import { Link } from "react-router-dom";


const Tabs = () => {
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
            <h1>TABS PAGE</h1>
            <TabButtons />
        </div>
        </>
    )
}

export default Tabs; 