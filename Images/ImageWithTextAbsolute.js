import React from 'react'
//image = image
//positionChild = {top:0, left:0, right:0}
import Absolute from '../Containers/Absolute'

export default function ImageWithTextAbsolute(props) {
    let position = {
        top: props.positionChild && props.positionChild.top ? props.positionChild.top : 0,
        left: props.positionChild && props.positionChild.left ? props.positionChild.left : 0,
        right: props.positionChild && props.positionChild.right ? props.positionChild.right : 0,
        bottom: props.positionChild && props.positionChild.bottom ? props.positionChild.bottom : 0,
    }
    return (
        <div className={window.DEBUG ? 'ImageWithTextAbsolute testBox' : 'ImageWithTextAbsolute'} style={{ position: 'relative', ...props.style }}>
            <img src={props.image} alt="Logo" width="100%"></img>
            <Absolute top={position.top} left={position.left} right={position.right} bottom={position.bottom} style={{ display: 'flex', width: props.width || '100%', justifyContent: 'center' }}>
                {props.children}
            </Absolute>
        </div>
    )
}
