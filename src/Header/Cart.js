import React from 'react';
import classes from './cart.Module.css';
import Modal from './Modal';

const Cart = props =>{

    const cartItems = [{id : 'c1' , name: 'butter' , amount: 2 , price: 10}].map((item) =>{
        <li> {item.name }</li>
    })

    return <Modal onClick= {props.onHide}>
        <div>
            {cartItems}
        </div>
        <div className={classes.total}> 
            <span> Total amount</span>
            <span> 100 </span>
        </div>
        <div> 
            <button className={classes['button-alt']}  onClick={props.onHide}> Close</button>
            <button className={classes.button} > Order </button>
        </div>
    </Modal>
}

export default Cart
