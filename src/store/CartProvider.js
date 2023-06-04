import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState ={
    items : [],
    totalAmount: 0
}

const cartReducer = (state , action) =>{
    if(action.type === 'ADD')
    {
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + state.items.item * state.items.amount; 

        return {
            items :updateItems,
            totalAmount: updateTotalAmount
        }
    }
    if(action.type === 'REMOVE')
    {

    }
    return defaultCartState;
}

const CartProvider = props =>{

    const [cartState, dispatchAction] = useReducer( cartReducer , defaultCartState);

    const addItemCartContext=(item) => {
        dispatchAction({ type: 'ADD' , item: item})
    };

    const removeItemCartContext=(id) =>{
        dispatchAction({ type: 'REMOVE' , id: id})
    };

    const cartContext={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem : addItemCartContext,
        removeItem: removeItemCartContext,
    }

    return <CartContext.Provider   value={cartContext}>   
        {props.children}
    </CartContext.Provider>
}

export default CartProvider 