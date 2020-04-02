import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }


    /*The following function checks for any change in props. 
    If props change, then the function returns true and the component
    re-renders. However, if we want to compare all props passed
    to the component, reather than doing a manual check of everything
    as seen below, we can just extend PureComponent as opposed to
    Component which will do the same thing, but with less code. It also
    prevents all other lifecycle hooks from running.
    */

    // shouldComponentUpdate(nextProps,nextState) {
    //     console.log('[Perosns.js] shouldComponentUpdate');
        
    //     if(this.props.persons !== nextProps.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate]');
        return null;
    }s

    componentDidUpdate(){
        console.log('[Persons.js componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }


    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
                click={this.props.clicked.bind(this, index)} />
        });

    }
}

export default Persons;