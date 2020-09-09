// textAlign
// image
// debug
// padding = padding of label
// text

import React from "react";

export default (props) => {
    let style = { position: 'absolute', width: '100%', boxSizing: 'border-box', height: '100%', top: '0', left: '0', padding: props.padding || '8%' }
    return (
        <div className={props.debug ? 'testBox ImagedLabel' : 'ImagedLabel'} style={{ position: "relative", display: "inline-block" }}>
            <img alt="" src={props.image} style={{ width: "100%" }} />
            <div className={props.debug ? 'testBox' : ''}
                style={style}>
                <div className={props.debug ? 'testBox' : ''} style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}