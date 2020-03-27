import React from 'react';

const ValidationComponent = (props) => {
    let text;
    props.characterCount >= 5 ? text = 'Text long enough' : text = 'Text too short';
    return(<p>{text}</p>);
}

export default ValidationComponent;