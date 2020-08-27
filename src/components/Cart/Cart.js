import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Cart.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import CartDown from '../CartDown/CartDown';

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    const cart = props.cart;
    // console.log(cart);
    const totalPrice = cart.reduce((total, course) => Number(total) + Number(course.price), 0);
    let total = totalPrice.toFixed(2);

    let tax = (total * 0.02).toFixed(2);
    let totalTax =Number(tax);

    let grand = Number(total) + Number(tax);
    let grandTotal = Math.round(grand);
    return (
        <div>
            <div className = "cartItem">
                <h1 className="text-danger text-center p-3">{element}(<span className="text-warning p-1">{cart.length}</span>) </h1>
                <h4 className="text-uppercase pb-4 pt-4 text-primary"><u>Order Summery</u></h4>
                <h5 className="text-warning">{element} Course ordered: (<span className="text-danger p-1">{cart.length}</span>) </h5>
                <p>Course(s) Price: ${total} </p>
                <p>Tax+Vat: ${totalTax}</p>
                <h4 className="text-danger">Grand Total: ${grandTotal}</h4>
                <Button variant="primary">Review Course(s)</Button>
            </div>
            <div>
                <CartDown></CartDown>
            </div>
        </div>
        
    );
};

export default Cart;