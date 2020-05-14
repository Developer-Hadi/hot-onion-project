import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from './logo2.png';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
   
    
    return (
        <div className="navbar-light bg-white border-bottom pt-2 fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login">
                            <ul>
                                <li>
                                    <Link to="/checkout">
                                        <button className="btn" id="cart"><FontAwesomeIcon icon={faCartPlus} />
                                        {props.cart}
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <button className="btn" id="Login">Login</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <button className="btn" id="signUp">Sign Up</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;