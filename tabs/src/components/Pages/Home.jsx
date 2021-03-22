import React, { useState } from 'react'; 
import Header from '../Header/Header';
import GridView from '../GridView/GridView';
import Settings from '../Settings/Settings';

import { Link } from "react-router-dom";

import SettingsIcon from '@material-ui/icons/Settings';
import CheckIcon from '@material-ui/icons/Check';

import '../Styles/Home.scss';


const Home = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggleContent = () => {
        setToggleState(!toggleState);
    };
  

    return (
        <>
        <Header>
            <CheckIcon className={toggleState === true ? 'settings-icon active-content' : 'settings-header inactive-content'} />
            <p className={toggleState === true ? 'settings-header active-content' : 'settings-header inactive-content'}>Settings</p>
            <div className="header-right">     
                <Link to='/'>Home</Link>
                <Link to='contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <SettingsIcon onClick={() => toggleContent()}/>
            </div>
        </Header>
        <div className='home'> 
            <div className={toggleState === true ? 'home-content active-content' : 'home-content inactive-content'}>
                <Settings />
            </div>
            <div className={toggleState === true ? 'home-content inactive-content' : 'home-content active-content'}>
                <h1>HOME PAGE</h1>
                <GridView />
            </div>
        </div>
        </>
    )
}

export default Home; 