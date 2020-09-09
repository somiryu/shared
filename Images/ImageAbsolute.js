//top, left, right, style = {textAlign: 'center', ...} (FROM ABSOLUTE)
//alt
//image
import React from 'react'
import Absolute from '../Containers/Absolute'

export default function ImageAbsolute(props) {
    return (
        <Absolute {...props}>
            <img src={props.image} alt={props.alt} style={{width:'100%'}}></img>    
        </Absolute>
    )
}
