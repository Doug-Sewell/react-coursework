import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {
          id: "Triforce of Courage",
          name: "Link",
          age: 16
        },
        {
          id: "Triface of Wisdom",
          name: "Zelda",
          age: 17
        },
        {
          id: "Triforce of Power",
          name: "Gannondorf",
          age: 48
        }
      ],
      showPersons: true,
      showCockpit: true,
      changeCounter: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }



  deletePerson = (index) => {
    // const persons = this.state.persons; <- BAD way of doing this as it's a referenec pointer and you are modifying the oringal data. You want to create a copy of the array instead of pointing it to the same reference point as the original data.
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  typedHandleChange = (event, id) => {
    const persons = [...this.state.persons];//Creates a copy of the data.
    const personID = persons.findIndex(p => p.id === id); //Finds the index of the element being updated in the state.
    persons[personID].name = event.target.value; //Updates the copied state's data.
    this.setState((prevState, props) => {
      return { persons, 
              changeCounter: prevState.changeCounter + 1 }
    }); //Replaces the old state with the new state. Using ES6 since persons is the name of the key and the value is the same name since it's the variable here.
  }

  showPersons = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  }

  render() {
    console.log('[App.js] render');
    let personComponents = null;

    if (!this.state.showPersons) {
      personComponents = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.typedHandleChange} />
      );
    }


    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          AppTitle={this.props.title}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.showPersons} /> : null}
        {personComponents}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);