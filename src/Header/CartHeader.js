import React from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

function CartHeader(props){

    const cartCtx = useContext(CartContext);

    const numberofCartItem = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber+item.amount;
    }, 0);

    return <button  style={{ cursor: 'pointer',
        font: 'inherit',
        color: 'gold',
        border: 'solid gold',
        borderradius: '3px' }} onClick={props.onClick} >
        <span>
            #
        </span>
        <span> Your Cart </span>
        <span> {numberofCartItem} </span>
    </button>

}


export default CartHeader



