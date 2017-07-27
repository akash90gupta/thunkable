import React, { Component } from 'react';
import Beaver1 from '../assets/beaver.png';
import Settings from '../assets/settings.png';
import './header.css';


class Header extends Component {
    render() {
        return ( 
        <div className = "header" >
            <div className="nav">             
                <img className="beaver" src={Beaver1} alt="beaver" />
                <img className="settings" src={Settings} alt="settings" />
            </div>
        </div>
        );
    }
}

export default Header;
