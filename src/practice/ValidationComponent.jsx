import React from 'react'

const ValidationComponent =(props)=> {

    
        
        if( props.length > 9) {
        return <h1>Text Long Enough</h1>
    }
    return <h1>Text Too Short</h1>
  
    
}

export default  ValidationComponent;