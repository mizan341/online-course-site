import React from 'react';
import './Cart.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    const totalPrice = cart.reduce((total, cou) => Number(total) + Number(cou.price), 0);
    let total = totalPrice.toFixed(2);

    // let tax = (total * 0.10).toFixed(2)

    // let before = Number(total) + Number(ship(total));
    // let beforeTax = before.toFixed(2);
    // let grand = Number(total) + Number(ship(total)) + Number(tax);
    // let grandTotal = grand.toFixed(2);
    return (
        <div className="cartItem">
            <h3>Order Summery</h3>
            <p>Items ordered: {cart.length} </p>
            <p>Items Price: {total} </p>
            <p>Shipping Cost: </p>
            <p>Tax+Vat: </p>
            <h4>Grand Total:</h4>
            <Button variant="primary">Review Your Order</Button>

        </div>
    );
};
function ship(tt) {
    let shipping = 0;
    if (tt > 50) {
        shipping = 0;
    } else if (tt > 30) {
        shipping = 4.99;
    } else if (tt > 15) {
        shipping = 12.99;
    }
    return shipping.toFixed(2);
}

export default Cart;