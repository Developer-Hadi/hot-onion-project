import React, { useState } from 'react';
import './FoodArea.css';
import fakeData from '../../fakeData'
import FoodItem from '../FoodItem/FoodItem';

const FoodArea = () => {
    const foodData = fakeData.slice(0,18);

    const breakfast = foodData.filter(fd => fd.type === "breakfast");
    const lunch = foodData.filter(fd => fd.type === "lunch");
    const dinner = foodData.filter(fd => fd.type === "dinner");

    const [foodItems, setFoodItems] = useState(lunch);
    
    const selectedFoodMenu = (menu, item) => {
        let newFoodData = [];
        if(menu === "breakfast" || menu === "lunch" || menu === "dinner"){
            newFoodData = item;
            setFoodItems(newFoodData);
        }
        return newFoodData;
    }

   

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="foodMenu text-center">
                            <button onClick={() => selectedFoodMenu("breakfast", breakfast)} className="btn font-weight-bold m-3">Break-fast</button>
                            <button onClick={() => selectedFoodMenu("lunch", lunch)} className="btn font-weight-bold btn-active m-3">Lunch</button>
                            <button onClick={() => selectedFoodMenu("dinner", dinner)} className="btn font-weight-bold m-3">Dinner</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="foodItem">                           
                            {
                                foodItems.map(fItem => <FoodItem foodItem={fItem} ></FoodItem>)
                            }                        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="foodItemSelected text-center mt-5">
                            <button className="btn btn-dark disabled">Check Out Your Food</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodArea;