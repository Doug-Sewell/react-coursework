import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p className="personText" onClick={this.props.click}>My name {this.props.name}! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    onChange={this.props.change}
                    type="text"
                    value={this.props.name} />
            </div>
        );
    }
}


export default Person;