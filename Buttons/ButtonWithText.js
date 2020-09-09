//id, image, listener, style({}), scale(1.1), children (FROM BUTTONIMAGE)
//margin = default(8%)
//text = tag for text
//positionText = {top:%,left:%,right:%,bottom:%}
//idButton
import React from 'react'
import ButtonImage from './ButtonImage'

const ButtonWithText = (props) => {
    let style = { position: 'absolute', width: '100%', boxSizing: 'border-box', height: '100%', top: '0', left: '0' }
    let positionText = props.positionText || {}
    let position = {
        top: positionText.top || '0%',
        left: positionText.left || '0%',
        right: positionText.right || '0%',
        bottom: positionText.bottom || '0%'
    }
    return (
        <ButtonImage
            {...props}
        >
            <div id={props.idButton} className={props.debug ? 'testBox' : ''}
                style={style}>
                <div style={{ width: '50%', overflowY: 'auto' }}>
                    <div style={{ position: 'absolute', top: position.top, left: position.left, right: position.right, bottom: position.bottom, margin: props.margin || '6%', overflow: 'auto', textAlign: "center" }}>
                        {props.text}
                    </div>
                </div>
            </div>
        </ButtonImage>
    )
}

export default ButtonWithText
