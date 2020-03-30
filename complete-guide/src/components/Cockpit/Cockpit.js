import React from 'react';
import classes from './cockpit.module.css';

const cockpit = (props) => {

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
            <h1>React application</h1>
            <p className={assignedClasses.join(' ')}>Some dynamic text!!!!</p>
            <button
                class={btnClass}
                alt={props.showPersons}
                onClick={props.clicked}>Toggle names</button>
        </div>
    )
}

export default cockpit;