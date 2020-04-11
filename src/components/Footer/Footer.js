import React from 'react';
import footerLogo from './logo.png';
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
                                <li><a href="#">About Online food</a></li>
                                <li><a href="#">Read our blog</a></li>
                                <li><a href="#">Sign up to deliver</a></li>
                                <li><a href="#">Add your restaurant</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="links">
                            <ul>
                                <li><a href="#">Get help</a></li>
                                <li><a href="#">Read FAQs</a></li>
                                <li><a href="#">View all cities</a></li>
                                <li><a href="#">Restaurants near me</a></li>
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
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;