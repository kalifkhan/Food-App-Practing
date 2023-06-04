import React from 'react';
import './Header.css';
import CartHeader from './CartHeader';

function HeaderData(props){

    return <div className='header-container'>
        <div> 
        <h2 className="header-title">  WElocme to FOOD Court </h2>
        <h2 className="header-cart"> <CartHeader onClick={props.onShowCart}> </CartHeader> </h2>
        
        </div>
    </div>
}

export default HeaderData