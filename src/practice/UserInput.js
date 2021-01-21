import React from 'react';

const UserInput = (props)=>{

return(
    <input type = 'text' onChange = {props.handleUsername} value ={props.value}></input>
)
}

export default UserInput;
