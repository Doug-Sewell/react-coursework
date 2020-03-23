import React from 'react';

const UserInput = (props) => {

    const style = {
        backgroundColor: 'skyblue',
        border:'2px black solid',
        borderRadius:'5px',
        padding: '8px 4px'
    }
    return(
        <div>
           <input 
           style={style}
           type="text" 
           onChange={props.changeUserName} 
           value={props.username}/>
        </div>
    )
}

export default UserInput;