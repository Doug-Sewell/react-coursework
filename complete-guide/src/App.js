import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id:"Triforce of Courage",
        name: "Link",
        age: 16
      },
      {
        id:"Triface of Wisdom",
        name: "Zelda",
        age: 17
      },
      {
        id:"Triforce of Power",
        name: "Gannondorf",
        age: 48
      }
    ],
    showPersons: true
  }

  deletePerson = (index) => {
   // const persons = this.state.persons; <- BAD way of doing this as it's a referenec pointer and you are modifying the oringal data. You want to create a copy of the array instead of pointing it to the same reference point as the original data.
   const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  typedHandleChange = (event, id) => {
    const persons = [...this.state.persons];//Creates a copy of the data.
    const personID = persons.findIndex(p => p.id == id); //Finds the index of the element being updated in the state.
    persons[personID].name = event.target.value; //Updates the copied state's data.
    this.setState({persons}); //Replaces the old state with the new state. Using ES6 since persons is the name of the key and the value is the same name since it's the variable here.
  }

  showPersons = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let personComponents = null;

    if (this.state.showPersons) {

      personComponents = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event) => this.typedHandleChange(event,person.id)}
            click={this.deletePerson.bind(this,index)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React application</h1>
        <button
          style={style}
          onClick={this.showPersons}>Switch name</button>
        {personComponents}
      </div>
    );
  }
}

export default App;


/*
  UPDATING STATE USING REACT HOOK AS A FUNCTIONAL COMPONENT. THe following is a newer way of doing this.


import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {
        name: "Link",
        age: 16
      },
      {
        name: "Zelda",
        age: 17
      },
      {
        name: "Gannondorf",
        age: 48
      }
    ]
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        {
          name: "Mario",
          age: 47
        },
        {
          name: "Peach",
          age: 45
        },
        {
          name: "Luigi",
          age: 40
        }
      ]
    });
  }

  return (
    <div className="App">
      <h1>React application</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Horseback riding and Ocarina playing.</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );

}

export default App;


  */