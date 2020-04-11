import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from './logo2.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login">
                            <ul>
                                <li><button className="btn" id="cart"><FontAwesomeIcon icon={faCartPlus} /></button></li>
                                <li><button className="btn" id="Login">Login</button></li>
                                <li><button className="btn" id="signUp">Sign Up</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;