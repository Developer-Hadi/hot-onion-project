import React from 'react';
import './FoodItem.css'
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    console.log(props.foodItem);
    const {key,img, title, description, price} = props.foodItem;
   
    return (
        <div>
            <div className="container">                
                <Link to={"/food/"+key}>
                    <div className="foodDeck text-center">
                        <img className="foodPhoto" src={img} alt=""/>
                        <h2 className="title">{title}</h2>
                        <p>{description}</p>
                        <h3>$ {price} </h3>
                    </div>    
                </Link>    
            </div>  
        </div>
    );
};

export default FoodItem;