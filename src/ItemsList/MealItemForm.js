import React , {useState} from 'react';
import Input from '../Button/Input';
import './MealItem.Module.css';
import { useRef } from 'react';

const MealItemForm = props =>{

    const amountInputRef = useRef();


const [amountIsValid , setAmountIsValid] = useState(true);



    const addItemToCart=(event)=>{

        event.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const enterNumber = +enterAmount;

        if(enterAmount.trim().lenght === 0 || enterNumber <1 || enterNumber >5)
        {
            setAmountIsValid(false);

            return ;
        }
        props.onAddToCart(enterNumber);
    }
   
    return <form className='form' onSubmit={addItemToCart}>
        <Input
        ref={amountInputRef}
    label='Amount'
    input={{
        id: 'amount',
        type: 'number',
        min: '0',
        max: '5',
        step: '1',
        defaultValue: '0',
    }}
        />
        <button>+ ADD </button>
        {!amountIsValid && <p> please enter the valid amount</p>}
    </form>

}


export default MealItemForm