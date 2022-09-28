import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingleMeal.css'
import React from 'react';

const SingleMeal = ({ meal, cartHandler }) => {
    const { strMeal, strMealThumb, strCategory, strInstructions, strArea
    } = meal;



    return (
        <div>
            <div className='single-meal'>
                <img src={strMealThumb} alt="" />
                <div className='product-details'>
                    <h4>Name: {strMeal}</h4>
                    <p>Category: {strCategory}</p>
                    <p>Tradition: {strArea}</p>
                    <p>Introduction: {strInstructions.length > 50 ? strInstructions.slice(0, 50) + '....' : strInstructions}</p>
                </div>
                <button className='cart-button' onClick={() => cartHandler(meal)}> <span>Add to Cart</span> <span className='font-awsome'><FontAwesomeIcon icon={faShoppingCart} /> </span> </button>


            </div>
        </div>
    );
};

export default SingleMeal;