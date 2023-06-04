import React , {useState} from 'react';
import Input from '../Button/Input';
import './MealItem.Module.css';


const MealItemForm = props =>{
const [xx , setXX] = useState(0);
const [inputNumber , setInputNumber] = useState(0);



    const addItemToCart=(event)=>{

        event.preventDefalut();
        console.log('Add cliecke')
        
    }
    const handleNumber =event=>{
            setInputNumber(event.target.value);         
    }

    return <form className='form' onSubmit={addItemToCart}>
        <Input
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
        <button type="submit" >+ ADD </button>
    </form>

}


export default MealItemForm