import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    characterCount: 0,
    text:''
  }

  updateCharacterCount = (content) => {
    const newState = {characterCount: content.length,text:content};
    this.setState(newState);
  }

  deleteChar = (index) => {
    const newState = {...this.state};
    const stringArray = newState.text.split('');
    stringArray.splice(index,1);
    newState.text = stringArray.join('');
    this.setState(newState);
  }

  render() {
    let chars = null;
    if(this.state.characterCount) {
      chars = this.state.text.split('').map((char,index) => <CharComponent delete={this.deleteChar.bind(this)} index={index} character={char} />);
    }


    return (
      <div>
        <input
          type="text"
          placeholder="Start typing!"
          value={this.state.text}
          onChange={(e) => {this.updateCharacterCount(e.target.value)}} />
        <ValidationComponent characterCount={this.state.characterCount} />
        {chars}
      </div>
    )
  }
}

export default App;