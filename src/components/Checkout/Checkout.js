import React from 'react';
import { Link } from 'react-router-dom';
import Shipment from '../Shipment/Shipment';

const Checkout = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                <div className="py-5 my-3 pr-5">
                    <h2 className="py-3 mb-5 border-bottom">Edit Delivery Details</h2>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" id="todo" placeholder="Deliver to door" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="todo" placeholder="107 Rd No 8" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="todo" placeholder="Flat, suite or floor" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="todo" placeholder="Business Name" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="todo" placeholder="Add delivery Instructor" required/>
                            </div>
                            <input type="submit" value="Save & Continue" className="btn btn-danger btn-block"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <div className="m-5 p-5">
                        <p>From <span className="font-weight-bold">Gulshan Plaza Restura GPR</span></p>
                        <p>Arriving in 20-30 min</p>
                        <p>107 Rd No 8</p>
                        <br/>
                        <p>Subtotal </p>
                        <p>Tax</p>
                        <p>Delivery Fee</p>
                        <h5>Total</h5>
                        <Link to="/shipment">
                             <input type="submit" value="Place Order" className="btn btn-primary btn-block my-3"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;