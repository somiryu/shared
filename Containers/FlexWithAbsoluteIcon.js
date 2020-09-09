import React from 'react'
//id
//state
//style = {}
//icon = image | (optional)
//iconPosition = {top: 0, left: 0, right:0} | (optional)
//listener
import Flex from './Flex'

export default function FlexWithAbsoluteIcon(props) {
    let positionIcon = {
        position: 'relative',
        top: (props.iconPosition && props.iconPosition.top) || 0,
        left: (props.iconPosition && props.iconPosition.left) || 0,
        right: (props.iconPosition && props.iconPosition.right) || 0
    }
    return (
        <div id={props.id} style={{...props.style}}>
            <Flex>
            {props.children}
            </Flex>
            {props.icon ? (<Flex {...props} style={{ ...positionIcon }}>
                <img src={props.icon} alt={'Icon'} style={{width:'60%'}} />
                
            </Flex>) : <div></div>}
            
        </div>
    )
}
