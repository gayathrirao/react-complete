import React from 'react'
import { tsPropertySignature } from '@babel/types';
const Persons = (props) => {
    return (
        <div className='person'>
    <p onClick={props.click}> My name is {props.name} and age is {props.age}</p>
    <input type = "text" onChange={props.changed} value={props.name}/>
    <h3>{props.children}</h3>
    </div>
    )
};

export default Persons;