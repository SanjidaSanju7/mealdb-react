import React from 'react';

const Cart = ({ meal }) => {
    const { strMeal } = meal;
    return <li style={{ padding: '3px' }}>{strMeal}</li>;

};

export default Cart;