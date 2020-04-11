import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bannerArea">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center py-5">
                        <div className="bannerText">
                            <h1 className="py-3">Best food waiting for your belly.</h1>
                            <input id="searchName" type="text" placeholder="Search food items"/>
                            <input id="search" type="submit" value="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;