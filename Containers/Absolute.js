//top = 0
//left = 0
//right = 0
//style = {textAlign: 'center', ...}
//children (optional)
import React from 'react'
export default function Absolute(props) {
    let styleAbs = {
        position: 'absolute',
        top: props.top || 0,
        left: props.left || 0,
        right: props.right || 0,
        bottom: props.bottom || 0,
    }
    return (
        <div id={props.id} className={window.DEBUG ? `testBox ${props.className ? props.className : ''}` : `${props.className ? props.className : ''}`} style={{...styleAbs, ...props.style}} onClick={props.listener ? () => props.listener(props.id) : () => {} }>
            {props.children}
        </div>
    )
}