import React from 'react';

const Person = (props) => {

    return (<div onClick={props.click}>
        <p>My name {props.name}! I am {props.age}</p>
        <p>{props.children}</p>
    </div>);
}


export default Person;