import React from 'react';

const CharComponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
    }

    if (props.character === ' ') {
        return (<p onClick={() => props.delete(props.index)} style={style}>&nbsp;</p>);
    }
    return (<p  onClick={() => props.delete(props.index)} style={style}>{props.character}</p>);
}

export default CharComponent;