// id, state, images, listeners, styles, children (FROM BUTTONMULTISTATE)
// textAlign, imageLabel, debug, paddingLabel, label (FROM IMAGEDLABEL)
// idCurrency, quantity, duration(2000), imageCurrency, fontSize(1.1em), fontFamily(inherit), childStyle, styleX, displayX
// separator, imageRight, imageLeft (FROM TWOBUTTONSWITHSEPARATOR)
import React from "react";
import ImagedLabel from "../Labels/ImagedLabel";
import ButtonMultiState from "../Buttons/ButtonMultiState";
import TwoButtonsWithSeparator from "../Buttons/TwoButtonsWithSeparator";

export default (props) => {
    return (
        <div className={ props.debug ? "testBox CurrencyList" :"CurrencyList"} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <div className={ props.debug ? "testBox" :""} style={{ width: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <ImagedLabel
                    {...props}
                    image={props.imageLabel}
                    padding={props.paddingLabel}
                    label={<div style={{ width: '100%', margin: '0 auto' }}><p style={{ margin: 0, color: '#d27d3a', fontSize: '.8rem', fontWeight: '700' }}>{props.label}</p></div>}
                >
                </ImagedLabel>
            </div>
            <div className={ props.debug ? "testBox" :""} style={{ width: '20%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <ButtonMultiState
                    {...props}
                ></ButtonMultiState>
            </div>
            <div className={ props.debug ? "testBox" :""} style={{ width: '40%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TwoButtonsWithSeparator
                    {...props}
                >
                </TwoButtonsWithSeparator>
            </div>
        </div>
    )
}