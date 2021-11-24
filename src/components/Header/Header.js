import React from 'react';
import './header.css';
import Logo from '../../images/logo.svg'

const Header = (props) => {
    return (
        <div className="header-container">
            <img src={Logo} />
            <input className="input-field" onChange={(e) => props.onSearchMovie(e.target.value)} placeholder="search" type="search" />
        </div>
    )
}

export default Header;