import React from 'react';
import './FoodDetails.css';
import fakeData from '../../fakeData';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FoodDetails = (props) => {
    const {foodKey} = useParams();
    const foodItem = fakeData.find(fItem => fItem.key === foodKey);
    console.log(foodItem);
    const {img, title, details, price} = foodItem;

    const [count, setCount] = useState(1);
    const {cart, setCart} = props;

    return (
        <div>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                    <h1 className="">{title}</h1>
                        <p className="py-5">{details}</p>
                        <h3>$ {price} </h3>
                        <h3 className="cartCount">
                            <button onClick={()=> count >1 ? setCount(count-1) : count}>-</button>
                            {count}
                            <button onClick={()=> setCount(count+1)}>+</button>
                            
                        </h3>
                        <p id="addText"></p>
                        <br/>
                        <button className="btn btn-danger"
                            onClick={()=> setCart(cart + 1)} 
                        >Add to Cart</button>
                    </div>
                    <div className="col-md-6">
                        <img className="detailPhoto" src={img} alt=""/>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;