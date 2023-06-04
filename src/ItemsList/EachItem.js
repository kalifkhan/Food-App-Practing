import React from 'react';
import './EachItem.css'; 
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../store/cart-context';


function EachItem(props){
   const cartCtx = useContext(CartContext);


    const prize = `$${props.oneItem.price}` ;

    const addtoCartHandle =(amount)=>
    {
        cartCtx.addItem({
            id: props.id,
            name: props.oneItem.name,
            amount: amount,
            price: props.oneItem.price,
        });

    }

    return <div className='eachitem-container'> 
            <div className="each-item">
            <p className='eactitem-each'> {props.oneItem.name} </p>
            <p className='eactitem-each'> {props.oneItem.descroption} </p>
            <p className='item-price'> {prize} </p>
            
           <MealItemForm id={props.id} onAddToCart ={addtoCartHandle} > </MealItemForm>
           </div>
            
            
    </div>
}


export default EachItem
