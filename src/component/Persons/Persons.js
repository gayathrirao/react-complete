import React from 'react';
import Persons from './Person/Person';

const PersonsList=(props) => { props.persons.map((person,index) =>
            {

                
                return (<Persons  
                click={()=>props.clicked(person.name)} 
                name={person.name} 
                age = {person.age} 
                key={person.key} 
                changed = {(event)=>props.changed(event, person.key)}/> ) 
              
            });
        }

export default  PersonsList;