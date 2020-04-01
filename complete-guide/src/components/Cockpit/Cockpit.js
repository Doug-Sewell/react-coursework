import React, {useEffect} from 'react';
import classes from './cockpit.module.css';

const Cockpit = (props) => {


    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //HTTP request....

      //Combines functionality of componentDidMount and componentDidUpdate which are lifecycle methods in class based components.
    
      setTimeout(() => {
        alert('Saved data to cloud!');
      },1000)
      return () => {
        console.log('[Cockpit.js] cleanup work in UseEffect');
      };
    },[]); // By adding useEffect with an empty array as the second argument, it will only run once. Otherwise, you can add the data as values that will have useEffect only run if that data is changed. For example, adding props.persons


  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd UseEffect');
    }
  });


    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <=1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>{props.AppTitle}</h1>
            <p className={assignedClasses.join(' ')}>Some dynamic text!!!!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle names</button>
        </div>
    )
}

export default Cockpit;