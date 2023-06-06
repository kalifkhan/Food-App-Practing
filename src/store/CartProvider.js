import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState ={
    items : [],
    totalAmount: 0
}

const cartReducer = (state , action) =>{
    if(action.type === 'ADD')
    {
        
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount; 

        const checkingItemInCart = state.items.findIndex(item => item.id === action.item.id);

        const existingItem = state.items[checkingItemInCart];
        let updateItems;


        if(existingItem){
            const updateItem={
                ...existingItem ,
                amount: existingItem.amount + action.item.amount
            };
            updateItems = [...state.items];
            updateItems[checkingItemInCart] = updateItem;

        }else{
            updateItems = state.items.concat(action.item);
        }

        //const updateItems = state.items.concat(action.item);
        return {
            items :updateItems,
            totalAmount: updateTotalAmount  
        }
    }
    if(action.type === 'REMOVE')
    {
        const existingItemIndex = state.items.findIndex((item)=> item.id === action.id );

        const existingItem = state.items[existingItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;
        
        let updatedItems;

        if(existingItem.amount === 1)
        {   
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updateItem={
                ...existingItem ,
                amount: existingItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updateItem;
        }

        return {
           
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
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