import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meal.css'

const Meal = () => {

    const [meals, setMeals] = useState([]);
    const [newMeals, setNewMeals] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText])

    const cartHandler = (meal) => {
        const anotherMeals = [...newMeals, meal]
        if (newMeals.includes(meal) === true) {
            alert('You have already added this item');
            return;
        }
        setNewMeals(anotherMeals);
    }

    return (

        <div className='container'>
            <h1>Welcome To My Green Food</h1>
            <input type="text" placeholder='Search By Name...' className='input-field'
                onChange={(e) => setSearchText(e.target.value)} />

            <div className='restaurant-container'>
                <div className="meal-container">
                    {
                        meals.map(meal => <SingleMeal
                            meal={meal}
                            key={meal.idMeal}
                            cartHandler={cartHandler}
                        ></SingleMeal>)
                    }
                </div>
                <div className='cart-container'>
                    <div className='cart'>
                        <h3 className='summary'>Item Summary</h3>
                        <ol>
                            {
                                newMeals.map(meal => <Cart
                                    meal={meal}
                                    key={meal.idMeal}></Cart>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;