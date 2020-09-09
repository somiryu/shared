//id, state, images, listeners, styles, children (FROM BUTTONMULTISTATEWITHNUMBER)
//imageRight = image, separator = image, imageLeft = image
//stylesNumber = {key: {}, key2: {}}, debug, number
//styleFather = {key: {}, key2: {}}
import React from 'react'
import TwoButtonsWithSeparator from './TwoButtonsWithSeparator'
import ButtonMultiStateWithNumber from './ButtonMultiStateWithNumber'

export default function ButtonMultiStateWithButtonSeparator(props) {
    return (
        <div className="ButtonMultiStateWithButtonSeparator" style={{display:'flex', flexDirection:'column', ...props.styleFather}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'50%', width:'30%', margin:'0 auto'}}>
                <ButtonMultiStateWithNumber
                    {...props.ButtonMultiState}
                >
                </ButtonMultiStateWithNumber>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'50%'}}>
                <TwoButtonsWithSeparator
                    {...props}
                >
                </TwoButtonsWithSeparator>
            </div>
        </div>
    )
}
