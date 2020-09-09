//id
//state
//images = { state1: image, state2: image}
//icon = image | (optional)
//iconPosition = {top: 0, left: 0, right:0} | (optional)
//style
import React, { useState, useEffect } from 'react'
import Flex from '../Containers/Flex'

export default function ImageMultiStateAndIcon(props) {
    const [current, setCurrent] = useState('off');
    let positionIcon = {
        position: 'absolute',
        top: (props.iconPosition && props.iconPosition.top) || 0,
        left: (props.iconPosition && props.iconPosition.left) || 0,
        right: (props.iconPosition && props.iconPosition.right) || 0
    }
    useEffect(() => {
        setCurrent(props.state)
    }, [props.state])
    return (
        <div key={props.id} id={props.id} style={{ display: 'inline-block', position: 'relative', height: '100%', ...props.style }}>
            <img src={props.images[current]} alt={'MultiState'} width='100%' />

            {props.icon ? (<Flex {...props} style={{ ...positionIcon }}><img src={props.icon} alt={'Icon'} style={{width: '60%'}}></img>
            </Flex>) : <div></div>}
        </div>
    )
}
