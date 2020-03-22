import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {

  state = {
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
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
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

  render() {
    return (
      <div className="App">
        <h1>React application</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Mario')}>Switch name</button>
        <Person
          click={this.switchNameHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          click={this.switchNameHandler.bind(this,'Super Mario')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>My Hobbies: Horseback riding and Ocarina playing.</Person>
        <Person
          click={this.switchNameHandler}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
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