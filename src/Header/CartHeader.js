import React from "react";

function CartHeader(props){

    return <button  style={{ cursor: 'pointer',
        font: 'inherit',
        
        
        color: 'gold',
        
        border: 'solid gold',
        borderradius: '3px' }} onClick={props.onClick} >
        <span>
            #
        </span>
        <span> Your Cart </span>
        <span> 3 </span>
    </button>

}


export default CartHeader



