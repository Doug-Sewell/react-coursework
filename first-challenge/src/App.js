import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: 'Default Username'
  }


  changeUserName = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

    return (
      <div className="App">
        <h1>Working!</h1>
        <UserInput 
        changeUserName = {this.changeUserName.bind(this)}
        username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;

/*
    Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
    */