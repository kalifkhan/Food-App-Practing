import React from 'react';
import './EachItem.css'; 
import MealItemForm from './MealItemForm';


function EachItem(props){

    const prize = `$${props.oneItem.price}` ;


    return <div className='eachitem-container'> 
            <div className="each-item">
            <p className='eactitem-each'> {props.oneItem.name} </p>
            <p className='eactitem-each'> {props.oneItem.descroption} </p>
            <p className='item-price'> {prize} </p>
            
           <MealItemForm id={props.id}  > </MealItemForm>
           </div>
            
            
    </div>
}


export default EachItem
