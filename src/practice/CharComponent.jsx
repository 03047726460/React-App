import React from 'react'

const CharComponent=(props)=> {
    return (
        <div onClick ={props.removeWord} style ={{display : 'inline-block', padding:'16px',textAlign:'center',margin:'16px',border :'1px solid black'}}>
            <h1>{props.character}</h1>
        </div>
    )
}
export default CharComponent;