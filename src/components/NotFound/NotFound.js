import React from 'react';
import { Link } from 'react-router-dom';
import img from './logo.png';

const NotFound = () => {
    return (
        <div className="text-center text-danger">
            <h1>Oh !!! Sheet.  Sorry Boss You are in Wrong Path.</h1>
            <Link to="/">
                <img className="w-25 py-5" src={img} alt=""/>
            </Link>
        </div>
    );
};

export default NotFound;