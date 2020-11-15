//justify = justifyContent | default('center')
//align = alignItems | default('center')
//direction = flexDirection | default('row') 
//style = {textAlign: 'center', ...}
//children (optional)
//debug
//id
import React from 'react'

export default function Flex(props) {
    let styleFlex = {
        display:'flex',
        alignItems: props.align || 'flex-start',
        justifyContent: props.justify || 'center',
        flexDirection: props.direction || 'row',
    }
    return (
        <div id={props.id} className={props.className || (window.DEBUG ? 'testBox' : '') } style={{ ...styleFlex, ...props.style  }}
            onClick={props.onClick}
            onMouseOver={props.onMouseOver}
            onMouseLeave={props.onMouseLeave}
        >
            {props.children}
        </div>
    )
}
