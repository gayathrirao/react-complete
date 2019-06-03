import React from  'react';
import logo from '../../../src/logo.svg';
import './App.css';
import Persons from '../Persons/Person/Person';

import '../Persons/Person/Person.css';
import PersonsList from '../Persons/Persons';

class App extends React.Component {
  state = {
    Persons: [
        { name:"Gayathri",age:28 ,key:"abcd"},
        { name:"Arpitha",age:29,key:"bcde" },
        { name:"Ananth",age:27 ,key:"cdef"}
        ],
    showPersons:false
    };

    SwitchNameHandler = (name) =>     {
      this.setState ( {
        Persons: [
          { name:name,age:28 ,key:"abcd"},
          { name:"Arpitha",age:29,key:"bcde" },
          { name:"Ananth",age:27 ,key:"cdef"}
            ]        })
    }

    nameChanged = (event,id) => {
      let prs  = [...this.state.Persons];
      let  personIndex = prs.findIndex(person1=>person1.key===id);
      console.log('index is  {i}'+personIndex);
      console.log('key is  {id}'+id);
      prs[personIndex].name=event.target.value;
      console.log(prs);
      this.setState({Persons:prs});
    }
    togglePersonsDisplay = () =>     {
      const doesShow = this.state.showPersons;
      this.setState ( {showPersons:!doesShow})
    }

  render() {

    let persons = null;
    console.log(this.state.showPersons)
    if(this.state.showPersons)
    {
      persons = (
      <div>
        {
            this.state.Persons.map((person,index) =>
            {
             return <Persons
              click={this.SwitchNameHandler.bind(this,"Shree")} 
              name={person.name} 
              age = {person.age}
              key={person.key}
              changed = {(event)=>this.nameChanged(event, person.key)}
              />
          })
         
         } 
        <button onClick={this.SwitchNameHandler.bind(this,'Ramkumar')} className="switches">SwitchName</button>
        
        </div>
       
                );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>I am a react app</p>
          {persons}
          <button onClick={this.togglePersonsDisplay} className="switches">Toggle Display</button>
        </header>
      </div>
    );
  }
}
export default App;
