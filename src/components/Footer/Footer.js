import React from 'react';
import footerLogo from './logo.png';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row footer-top">
                    <div className="col-md-6">
                        <img src={footerLogo} alt=""/>
                    </div>
                    <div className="col-md-3">
                        <div className="links">
                            <ul>
                            <li><Link to="/about">About Online Food</Link></li>
                            <li><Link to="/blog">Read Our Blog</Link></li>
                            <li><Link to="/login">Sign up to deliver</Link></li>
                            <li><Link to="/about">Add your restaurant</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="links">
                            <ul>
                            <li><Link to="/help">Get Help</Link></li>
                            <li><Link to="/faq">Read FAQ</Link></li>
                            <li><Link to="/cities">View All Cities</Link></li>
                            <li><Link to="/nearme">Restaurants near me</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <p>Copyright &copy; 2020 Online food</p>
                    </div>
                    <div className="col-md-5">
                        <div className="footer_bottom">
                        <ul className="list-inline">
                        <li className="list-inline-item ml-3"><a href="">Privacy Policy.</a></li>
                        <li className="list-inline-item  ml-3"><a href="">Terms of Use</a></li>
                        <li className="list-inline-item  ml-3"><a href="">Pricing</a></li>
                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;