import React from 'react';
import classes from './cart.Module.css';
import Modal from './Modal';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './Cartitem';


const Cart = props =>{
    const cartCtx = useContext(CartContext);

    

    // const cartX = [{
    //     id: 'c1',
    //     name: 'curry' , 
    //     amount: 4,
    //     price: 20
    // }];
    const cartTotalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const hasCart = cartCtx.items.length >0;
    const cartRemoveItemhandler =(id)=>{}
    const cartAddItemhandler =(otem)=>{}

    const yourcartItems = cartCtx.items.map((item) => 
    <CartItem key={item.id} name ={item.name} amount={item.props} price={item.price} 
    onRemove={cartRemoveItemhandler.bind(null , item.id)} 
    onAdd={cartAddItemhandler.bind(null, item)}> 

    </CartItem>)

    return <Modal onClick= {props.onHide}>
        
        <div className='cart-items '>
            {yourcartItems}
        </div>
        <div className={classes.total}> 
            <span> Total amount</span>
            <span> {cartTotalAmount} </span>
        </div>
        <div> 
            <button className={classes['button-alt']}  onClick={props.onHide}> Close</button>
            {hasCart && <button className={classes.button} > Order </button>}
        </div>
    </Modal>
}

export default Cart
