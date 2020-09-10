//id, state, images, listeners, styles, children (FROM BUTTONMULTISTATE)
//stylesNumber = {key: {}, key2: {}}
//debug 
//number
//idNumber

import React, { useState, useEffect } from 'react'
import ButtonMultiState from './ButtonMultiState'

function ButtonMultiStateWithText(props) {
    const [current, setCurrent] = useState(props.state)
    useEffect(() => { setCurrent(props.state) }, [props.state])
    let styleText = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
    }
    console.log('STYLES TEXT ===> ', props.stylesText)
    return (
        <ButtonMultiState
            {...props}
        >
            <div id={props.idButton} className={props.debug ? 'testBox ButtonMultiStateWithText' : 'ButtonMultiStateWithText'}
                style={styleText}>
                <div className={props.debug ? 'testBox' : ''}
                    style={{ height: '100%', display: 'flex', alignItems: ' center', justifyContent: 'center',...props.stylesText[current] }}>
                    {props.text || 1}
                </div>
            </div>
        </ButtonMultiState>
    )
}

export default ButtonMultiStateWithText;