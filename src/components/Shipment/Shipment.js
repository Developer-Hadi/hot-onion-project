import React from 'react';
import completeImage from './ordercomplete.png';

const Shipment = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img className="w-100" src={completeImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Shipment;