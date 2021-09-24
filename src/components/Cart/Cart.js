import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((previous,product)=> previous + product.price,0);
    // let total = 0;
    // for(const product of cart){
    //     total += product.price;
    // }
    const shipping = 15;
    const tax = (shipping + total) /10;
    const grandTotal = shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;