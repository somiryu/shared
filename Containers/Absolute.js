//top = 0
//left = 0
//right = 0
//style = {textAlign: 'center', ...}
//children (optional)
import React from 'react'
export default function Absolute(props) {
    let styleAbs = {
        position: 'absolute',
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
    }
    return (
        <div id={props.id} className={window.DEBUG ? `testBox ${props.className ? props.className : ''}` : `${props.className ? props.className : ''}`} style={{...styleAbs, ...props.style}} onClick={props.listener ? () => props.listener(props.id) : () => {} }>
            {props.children}
        </div>
    )
}