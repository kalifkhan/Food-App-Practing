import React from 'react';
import './Input.Module.css';



const Input = props =>{
    return <div className='input'> 
        <label htmlFor={props.input.id} >
            {props.label}
        </label>
        <input  value = {props.xy} />
    </div>
}

export default Input 
