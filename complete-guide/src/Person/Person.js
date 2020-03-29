import React from 'react';
import classes from  './Person.module.css';

const Person = (props) => {


    return (
        <div className={classes.Person}>
            <p className="personText" onClick={props.click}>My name {props.name}! I am {props.age}</p>
            <p>{props.children}</p>
            <input
                onChange={props.change}
                type="text"
                value={props.name}></input>
        </div>
    );
}


export default Person;