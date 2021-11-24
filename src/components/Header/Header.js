import React from 'react';
import './header.css';
import Logo from '../../images/logo.svg'

const Header = () => {
    return (
        <div className="header-container">
            <img src={Logo} />
            <input className="input-field" placeholder="search" type="search" />
        </div>
    )
}

export default Header;