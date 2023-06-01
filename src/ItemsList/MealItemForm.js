import React , {useState} from 'react';
import Input from '../Button/Input';
import './MealItem.Module.css';


const MealItemForm = props =>{
const [xx , setXX] = useState(0);


    const addItemToCart=(event)=>{

        event.preventDefalut();
        
        setXX(xx+1);

    }

    return <form className='form'>
        <Input 
        label='amount'
        input={{
            id: 'amount',
            type: 'number',
            min: 1,
            max: 5,
            
        }}
        xy ={xx} >
        </Input>
        <button onClick={addItemToCart}>+ ADD </button>
    </form>

}


export default MealItemForm