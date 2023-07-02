import React, { useState } from 'react';
import EachItem from './EachItem';
import './EachItem.css';


const Items = [
    {
        id: 'm1',
        name: 'Paneer',
        descroption: 'milk item paneer butter',
        price: 30
    },
    {
        id: 'm2',
        name: 'Chicken masal',
        descroption: 'milk item paneer butter',
        price: 50
    },
    {
        id: 'm3',
        name: 'Biryani',
        descroption: 'milk item paneer butter',
        price: 60
    },
    {
        id: 'm4',
        name: 'Veg-thali',
        descroption: 'milk item paneer butter',
        price: 80
    },
    {
        id: 'm5',
        name: 'Masala-Dosa',
        descroption: 'masala dosa breagfast ',
        price: 20
    },
    {
        id: 'm6',
        name: 'Samosa',
        descroption: 'Evening snkack Samosa',
        price: 10
    }
];


function ItemList() {
    const [eachitem, setEachItem] = useState(Items);
    const [cartitem , setCartItem] = useState(0);


    

    const oneItem = eachitem.map((item) => <EachItem key={item.id} id={item.id} oneItem={item}> </EachItem>);
        /*<li className="each-item"> {item.name}
            <p> {item.descroption}</p>
            <p className='item-price'> {item.price}</p>
            <button className='item-price' onClick={additemToCart} value={item.price}> ADD </button></li>);
            */

    return <div>
        
        <div className='item-container'>
            <ul>
                <p>{oneItem} </p>
            </ul>
        </div>
    </div>
}


export default ItemList;


