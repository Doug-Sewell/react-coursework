import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
       this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
                </AuthContext.Consumer>
                <p className="personText" onClick={this.props.click}>My name {this.props.name}! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    //ref={(inputEl) =>{this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.change}
                    type="text"
                    value={this.props.name} />
            </Aux>
        );
    }
}

// Person.propTypes = {
//     click: PropTypes.func,
//     naame: PropTypes.string,
//     age:PropTypes.number,
//     changed: PropTypes.func
// }

export default withClass(Person, classes.Person);