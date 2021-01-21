import React from 'react';
import UserInput from './UserInput';
const UserOutput=(props) =>{
    return (
        <div >
            <p>Hi!! My name is {props.userName}</p>
            <UserInput handleUsername = {props.handleUsername} value={props.userName} ></UserInput>
            <p>Learnimg Front End With React</p>
            
        </div>
    )
}

export default UserOutput;