//id, state, images, listeners, styles, children (FROM BUTTONMULTISTATE)
//stylesNumber = {key: {}, key2: {}}
//debug 
//number
//idNumber

import React, { useState, useEffect } from 'react'
import ButtonMultiState from '../Buttons/ButtonMultiState'

function ButtonMultiStateWithNumber(props) {
    const [current, setCurrent] = useState(props.state)
    useEffect(() => { setCurrent(props.state) }, [props.state])
    let styleNumber = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
    }
    return (
        <ButtonMultiState
            {...props}
        >
            <div id={props.idButton} className={props.debug ? 'testBox ButtonMultiStateWithNumber' : 'ButtonMultiStateWithNumber'}
                style={styleNumber}>
                <div className={props.debug ? 'testBox' : ''}
                    style={{ height: '100%', display: 'flex', alignItems: ' center', justifyContent: 'center' }}>
                    <h1 className={props.className ? props.className : 'h1-number'} style={{ margin: 0, ...props.stylesNumber[current] }}>
                        {props.number || 1}
                    </h1>
                </div>
            </div>
        </ButtonMultiState>
    )
}

export default ButtonMultiStateWithNumber;